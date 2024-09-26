// vite.config.ts
import { defineConfig } from 'vitest/config'; // Vite configuration function
import react from '@vitejs/plugin-react'; // React plugin for Vite

// Export the configuration
export default defineConfig({
  plugins: [react()], // Specify the Vite plugins you want to use
  test: {
    globals: true, // Enables Jest-like global functions
    environment: 'jsdom', // Use jsdom as the testing environment
    setupFiles: './src/setupTests.ts', // Specify the path to your setup file
  },
});
