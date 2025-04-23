import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // Optimize inlining of smaller assets (4kb)
    minify: 'terser', // Use Terser for better minification
    terserOptions: {
      compress: {
        drop_console: mode === 'production', // Remove console logs only in production
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.debug', 'console.info'] : [], // Remove specific functions
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500, // Increased limit for chunks
    sourcemap: mode !== 'production', // Disable sourcemaps in production for better performance
    reportCompressedSize: false, // Skip calculating compressed size for faster builds
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: (id) => {
          // More granular chunk splitting for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler') || id.includes('prop-types')) {
              return 'react-vendor'
            }
            if (id.includes('react-router') || id.includes('react-dom')) {
              return 'router-vendor'
            }
            if (id.includes('react-icons') || id.includes('bootstrap-icons')) {
              return 'icons-vendor'
            }
            if (id.includes('bootstrap') || id.includes('react-parallax') || id.includes('howler')) {
              return 'ui-vendor'
            }
            if (id.includes('@formspree') || id.includes('vercel')) {
              return 'services-vendor'
            }
            return 'vendor' // Other dependencies
          }
        },
        assetFileNames: (assetInfo) => {
          const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
          const fontExtensions = ['.woff', '.woff2', '.eot', '.ttf', '.otf'];
          
          const info = assetInfo.name.split('.');
          const ext = `.${info[info.length - 1]}`;
          
          if (imageExtensions.includes(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          
          if (fontExtensions.includes(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          
          if (ext === '.css') {
            return 'assets/css/[name]-[hash][extname]';
          }
          
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
      }
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'react-icons', 
      'bootstrap', 
      'react-parallax',
      'howler',
      'use-sound',
      '@formspree/react',
    ], // Pre-bundle these dependencies
    esbuildOptions: {
      target: 'es2020', // Modern target for better optimization
    },
  },
  server: {
    hmr: {
      overlay: true, // Enable HMR overlay for better development experience
    },
    fs: {
      strict: true, // Enable strict file system for better security and performance
    },
    open: true, // Auto-open browser on server start
  },
  preview: {
    port: 4173,
    open: true, // Auto-open browser on preview server start
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    keepNames: false, // Don't keep variable names, allows better minification
    legalComments: 'none', // Remove legal comments to reduce size
  },
  css: {
    devSourcemap: mode !== 'production',
    preprocessorOptions: {
      // Add any CSS preprocessor options here if needed
    },
  },
}))
