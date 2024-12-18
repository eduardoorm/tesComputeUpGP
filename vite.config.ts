import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tesComputeUpGP/', // Reemplaza 'nombre-del-repositorio' con el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html' // Asegúrate de incluir index.html como punto de entrada
    }
  }
});