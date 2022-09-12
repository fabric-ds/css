export const colors = {
    blue: {
        50: '#eff5ff',
        100: '#e1edfe',
        200: '#c2dafe',
        300: '#9ac1fe',
        400: '#5e9cfd',
        500: '#2b7eff',
        600: '#0063fb', // Primary Blue
        700: '#004abc',
        800: '#003e9d',
        900: '#003280',
    },
    aqua: {
        50: '#f1f9ff', // Ice
        100: '#e0f6ff',
        200: '#b6f0ff', // Toothpaste
        300: '#84e1fc',
        400: '#06befb', // Secondary Blue
        500: '#03a3dd',
        600: '#048bb7',
        700: '#037297',
        800: '#025c83',
        900: '#024764',
    },
    green: {
        50: '#ebfff6',
        100: '#cdfee5', // Mint
        200: '#9efcd1',
        300: '#67eeb8',
        400: '#2ee69f', // Pea
        500: '#18c884',
        600: '#059e6f', // Lime
        700: '#217a5f',
        800: '#065f46',
        900: '#064e3b',
    },
    yellow: {
        50: '#fff8e6',
        100: '#fff5c8', // Banana
        200: '#feef90',
        300: '#fae76b',
        400: '#ffe11f',
        500: '#eeb61b',
        600: '#d5840b',
        700: '#ae6c09',
        800: '#885407',
        900: '#6b4206',
    },
    red: {
        50: '#fff5f5',
        100: '#ffefef', // Salmon
        200: '#ffd1d1',
        300: '#ff9999',
        400: '#ff5844', // Watermelon
        500: '#fa270f',
        600: '#d91f0a', // Cherry
        700: '#b91409',
        800: '#991500',
        900: '#801a00',
    },
    bluegray: {
        50: '#f8fafc', // Marble
        100: '#f1f4f9',
        200: '#e1e6ee',
        300: '#c3ccd9', // Sardine
        400: '#9ba8ba',
        500: '#6f7d90',
        600: '#4d586f',
        700: '#3a445a',
        800: '#272e3f',
        900: '#0f1729',
    },
    gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#cccccc',
        400: '#adadad',
        500: '#767676', // Stone
        600: '#525252',
        700: '#464646', // Licorice
        800: '#2b2b2b',
        900: '#171717',
    },
    honkburgundy: {
        50: '#FAE8F1',
        100: '#E4CFD9',
        200: '#CFB6C1',
        300: '#C5A1B1',
        400: '#B68399',
        500: '#9B5A76',
        600: '#82455F',
        700: '#702846',
        800: '#570E2D',
        900: '#310015',
    },
    honkgreen: {
        50: '#F1FFE5',
        100: '#D5FFC5',
        200: '#BEFF98',
        300: '#A5FF70',
        400: '#8CFF48',
        500: '#70FA1E',
        600: '#57DB09',
        700: '#42B200',
        800: '#338900',
        900: '#246100',
    },
    honkpurple: {
        50: '#F0E6FF',
        100: '#E5D2FF',
        200: '#CFAAFF',
        300: '#B98DFD',
        400: '#A077E0',
        500: '#8863C3',
        600: '#7150A6',
        700: '#5B3E88',
        800: '#462E6B',
        900: '#32204E',
    },
    honkorange: {
        50: '#FFF1E5',
        100: '#FFDFCE',
        200: '#FFC5A7',
        400: '#FFAD84',
        500: '#FF7300',
        600: '#D95B00',
        700: '#B04A00',
        800: '#873900',
        900: '#5F2800',
    },
    honkpink: {
        50: '#FFEBF9',
        100: '#FFD0FC',
        200: '#FFA9F9',
        300: '#EB92E5',
        400: '#D47DCE',
        500: '#B86DB3',
        600: '#995995',
        700: '#80487C',
        800: '#663763',
        900: '#4D284A',
    },

    honkyellow: {
        50: '#FFFBE2',
        100: '#FFF6B9',
        200: '#FFF191',
        300: '#FFEC6B',
        400: '#FFE63A',
        500: '#FFDF03',
        600: '#E4C807',
        700: '#B7A108',
        800: '#867500',
        900: '#5C5000',
    },
    honkgray: {
        50: '#FAF8FF',
        100: '#E3E0EB',
        200: '#CDC9D6',
        300: '#B7B3C2',
        400: '#A29EAD',
        500: '#8D8999',
        600: '#797485',
        700: '#656170',
        800: '#524E5C',
        900: '#3F3B47',
    },
    honkred: {
        800: '#B60000',
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

