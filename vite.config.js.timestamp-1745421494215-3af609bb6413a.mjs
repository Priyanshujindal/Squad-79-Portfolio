// vite.config.js
import { defineConfig } from "file:///C:/Users/DELL/OneDrive/Desktop/Squad-79-Portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/DELL/OneDrive/Desktop/Squad-79-Portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Users\\DELL\\OneDrive\\Desktop\\Squad-79-Portfolio";
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
    // Optimize inlining of smaller assets (4kb)
    minify: "terser",
    // Use Terser for better minification
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        // Remove console logs only in production
        drop_debugger: true,
        pure_funcs: mode === "production" ? ["console.log", "console.debug", "console.info"] : []
        // Remove specific functions
      }
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500,
    // Increased limit for chunks
    sourcemap: mode !== "production",
    // Disable sourcemaps in production for better performance
    reportCompressedSize: false,
    // Skip calculating compressed size for faster builds
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html")
      },
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("scheduler") || id.includes("prop-types")) {
              return "react-vendor";
            }
            if (id.includes("react-router") || id.includes("react-dom")) {
              return "router-vendor";
            }
            if (id.includes("react-icons") || id.includes("bootstrap-icons")) {
              return "icons-vendor";
            }
            if (id.includes("bootstrap") || id.includes("react-parallax") || id.includes("howler")) {
              return "ui-vendor";
            }
            if (id.includes("@formspree") || id.includes("vercel")) {
              return "services-vendor";
            }
            return "vendor";
          }
        },
        assetFileNames: (assetInfo) => {
          const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"];
          const fontExtensions = [".woff", ".woff2", ".eot", ".ttf", ".otf"];
          const info = assetInfo.name.split(".");
          const ext = `.${info[info.length - 1]}`;
          if (imageExtensions.includes(ext)) {
            return "assets/images/[name]-[hash][extname]";
          }
          if (fontExtensions.includes(ext)) {
            return "assets/fonts/[name]-[hash][extname]";
          }
          if (ext === ".css") {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js"
      }
    }
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-icons",
      "bootstrap",
      "react-parallax",
      "howler",
      "use-sound",
      "@formspree/react"
    ],
    // Pre-bundle these dependencies
    esbuildOptions: {
      target: "es2020"
      // Modern target for better optimization
    }
  },
  server: {
    hmr: {
      overlay: true
      // Enable HMR overlay for better development experience
    },
    fs: {
      strict: true
      // Enable strict file system for better security and performance
    },
    open: true
    // Auto-open browser on server start
  },
  preview: {
    port: 4173,
    open: true
    // Auto-open browser on preview server start
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    keepNames: false,
    // Don't keep variable names, allows better minification
    legalComments: "none"
    // Remove legal comments to reduce size
  },
  css: {
    devSourcemap: mode !== "production",
    preprocessorOptions: {
      // Add any CSS preprocessor options here if needed
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxERUxMXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcU3F1YWQtNzktUG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxERUxMXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcU3F1YWQtNzktUG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ERUxML09uZURyaXZlL0Rlc2t0b3AvU3F1YWQtNzktUG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYmFzZTogJy4vJyxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NiwgLy8gT3B0aW1pemUgaW5saW5pbmcgb2Ygc21hbGxlciBhc3NldHMgKDRrYilcbiAgICBtaW5pZnk6ICd0ZXJzZXInLCAvLyBVc2UgVGVyc2VyIGZvciBiZXR0ZXIgbWluaWZpY2F0aW9uXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiBtb2RlID09PSAncHJvZHVjdGlvbicsIC8vIFJlbW92ZSBjb25zb2xlIGxvZ3Mgb25seSBpbiBwcm9kdWN0aW9uXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICAgIHB1cmVfZnVuY3M6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/IFsnY29uc29sZS5sb2cnLCAnY29uc29sZS5kZWJ1ZycsICdjb25zb2xlLmluZm8nXSA6IFtdLCAvLyBSZW1vdmUgc3BlY2lmaWMgZnVuY3Rpb25zXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCwgLy8gSW5jcmVhc2VkIGxpbWl0IGZvciBjaHVua3NcbiAgICBzb3VyY2VtYXA6IG1vZGUgIT09ICdwcm9kdWN0aW9uJywgLy8gRGlzYWJsZSBzb3VyY2VtYXBzIGluIHByb2R1Y3Rpb24gZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSwgLy8gU2tpcCBjYWxjdWxhdGluZyBjb21wcmVzc2VkIHNpemUgZm9yIGZhc3RlciBidWlsZHNcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiAoaWQpID0+IHtcbiAgICAgICAgICAvLyBNb3JlIGdyYW51bGFyIGNodW5rIHNwbGl0dGluZyBmb3IgYmV0dGVyIGNhY2hpbmdcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0JykgfHwgaWQuaW5jbHVkZXMoJ3NjaGVkdWxlcicpIHx8IGlkLmluY2x1ZGVzKCdwcm9wLXR5cGVzJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdyZWFjdC12ZW5kb3InXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0LXJvdXRlcicpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1kb20nKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ3JvdXRlci12ZW5kb3InXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0LWljb25zJykgfHwgaWQuaW5jbHVkZXMoJ2Jvb3RzdHJhcC1pY29ucycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnaWNvbnMtdmVuZG9yJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdib290c3RyYXAnKSB8fCBpZC5pbmNsdWRlcygncmVhY3QtcGFyYWxsYXgnKSB8fCBpZC5pbmNsdWRlcygnaG93bGVyJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd1aS12ZW5kb3InXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ0Bmb3Jtc3ByZWUnKSB8fCBpZC5pbmNsdWRlcygndmVyY2VsJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdzZXJ2aWNlcy12ZW5kb3InXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcicgLy8gT3RoZXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IGltYWdlRXh0ZW5zaW9ucyA9IFsnLmpwZycsICcuanBlZycsICcucG5nJywgJy5naWYnLCAnLnN2ZycsICcud2VicCddO1xuICAgICAgICAgIGNvbnN0IGZvbnRFeHRlbnNpb25zID0gWycud29mZicsICcud29mZjInLCAnLmVvdCcsICcudHRmJywgJy5vdGYnXTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBgLiR7aW5mb1tpbmZvLmxlbmd0aCAtIDFdfWA7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGltYWdlRXh0ZW5zaW9ucy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9pbWFnZXMvW25hbWVdLVtoYXNoXVtleHRuYW1lXSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChmb250RXh0ZW5zaW9ucy5pbmNsdWRlcyhleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9mb250cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGV4dCA9PT0gJy5jc3MnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9jc3MvW25hbWVdLVtoYXNoXVtleHRuYW1lXSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xuICAgICAgICB9LFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAncmVhY3QnLCBcbiAgICAgICdyZWFjdC1kb20nLCBcbiAgICAgICdyZWFjdC1yb3V0ZXItZG9tJywgXG4gICAgICAncmVhY3QtaWNvbnMnLCBcbiAgICAgICdib290c3RyYXAnLCBcbiAgICAgICdyZWFjdC1wYXJhbGxheCcsXG4gICAgICAnaG93bGVyJyxcbiAgICAgICd1c2Utc291bmQnLFxuICAgICAgJ0Bmb3Jtc3ByZWUvcmVhY3QnLFxuICAgIF0sIC8vIFByZS1idW5kbGUgdGhlc2UgZGVwZW5kZW5jaWVzXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIHRhcmdldDogJ2VzMjAyMCcsIC8vIE1vZGVybiB0YXJnZXQgZm9yIGJldHRlciBvcHRpbWl6YXRpb25cbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IHRydWUsIC8vIEVuYWJsZSBITVIgb3ZlcmxheSBmb3IgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2VcbiAgICB9LFxuICAgIGZzOiB7XG4gICAgICBzdHJpY3Q6IHRydWUsIC8vIEVuYWJsZSBzdHJpY3QgZmlsZSBzeXN0ZW0gZm9yIGJldHRlciBzZWN1cml0eSBhbmQgcGVyZm9ybWFuY2VcbiAgICB9LFxuICAgIG9wZW46IHRydWUsIC8vIEF1dG8tb3BlbiBicm93c2VyIG9uIHNlcnZlciBzdGFydFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNDE3MyxcbiAgICBvcGVuOiB0cnVlLCAvLyBBdXRvLW9wZW4gYnJvd3NlciBvbiBwcmV2aWV3IHNlcnZlciBzdGFydFxuICB9LFxuICBlc2J1aWxkOiB7XG4gICAgbG9nT3ZlcnJpZGU6IHsgJ3RoaXMtaXMtdW5kZWZpbmVkLWluLWVzbSc6ICdzaWxlbnQnIH0sXG4gICAga2VlcE5hbWVzOiBmYWxzZSwgLy8gRG9uJ3Qga2VlcCB2YXJpYWJsZSBuYW1lcywgYWxsb3dzIGJldHRlciBtaW5pZmljYXRpb25cbiAgICBsZWdhbENvbW1lbnRzOiAnbm9uZScsIC8vIFJlbW92ZSBsZWdhbCBjb21tZW50cyB0byByZWR1Y2Ugc2l6ZVxuICB9LFxuICBjc3M6IHtcbiAgICBkZXZTb3VyY2VtYXA6IG1vZGUgIT09ICdwcm9kdWN0aW9uJyxcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAvLyBBZGQgYW55IENTUyBwcmVwcm9jZXNzb3Igb3B0aW9ucyBoZXJlIGlmIG5lZWRlZFxuICAgIH0sXG4gIH0sXG59KSlcbiJdLAogICJtYXBwaW5ncyI6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
