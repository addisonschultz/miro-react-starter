import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
const path = require("path");
const mkcert = require("vite-plugin-mkcert").default;



module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        app: path.resolve(__dirname, "app.html"),
      },
    },
  },
  server: {
    https: true,
  },
  plugins: [mkcert(), react()],
});
