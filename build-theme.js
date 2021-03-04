const postcss = require('postcss');
const presetEnv = require('postcss-preset-env');
const path = require('path');
const { colors, troikaAliases, textColors } = require('./packages/tailwind-config/colors');

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : null;
}

const generateCustomColorProperties = (obj, toRgb = false) =>
    Object.entries(obj).reduce((acc, [k, v]) => {
        if (v === Object(v))
            Object.entries(v).forEach(
                ([level, hex]) =>
                    (acc[`--f-${k.toLowerCase()}-${level}${toRgb ? '-rgb' : ''}`] = toRgb
                        ? hexToRgb(hex)
                        : hex),
            );
        // handle single-color definitions like 'white: #fff'
        else acc[`--f-${k}`] = v;
        return acc;
    }, {});

const generateNamespacedProperties = (obj, namespace) =>
    Object.entries(obj).reduce((acc, [k, v]) => {
        acc[`--f-${namespace}-${k}`] = v;
        return acc;
    }, {});

const colorProperties = generateCustomColorProperties(colors);
const textProperties = generateNamespacedProperties(textColors, 'text');
const rgbColorProperties = generateCustomColorProperties(colors, true);
const troikaProperties = generateCustomColorProperties(troikaAliases);

async function main() {
    await postcss(
        presetEnv({
            stage: 0,
            browsers: 'ie 11', // ensures variables are exported
            importFrom: {
                customProperties: {
                    ...colorProperties,
                    ...rgbColorProperties,
                    ...troikaProperties,
                    ...textProperties,
                },
            },
            exportTo: path.resolve(__dirname, './packages/css/src/theme.css'),
        }),
    ).process('', { from: undefined });
}

try {
    main();
} catch (err) {
    console.error(err);
}
