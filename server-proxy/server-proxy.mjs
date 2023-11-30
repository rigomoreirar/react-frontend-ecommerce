import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//This need to be made into a secret
const backendBaseURL = `${process.env.BACKEND_CONNECTION_STRING}`;

// Proxy middleware for API routes
const apiProxy = createProxyMiddleware('/api', {
  target: backendBaseURL,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api': '/api',
  },
  onError: (err, req, res) => {
    res.status(500).json({ message: 'Error communicating with backend' });
  },
});

// Proxy middleware for image uploads
const imageProxy = createProxyMiddleware('/uploads/images', {
  target: backendBaseURL,
  changeOrigin: true,
  pathRewrite: {
    '^/uploads/images': '/uploads/images',
  },
  onError: (err, req, res) => {
    res.status(500).json({ message: 'Error fetching images' });
  },
});

// Apply the proxy middlewares
app.use(apiProxy);
app.use(imageProxy);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Catchall handler for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
