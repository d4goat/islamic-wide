/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
export default <Partial<Config>> {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jakarta": ['Plus Jakarta Sans', "serif"]
      }
    },
  },
  plugins: [],
}