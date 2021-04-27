const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities, e }) => {
    const durationZero = {
        [e('reduced-motion:duration-0')]: { transitionDuration: '0s' },
    };
    addUtilities(durationZero);
});
