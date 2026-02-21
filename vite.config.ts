import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['@gsmflow/plugin-sdk']
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false
  }
});
