import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The resume button is only rendered when the PDF actually exists.
// Place your PDF at public/Sujal_Singhal_Resume.pdf (restart `npm run dev` afterwards).
const resumePath = fileURLToPath(
  new URL('./public/Sujal_Singhal_Resume.pdf', import.meta.url),
)
const hasResume = existsSync(resumePath)

export default defineConfig({
  plugins: [react()],
  define: {
    __HAS_RESUME__: JSON.stringify(hasResume),
  },
})
