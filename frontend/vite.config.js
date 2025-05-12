import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // Asegúrate de que esta línea sea correcta

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})