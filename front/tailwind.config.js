import flowbite from 'flowbite-react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'arena-green': {
          '50': '#eefde8',
          '100': '#d6fbcc',
          '200': '#b2f6a0',
          '300': '#7ced61',
          '400': '#58e13a',
          '500': '#37c71b',
          '600': '#259f11',
          '700': '#207912',
          '800': '#1d6014',
          '900': '#1c5116',
          '950': '#092d06',
          },
        // "primary-100":"#7FFF00",
        // "primary-200":"#aaff70",
        // "primary-300":"#266100",
        // "accent-100":"#00FF7F",
        // "accent-200":"#00971f",
        // "text-100":"#000000",
        // "text-200":"#2c2c2c",
        // "bg-100":"#DFFF00",
        // "bg-200":"#d4f500",
        // "bg-300":"#bde400",

        // "primary-100":"#de283b",
        // "primary-200":"#ff6366",
        // "primary-300":"#ffccc4",
        // "accent-100":"#25b1bf",
        // "accent-200":"#005461",
        // "text-100":"#1a1a1a",
        // "text-200":"#404040",
        // "bg-100":"#ffffff",
        // "bg-200":"#f5f5f5",
        // "bg-300":"#cccccc",

        // 'primary-100':'#4CAF50',
        // 'primary-200':'#2a9235',
        // 'primary-300':'#005100',
        // 'accent-100':'#FFC107',
        // 'accent-200':'#916400',
        // 'text-100':'#333333',
        // 'text-200':'#5c5c5c',
        // 'bg-100':'#C4E5F5',
        // 'bg-200':'#badbeb',
        // 'bg-300':'#93b3c2',

        // 'primary-100':'#FFD700',
        // 'primary-200':'#ddb900',
        // 'primary-300':'#917800',
        // 'accent-100':'#FF4500',
        // 'accent-200':'#ffe49a',
        // 'text-100':'#FFFFFF',
        // 'text-200':'#e0e0e0',
        // 'bg-100':'#1A1A1A',
        // 'bg-200':'#292929',
        // 'bg-300':'#404040',
          
        'primary-200':'#b6ccd8',
        'primary-100':'#d4eaf7',
        'accent-100':'#71c4ef',
        'primary-300':'#3b3c3d',
        'text-100':'#1d1c1c',
        'accent-200':'#00668c',
        'bg-100':'#fffefb',
        'text-200':'#313d44',
        'bg-300':'#cccbc8',
        'bg-200':'#f5f4f1',
      }
    },
    
  },
  plugins: [
    flowbite,
  ],
}

  