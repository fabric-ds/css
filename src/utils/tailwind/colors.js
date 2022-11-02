export const colors = {
    blue: {
        50: '#eff5ff',
        100: '#e1edfe',
        200: '#c2dafe',
        300: '#9ac1fe',
        400: '#5c9cff',
        500: '#2b7eff',
        600: '#0063fb', // Primary Blue
        700: '#244eb3',
        800: '#223474',
        900: '#191D3A',
    },
    aqua: {
        50: '#f1f9ff', // Ice
        100: '#e0f6ff',
        200: '#b6f0ff', // Toothpaste
        300: '#66e0ff',
        400: '#06befb', // Secondary Blue
        500: '#03a3dd',
        600: '#0386bf',
        700: '#1e648a',
        800: '#1d435a',
        900: '#15242f',
    },
    green: {
        50: '#ebfff6',
        100: '#cdfee5', // Mint
        200: '#9efcd1',
        300: '#67eeb8',
        400: '#2ee69f', // Pea
        500: '#18c884',
        600: '#059e6f', // Lime
        700: '#1d7454',
        800: '#1b4d39',
        900: '#14291f',
    },
    yellow: {
        50: '#fff8e6',
        100: '#fff5c8', // Banana
        200: '#feef90',
        300: '#fae76b',
        400: '#ffe11f',
        500: '#eeb61b',
        600: '#d5840b',
        700: '#9b621e',
        800: '#654118',
        900: '#352310',
    },
    red: {
        50: '#fff5f5',
        100: '#ffefef', // Salmon
        200: '#ffd1d1',
        300: '#ff9999',
        400: '#ff5844', // Watermelon
        500: '#fa270f',
        600: '#d91f0a', // Cherry
        700: '#9e2216',
        800: '#681d11',
        900: '#38140B',
    },
    bluegray: {
        50: '#f8fafc', // Marble
        100: '#f1f4f9',
        200: '#e1e6ee',
        300: '#c3ccd9', // Sardine
        400: '#9ba8ba',
        500: '#6f7d90',
        600: '#4d586f',
        700: '#3b4353',
        800: '#292d38',
        900: '#181a1f',
    },
    gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a', // Stone
        600: '#52525b',
        700: '#3f3f46', // Licorice
        800: '#27272a',
        900: '#18181b',
    },
    white: '#fff',
    current: 'currentColor',
    transparent: 'transparent',
};

export const textColors = {
    primary: 'var(--f-gray-700)',
    secondary: 'var(--f-gray-500)',
    danger: 'var(--f-red-600)',
};

export const breakpoints = {
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

export const troikaAliases = {
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

