import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public files (like robots.txt, etc.) directly if needed
// app.use(express.static(path.join(__dirname, 'public')));

// Serve the static files from the Vite build output
app.use(express.static(path.join(__dirname, 'dist')));

// Send all other requests to index.html to let React Router handle them
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
