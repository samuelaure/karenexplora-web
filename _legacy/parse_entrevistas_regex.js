import fs from 'fs';

const filePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\entrevistas.html";
const content = fs.readFileSync(filePath, 'utf-8');

// Regex to capture cards roughly.
// Squarespace image blocks often look like:
// <div class="sqs-block image-block ..."> ... <img ... data-src="URL" ...> ... <a href="LINK">
// Or text blocks with links.

// Let's try to just find all Images and their nearest Links.
// This is heuristic.

const items = [];

// 1. Find all images with data-src (Squarespace uses data-src usually)
const imgRegex = /<img[^>]+data-src="([^"]+)"[^>]*>/g;
let match;
const images = [];
while ((match = imgRegex.exec(content)) !== null) {
    images.push({ src: match[1], index: match.index });
}

// 2. Find all links
const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gs;
const links = [];
while ((match = linkRegex.exec(content)) !== null) {
    links.push({ href: match[1], text: match[2].replace(/<[^>]+>/g, '').trim(), index: match.index });
}

// 3. Find Titles (h1-h4)
const titleRegex = /<h[1-4][^>]*>(.*?)<\/h[1-4]>/gs;
const titles = [];
while ((match = titleRegex.exec(content)) !== null) {
    titles.push({ text: match[1].replace(/<[^>]+>/g, '').trim(), index: match.index });
}

console.log("Found images:", images.length);
console.log("Found links:", links.length);
console.log("Found titles:", titles.length);

// Attempt to group them by proximity?
// Or just dump them so the human (me) can match them up.

// Let's just output the list of links with their texts, this usually contains the buttons or titles.
console.log("LINKS FOUND:");
links.forEach(l => console.log(JSON.stringify(l)));

console.log("TITLES FOUND:");
titles.forEach(t => console.log(JSON.stringify(t)));

console.log("IMAGES STARTS:");
images.slice(0, 10).forEach(i => console.log(i.src));
