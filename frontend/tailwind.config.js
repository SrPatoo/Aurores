/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        maize: {
          '50': '#fcf8f0',
          '100': '#f7eedd',
          '200': '#eacea4',
          '300': '#e4bf8d',
          '400': '#d99d5e',
          '500': '#d0833f',
          '600': '#c26e34',
          '700': '#a1562d',
          '800': '#82462a',
          '900': '#693a25',
          '950': '#381c12',
        },
        'true-v': {
          '50': '#f5f5fd',
          '100': '#edecfb',
          '200': '#dcdbf9',
          '300': '#c3bff3',
          '400': '#a39aeb',
          '500': '#8674e2',
          '600': '#6f52d5',
          '700': '#6040c1',
          '800': '#5035a2',
          '900': '#432d85',
          '950': '#281b5a',
        },
        'sea-pink': {
          '50': '#fdf3f3',
          '100': '#fce7e9',
          '200': '#f9d2d7',
          '300': '#f3aeb5',
          '400': '#ef96a2',
          '500': '#e0536a',
          '600': '#cb3352',
          '700': '#ab2545',
          '800': '#8f223f',
          '900': '#7b203b',
          '950': '#440d1b',
        },
        'grandis': {
          '50': '#fff8eb',
          '100': '#feebc7',
          '200': '#fcd487',
          '300': '#fbb94e',
          '400': '#f9a026',
          '500': '#f37d0d',
          '600': '#d75a08',
          '700': '#b33b0a',
          '800': '#912e0f',
          '900': '#772610',
          '950': '#441104',
        },
      },
    },
  },
  plugins: [
    flowbite.plugin()
]
}
