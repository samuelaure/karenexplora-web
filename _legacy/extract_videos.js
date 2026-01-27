import fs from 'fs';

const filePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\YouTube.html";

console.log(`Reading: ${filePath}`);

if (!fs.existsSync(filePath)) {
    console.log("File NOT found.");
    process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf-8');

// Expanded regex to capture title and href roughly
// We assume standard HTML anchor tags
const regex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gis;

const videos = [];
let match;

while ((match = regex.exec(content)) !== null) {
    const url = match[1];
    // Remove HTML tags from title if any inside the anchor
    const title = match[2].replace(/<[^>]*>/g, '').trim();

    if (title.toLowerCase().includes('charles')) {
        if (url.includes('watch?v=') || url.includes('youtu.be')) {
            // Extract ID
            let id = '';
            if (url.includes('v=')) {
                id = url.split('v=')[1].split('&')[0];
            } else if (url.includes('youtu.be/')) {
                id = url.split('youtu.be/')[1].split('?')[0];
            }

            if (id) {
                // Avoid duplicates
                if (!videos.find(v => v.id === id)) {
                    videos.push({ title, id, url });
                }
            }
        }
    }
}

console.log(JSON.stringify(videos, null, 2));
