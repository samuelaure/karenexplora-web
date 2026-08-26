import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security Headers
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                "default-src": ["'self'"],
                "script-src": ["'self'", "https://cdn.voiceflow.com", "blob:"],
                "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.voiceflow.com"],
                "font-src": ["'self'", "https://fonts.gstatic.com", "https://cdn.voiceflow.com"],
                "connect-src": ["'self'", "https://general-runtime.voiceflow.com", "https://cdn.voiceflow.com", "https://ve.dolarapi.com", "https://runtime-api.voiceflow.com", "wss://general-runtime.voiceflow.com"],
                "img-src": ["'self'", "data:", "https://cdn.voiceflow.com", "https://*.voiceflow.com", "https://*.vf-assets.com", "https://cm4-production-assets.s3.amazonaws.com"],
                "frame-src": ["'self'", "https://*.voiceflow.com", "https://*.voiceflow.io"],
                "object-src": ["'none'"],
                "base-uri": ["'self'"],
                "upgrade-insecure-requests": [],
            },
        },
        crossOriginEmbedderPolicy: false,
    })
);

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
