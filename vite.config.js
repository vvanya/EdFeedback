import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/EdFeedback',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        feedback: resolve(__dirname, 'feedback.html'),
        reviews: resolve(__dirname, 'reviews.html')
      }
    }
  }
})
