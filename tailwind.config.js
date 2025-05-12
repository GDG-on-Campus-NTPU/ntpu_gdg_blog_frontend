const plugin = require('tailwindcss/plugin');
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              'word-break': 'break-word',
            },
          },
        },
      },
    },
  },
};
