/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },
    // colors: {
    //   primary: '#1D4ED8',
    //   'secondary-blue': '#1E40AF',
    //   'secondary-green': '#047857',
    //   'secondary-black': '#2C2E3E',
    //   'secondary-white': '#FEFEFE',
    //   'secondary-gray': '#FBFBFB',
    //   'text-black': '#2C2E3E',
    //   'text-dark-gray': '#46474F',
    //   'text-medium-gray': '#585858',
    //   'text-light-gray': '#7E7D7D',
    //   'text-ultra-light-gray': '#BBBBBB',
    //   danger: '#EF2020',
    //   success: '#10FF61'
    // },
    fontFamily: {
      dm: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#1D4ED8',
        'secondary-blue': '#1E40AF',
        'secondary-light-blue': '#EBF0FF',
        'secondary-ultra-light-blue': '#F9FBFE',
        'secondary-dark-blue': '#1E3A8A',
        'secondary-green': '#047857',
        'secondary-light-green': '#DEFFE4',
        'secondary-medium-green': '#075F46',
        'secondary-dark-green': '#054D38',
        'secondary-black': '#2C2E3E',
        'secondary-white': '#FEFEFE',
        'secondary-gray': '#FBFBFB',
        'text-black': '#2C2E3E',
        'text-dark-gray': '#46474F',
        'text-medium-gray': '#585858',
        'text-light-gray': '#7E7D7D',
        'text-ultra-light-gray': '#BBBBBB',
        'danger-light': '#FFDEDE',
        'disabled-input': '#E4E4E4',
        danger: '#EF2020',
        success: '#10FF61'
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
