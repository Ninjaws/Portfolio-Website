/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

const winged = plugin(function({ addUtilities }) {
  const createWingedClass = (position) => {
    return {
      'position': 'relative',
      '&::before, &::after': {
        content: '""',
        height: '2px',
        width: '4rem',
        background: '#ea5f00',
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        margin: '0 auto',
        transform: 'translateY(-50%)'
      },
      '&::before': {
        left: `-${position}`,
      },
      '&::after': {
        left: position,//`${position}rem`,
      }
    };
  };

  addUtilities({
    '.winged-11': createWingedClass('11rem'),
    '.winged-14': createWingedClass('14rem')
  });
});

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xs: '375px'
      }
    },
  },
  plugins: [winged, backfaceVisibility],
};
