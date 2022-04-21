const plugin = require('tailwindcss/plugin');

const focusRing = {
    outline: '2px solid var(--f-aqua-400)',
    outlineOffset: 'var(--f-outline-offset, 1px)',
};

const focusRingInset = {
    '--f-outline-offset': '-3px',
};

module.exports = plugin(({ addUtilities }) => {
    const focusRingClass = {
        '.focus-ring:focus': focusRing,
        '.focus-ring:focus:not(:focus-visible)': { outline: 'none' },
        '.focus-ring:focus-visible': focusRing,
        '.focus-ring-inset': focusRingInset,
    };
    addUtilities(focusRingClass);
});
