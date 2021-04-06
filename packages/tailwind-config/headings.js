const plugin = require('tailwindcss/plugin');

const h1 = { '@apply text-34': {} };
const h2 = { '@apply text-28': {} };
const h3 = { '@apply text-22': {} };
const h4 = { '@apply text-16': {} };
const h5 = { '@apply text-14': {} };
const bold = { '@apply font-bold': {} };

module.exports = plugin(({ addUtilities, addBase }) => {
    const headings = {
        '.h1': h1,
        '.h2': h2,
        '.h3': h3,
        '.h4': h4,
        '.h5': h5,
        '.h1, .h2, .h3, .h4, .h5': bold,
    };
    const veryNormal = { fontWeight: 'normal !important' };
    addUtilities(headings, ['responsive']);
    addBase({
        h1,
        h2,
        h3,
        h4,
        h5,
        'h1, h2, h3, h4, h5': bold,
        '.font-normal': veryNormal, // fixes specificity/order issue with .hN classes
    });
});
