const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
    const transitionGpu = {
        ['.transition-gpu']: { backfaceVisibility: 'hidden' },
    };
    addUtilities(transitionGpu);
});
