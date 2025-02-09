import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure it's reading from the correct directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Explicitly define the entry point
    },
  },
});
