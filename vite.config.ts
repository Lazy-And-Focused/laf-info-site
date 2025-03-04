import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    warmup: {
      clientFiles: [
        './src/components/Header.tsx',
        './src/components/Footer.tsx',

        './src/hooks/useDeviceWidth.ts',

        './src/assets/icons/*.tsx',

        './src/config/*.ts',
        './src/utils/*.ts',
      ],
    },
  },
  plugins: [react()],
});
