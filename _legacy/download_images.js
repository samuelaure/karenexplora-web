const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download: ${response.statusCode} for ${url}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  const htmlFilePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\Karen Explora.html";
  const outputDir = path.join(__dirname, 'downloaded_images');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Reading HTML file: ${htmlFilePath}`);
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

  // Regex to find Squarespace CDN images and other common image formats
  // We look for data-src, src, or just URLs in quotes
  const cdnRegex = /https:\/\/images\.squarespace-cdn\.com\/content\/v1\/[a-zA-Z0-9]+\/[a-zA-Z0-9-]+\/[a-zA-Z0-9._-]+/g;
  const matches = htmlContent.match(cdnRegex) || [];
  
  // Also look for common image extensions just in case
  const imgRegex = /https?:\/\/[^\s"'>]+\.(?:jpg|jpeg|png|gif|webp|svg)/gi;
  const moreMatches = htmlContent.match(imgRegex) || [];

  const allUrls = [...new Set([...matches, ...moreMatches])];
  console.log(`Found ${allUrls.length} potential unique image URLs.`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < allUrls.length; i++) {
    const rawUrl = allUrls[i];
    // For Squarespace images, we want the highest resolution
    const downloadUrl = rawUrl.includes('squarespace-cdn.com') && !rawUrl.includes('format=') 
      ? `${rawUrl}?format=2500w` 
      : rawUrl;

    const baseName = path.basename(rawUrl.split('?')[0]);
    const ext = path.extname(baseName) || '.jpg';
    const fileName = baseName.includes('.') ? baseName : `${baseName}${ext}`;
    const dest = path.join(outputDir, fileName);

    try {
      console.log(`[${i + 1}/${allUrls.length}] Downloading ${fileName}...`);
      await downloadImage(downloadUrl, dest);
      successCount++;
    } catch (err) {
      console.error(`Failed to download ${downloadUrl}: ${err.message}`);
      failCount++;
    }
  }

  console.log(`\nFinished!`);
  console.log(`Successfully downloaded: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Images saved to: ${outputDir}`);
}

run().catch(console.error);
