import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react({
      // Enable support for `.js` files with JSX syntax
      jsxImportSource: 'react',
      include: [/\.js$/], // This tells Vite to include `.js` files for JSX
    }),
  ],
});
