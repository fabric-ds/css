const colors = {
    blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb', // Primary Blue
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
    },
    aqua: {
        50: '#f0f9ff', // Ice
        100: '#e0f2fe',
        200: '#bae6fd', // Toothpaste
        300: '#7dd3fc',
        400: '#38bdf8', // Secondary Blue
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
    },
    green: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0', // Mint
        300: '#6ee7b7',
        400: '#34d399', // Pea
        500: '#10b981',
        600: '#059669', // Lime
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
    },
    yellow: {
        50: '#fefce8',
        100: '#fef9c3', // Banana
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
    },
    red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca', // Salmon
        300: '#fca5a5',
        400: '#f87171', // Watermelon
        500: '#ef4444',
        600: '#dc2626', // Cherry
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
    },
    bluegray: {
        50: '#f8fafc',
        100: '#f1f5f9', // Marble
        200: '#e2e8f0',
        300: '#cbd5e1', // Sardine
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
    },
    gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373', // Stone
        600: '#525252',
        700: '#404040', // Licorice
        800: '#262626',
        900: '#171717',
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
    mint: 'var(--f-green-200)',
    pea: 'var(--f-green-400)',
    lime: 'var(--f-green-600)',
    banana: 'var(--f-yellow-100)',
    salmon: 'var(--f-red-200)',
    watermelon: 'var(--f-red-400)',
    cherry: 'var(--f-red-600)',
    marble: 'var(--f-bluegray-100)',
    sardine: 'var(--f-bluegray-300)',
    stone: 'var(--f-gray-500)',
    licorice: 'var(--f-gray-700)',
};

module.exports = { colors, textColors, breakpoints, troikaAliases };
