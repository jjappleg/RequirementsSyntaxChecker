import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RequirementsSyntaxChecker/' // Correct Base for GITHUB Site
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
