import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stringHash from 'string-hash'

import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    modules: {
      // fix for theme with modules and tailwind, but I don't like it
      generateScopedName: (name, filename, css) => {
        if (name === 'dark') return 'dark'
        const i = css.indexOf(`.${name}`)
        const lineNumber = css.substr(0, i).split(/[\r\n]/).length
        const hash = stringHash(css).toString(36).substr(0, 5)

        return `_${name}_${hash}_${lineNumber}`
      },
    },
  },
})
