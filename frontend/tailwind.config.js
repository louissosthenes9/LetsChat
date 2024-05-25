/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
  "./src/**/*.{html,js,jsx}",
  './src/pages/**/*.{js,jsx}',
  './src/components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
],

mode: 'jit',


  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}

