import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addUtilities }) => {
    const transitionGpu = {
        ['.transition-gpu']: { backfaceVisibility: 'hidden' },
    };
    addUtilities(transitionGpu);
});
