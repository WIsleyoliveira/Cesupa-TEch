import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Cesupa-TEch/',  // <--- aqui é o caminho base do GitHub Pages
  plugins: [react()],
});
