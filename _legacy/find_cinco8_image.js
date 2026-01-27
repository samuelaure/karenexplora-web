import fs from 'fs';

const filePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\entrevistas.html";
const content = fs.readFileSync(filePath, 'utf-8');

const anchor = "Karen Brewer se ha convertido en una referencia";
const index = content.indexOf(anchor);

if (index !== -1) {
    // Look ahead for the next image tag
    const imgStart = content.indexOf('<img', index);
    if (imgStart !== -1) {
        const imgEnd = content.indexOf('>', imgStart);
        console.log("Image tag found after text:");
        console.log(content.substring(imgStart, imgEnd + 1));
    } else {
        console.log("No image found after text.");
    }

    // Look behind for an image tag (sometimes image comes first in layout)
    const lastImgEnd = content.lastIndexOf('<img', index);
    if (lastImgEnd !== -1) {
        const lastImgStart = content.lastIndexOf('<img', index); // wait, lastIndexOf finds start
        // let's grab a chunk before
        console.log("Image tag found BEFORE text:");
        console.log(content.substring(lastImgStart, content.indexOf('>', lastImgStart) + 1));
    }
}
