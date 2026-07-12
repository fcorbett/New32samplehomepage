import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'http'

const BASE = '/New32samplehomepage/'

function redirectToBasePlugin(base: string): Plugin {
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`
  const baseNoSlash = baseWithSlash.replace(/\/$/, '')

  const redirect = (
    req: IncomingMessage,
    res: ServerResponse,
    next: () => void,
  ) => {
    const rawUrl = req.url ?? ''
    const [pathname, search = ''] = rawUrl.split('?')
    const query = search ? `?${search}` : ''

    if (pathname === '/' || pathname === '') {
      res.writeHead(302, { Location: `${baseWithSlash}${query}` })
      res.end()
      return
    }
    if (pathname === baseNoSlash) {
      res.writeHead(302, { Location: `${baseWithSlash}${query}` })
      res.end()
      return
    }
    if (pathname.startsWith('/v/') && !pathname.startsWith(baseNoSlash)) {
      res.writeHead(302, {
        Location: `${baseWithSlash}${pathname.slice(1)}${query}`,
      })
      res.end()
      return
    }
    next()
  }

  return {
    name: 'redirect-to-base',
    configureServer(server) {
      server.middlewares.use(redirect)
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirect)
    },
  }
}

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

export default defineConfig({
  base: BASE,
  build: {
    outDir: 'docs',
  },
  plugins: [
    redirectToBasePlugin(BASE),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
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
