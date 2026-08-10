import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        best: '#16A34A',
        expensive: '#EF4444',
        surface: '#F5F5F4',
        bark: '#1C1917',
      },
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
