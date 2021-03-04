const path = require('path');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const atImport = require('postcss-import');
const presetEnv = require('postcss-preset-env');
const importSvg = require('postcss-import-svg');
const { breakpoints: customMedia } = require('./packages/tailwind-config/colors');

module.exports = (ctx) => {
    const plugins = [
        atImport,
        // For some reason, hot reloading the tailwind config only works in vite when we don't specify a config.
        // But if we don't specify a config, PostCSS doens't load it when building for prod.
        ctx.env === 'production' ? tailwind(require('./tailwind.config')) : tailwind,
        presetEnv({
            stage: 0,
            browsers: 'extends @finn-no/browserslist-config',
            importFrom: { customMedia },
            features: {
                'focus-visible-pseudo-class': false,
            },
        }),
        importSvg({
            paths: [
                path.resolve(path.dirname(require.resolve('@finn-no/fabric-icons/package.json')), 'dist'),
            ],
        }),
    ];

    // Autoprefixer and cssnano slows down the build, so only do it if we're building for production
    if (ctx.env === 'production') {
        plugins.push(autoprefixer, cssnano({ preset: 'default' }));
    }

    return {
        plugins,
    };
};
