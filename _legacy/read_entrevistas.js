import fs from 'fs';
import path from 'path';

// Using the exact path provided by the user
const filePath = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\entrevistas.html";

console.log(`Reading: ${filePath}`);

if (!fs.existsSync(filePath)) {
    console.log("File NOT found at specific path. Checking current dir...");
    // Fallback to check if it's in the current listing just in case, though user said desktop
    if (!fs.existsSync('entrevistas.html')) {
        console.log("File really NOT found.");
        process.exit(1);
    } else {
        // Read local file if exists (for testing)
        console.log("Reading local entrevistas.html");
        // logic would go here if we were doing fallback
    }
}

try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log("--- START CONTENT ---");
    console.log(content);
    console.log("--- END CONTENT ---");
} catch (error) {
    console.error("Error reading file:", error.message);
}
