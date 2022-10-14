import plugin from 'tailwindcss/plugin.js'

const h1 = { '@apply text-34': {} };
const h2 = { '@apply text-28': {} };
const h3 = { '@apply text-22': {} };
const h4 = { '@apply text-16': {} };
const h5 = { '@apply text-14': {} };
const bold = { '@apply font-bold': {} };

export default plugin(({ addUtilities, addBase }) => {
    const headings = {
        '.h1': h1,
        '.h2': h2,
        '.h3': h3,
        '.h4': h4,
        '.h5': h5,
        '.h1, .h2, .h3, .h4, .h5': bold,
    };
    const veryNormal = { fontWeight: 'normal !important' };
    const verySmall = { fontWeight: 'small !important' };
    addUtilities(headings, ['responsive']);
    addBase({
        h1,
        h2,
        h3,
        h4,
        h5,
        'h1, h2, h3, h4, h5': bold,
        '.font-small': verySmall,
        '.font-normal': veryNormal, // fixes specificity/order issue with .hN classes
    });
});
