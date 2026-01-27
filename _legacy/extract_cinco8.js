import fs from 'fs';

const filePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\entrevistas.html";
const content = fs.readFileSync(filePath, 'utf-8');

const startString = "Karen Brewer se ha convertido en una referencia";
const endString = "Cinco.8";

const startIndex = content.indexOf(startString);
if (startIndex !== -1) {
    // Check for the end string after the start
    const endIndex = content.indexOf(endString, startIndex);
    if (endIndex !== -1) {
        console.log("Found text block:");
        // Get a generous chunk around it to see HTML structure and maybe images
        console.log(content.substring(startIndex - 500, endIndex + 500));
    } else {
        console.log("Start found but end string not found close by.");
    }
} else {
    console.log("Start text not found.");
}

// Also look for "Rescate de fauna Tocoma" to get its details
const tocomaIndex = content.indexOf("Rescate de fauna en Tocoma"); // The user said "Rescate de fauna Tocoma" but file might have "en"
if (tocomaIndex !== -1) {
    console.log("\n--- TOCOMA ---");
    console.log(content.substring(tocomaIndex - 500, tocomaIndex + 500));
} else {
    // Try without "en"
    const tocomaIndex2 = content.indexOf("Rescate de fauna Tocoma");
    if (tocomaIndex2 !== -1) {
        console.log("\n--- TOCOMA (alt) ---");
        console.log(content.substring(tocomaIndex2 - 500, tocomaIndex2 + 500));
    }
}
