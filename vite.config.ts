import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

/**
 * Injects responsive AVIF preload for the home hero (imagesrcset + imagesizes).
 */
function heroImagePreload(): Plugin {
  const avifByBytes: { fileName: string; bytes: number }[] = []

  return {
    name: 'hero-image-preload',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset') continue
        if (
          typeof file.fileName === 'string' &&
          /nicole-goddard-team-hero/i.test(file.fileName) &&
          /\.avif$/i.test(file.fileName)
        ) {
          const source = file.source
          const bytes =
            typeof source === 'string'
              ? Buffer.byteLength(source)
              : source.byteLength
          avifByBytes.push({ fileName: file.fileName, bytes })
        }
      }
    },
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (avifByBytes.length === 0) return html
        // Smaller file ≈ smaller width (480 < 800 < 1024)
        const sorted = [...avifByBytes].sort((a, b) => a.bytes - b.bytes)
        const widths = [480, 800, 1024].slice(0, sorted.length)
        const srcset = sorted
          .map((c, i) => `/${c.fileName.replace(/^\/+/, '')} ${widths[i]}w`)
          .join(', ')
        const href = '/' + sorted[0].fileName.replace(/^\/+/, '')
        const sizes = '(min-width: 1024px) 50vw, 100vw'
        const tag = `<link rel="preload" as="image" href="${href}" imagesrcset="${srcset}" imagesizes="${sizes}" type="image/avif" fetchpriority="high" />`
        return html.replace('</head>', `    ${tag}\n  </head>`)
      },
    },
  }
}

export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-router')) return 'react-router'
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  plugins: [
    figmaAssetResolver(),
    imagetools({
      defaultDirectives: new URLSearchParams(),
    }),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    heroImagePreload(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
