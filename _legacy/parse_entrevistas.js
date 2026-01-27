import fs from 'fs';
import { JSDOM } from 'jsdom';

const filePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\entrevistas.html";

try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;

    const items = [];

    // Squarespace usually puts content in specific blocks.
    // Let's look for standard image/text combinations if possible, or just extract links with images.

    // Strategy: Look for all anchor tags. check if they wrap an image or text.
    const anchors = doc.querySelectorAll('a');

    anchors.forEach(a => {
        const href = a.href;
        const img = a.querySelector('img');
        const text = a.textContent.trim();

        if (img || text) {
            // Try to find a "parent" container that might hold the title/desc if it's a card
            // In Squarespace, often the link is just on the image or button.

            // Let's simplified capture:
            items.push({
                href: href,
                imgSrc: img ? img.getAttribute('src') || img.getAttribute('data-src') : null,
                text: text,
                // context: a.parentElement.innerHTML
            });
        }
    });

    console.log(JSON.stringify(items, null, 2));

} catch (e) {
    console.error(e);
}
