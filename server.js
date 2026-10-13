import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);

// Health check endpoint for Cloud Run container probes
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Serve static files from the build output directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SPA fallback for all web routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Care VMA Health production server listening on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`Port ${PORT} is in use, falling back to port 3000...`);
    app.listen(3000, '0.0.0.0', () => {
      console.log(`Care VMA Health server listening on fallback port 3000`);
    });
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});
