const colors = {
    blue: {
        50:  "#eff5ff",
        100: "#e1edfe",
        200: "#c2dafe",
        300: "#9ac1fe",
        400: "#5e9cfd",
        500: "#2b7eff",
        600: "#0063fb", // Primary Blue
        700: "#004abc",
        800: "#003e9d",
        900: "#003280",
    },
    aqua: {
        50:  "#f1f9ff", // Ice
        100: "#e0f6ff",
        200: "#b6f0ff", // Toothpaste
        300: "#84e1fc",
        400: "#06befb", // Secondary Blue
        500: "#03a3dd",
        600: "#048bb7",
        700: "#037297",
        800: "#025c83",
        900: "#024764",
    },
    green: {
        50:  "#ebfff6",
        100: "#cdfee5", // Mint
        200: "#9efcd1",
        300: "#67eeb8",
        400: "#2ee69f", // Pea
        500: "#18c884",
        600: "#059e6f", // Lime
        700: "#217a5f",
        800: "#065f46",
        900: "#064e3b",
    },
    yellow: {
        50:  "#fff8e6",
        100: "#fff5c8", // Banana
        200: "#feef90",
        300: "#fae76b",
        400: "#ffe11f",
        500: "#eeb61b",
        600: "#d5840b",
        700: "#ae6c09",
        800: "#885407",
        900: "#6b4206",
    },
    red: {
        50:  "#fff5f5",
        100: "#ffefef", // Salmon
        200: "#ffd1d1",
        300: "#ff9999",
        400: "#ff5844", // Watermelon
        500: "#fa270f",
        600: "#d91f0a", // Cherry
        700: "#b91409",
        800: "#991500",
        900: "#801a00",
    },
    bluegray: {
        50:  "#f8fafc", // Marble
        100: "#f1f4f9",
        200: "#ebeff5",
        300: "#c3ccd9", // Sardine
        400: "#9ba8ba",
        500: "#6f7d90",
        600: "#4d586f",
        700: "#3a445a",
        800: "#272e3f",
        900: "#0f1729",
    },
    gray: {
        50:  "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#cccccc",
        400: "#adadad",
        500: "#767676", // Stone
        600: "#525252",
        700: "#464646", // Licorice
        800: "#2b2b2b",
        900: "#171717",
    },
    white: '#fff',
    current: 'currentColor',
    transparent: 'transparent',
};

const textColors = {
    primary: 'var(--f-gray-700)',
    secondary: 'var(--f-gray-500)',
    danger: 'var(--f-red-600)',
};

const breakpoints = {
    '--sm': '(min-width: 480px)',
    '--md': '(min-width: 768px)',
    '--lg': '(min-width: 990px)',
    '--max480': '(max-width: 479px)',
    '--min480': '(min-width: 480px)',
    '--max768': '(max-width: 767px)',
    '--min768': '(min-width: 768px)',
    '--max990': '(max-width: 989px)',
    '--min990': '(min-width: 990px)',
};

const troikaAliases = {
    primaryBlue: 'var(--f-blue-600)',
    secondaryBlue: 'var(--f-aqua-400)',
    ice: 'var(--f-aqua-50)',
    toothpaste: 'var(--f-aqua-200)',
    mint: 'var(--f-green-100)',
    pea: 'var(--f-green-400)',
    lime: 'var(--f-green-600)',
    banana: 'var(--f-yellow-100)',
    salmon: 'var(--f-red-100)',
    watermelon: 'var(--f-red-400)',
    cherry: 'var(--f-red-600)',
    marble: 'var(--f-bluegray-50)',
    sardine: 'var(--f-bluegray-300)',
    stone: 'var(--f-gray-500)',
    licorice: 'var(--f-gray-700)',
};

module.exports = { colors, textColors, breakpoints, troikaAliases };
