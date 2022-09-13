import postcss from 'postcss';
import presetEnv from 'postcss-preset-env';
import path from 'path';
import { colors, troikaAliases, textColors } from './src/utils/tailwind/colors.js';
import drnm from 'drnm'

// NB - after running this script you need to change tabs to spaces, and add  ", :host" to the top ":root" declaration in theme.css
// also this thing should just get automated at some point and theme.css should be a build artifact, but whatever

const __dirname = drnm(import.meta.url)

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
            exportTo: path.resolve(__dirname, './src/theme.css'),
        }),
    ).process('', { from: undefined });
}

try {
    main();
} catch (err) {
    console.error(err);
}
