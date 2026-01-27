const fs = require('fs');
const path = "C:\\Users\\Sam\\Desktop\\NauAds\\Karen Explora\\2026\\YouTube.html";
console.log(`Checking: ${path}`);
try {
    if (fs.existsSync(path)) {
        console.log("File exists!");
    } else {
        console.log("File NOT found.");
    }
} catch (e) {
    console.error(e);
}
