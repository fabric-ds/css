const colors = {
  blue: {
    50:  "#f2f6fc",
    100: "#c4dbfe",
    200: "#97bffe",
    300: "#69a3fd",
    400: "#3885fc",
    500: "#0063fb", // primary
    600: "#0056db",
    700: "#004abc",
    800: "#003e9d",
    900: "#003280",
  },
  aqua: {
    50:  "#f1f9ff", // ice
    100: "#d3edfe",
    200: "#b4e1fe",
    300: "#90d5fd", // toothpaste
    400: "#65cafc",
    500: "#06befb", // secondary
    600: "#05a4d9",
    700: "#048bb7",
    800: "#037297",
    900: "#025b78",
  },
  green: {
    50: "#eaf6f1",
    100: "#ccffec", // mint
    200: "#b4fadc",
    300: "#a5f9d9",
    400: "#7df3c6",
    500: "#2ee69f", // pea
    600: "#10b981",
    700: "#059669", // lime
    800: "#065f46",
    900: "#064e3b",
  },
  yellow: {
    50: "#faf6eb",
    100: "#FFF5C8", // banana
    200: "#FFF0A8",
    300: "#FEEB88",
    400: "#FEE567",
    500: "#f39d2a",
    600: "#d77720",
    700: "#b2531a",
    800: "#914017",
    900: "#773515",
  },

  red: {
    50: "#f7f2f2",
    100: "#FFEFEF", // salmon
    200: "#ffd6d1",
    300: "#feb9b9",
    400: "#fd9191",
    500: "#FF5844", // watermelon
    600: "#e03622",
    700: "#d9270a", // cherry
    800: "#ba1a00",
    900: "#991000",
  },
  bluegray: {
    50: "#F6F8FB", // marble
    100: "#ECEFF4",
    200: "#E2E6ED",
    300: "#D7DEE7",
    400: "#C3CCD9", // sardine
    500: "#9FA8B6",
    600: "#7B8493",
    700: "#575F70",
    800: "#333B4D",
    900: "#0F172A",
  },
  gray: {
    50: "#f6f6f8",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#BCBCBF",
    500: "#A4A4A6",
    600: "#8D8D8D",
    700: "#767676", // stone
    800: "#474445", // licorice
    900: "#262626",
  },
  white: '#fff',
  current: 'currentColor',
  transparent: 'transparent',
};

const textColors = {
  primary: 'var(--f-gray-800)',
  secondary: 'var(--f-gray-700)',
  danger: 'var(--f-red-700)',
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
  primaryBlue: 'var(--f-blue-500)',
  secondaryBlue: 'var(--f-aqua-500)',
  ice: 'var(--f-aqua-50)',
  toothpaste: 'var(--f-aqua-300)',
  mint: 'var(--f-green-100)',
  pea: 'var(--f-green-500)',
  lime: 'var(--f-green-700)',
  banana: 'var(--f-yellow-100)',
  salmon: 'var(--f-red-100)',
  watermelon: 'var(--f-red-500)',
  cherry: 'var(--f-red-700)',
  marble: 'var(--f-bluegray-50)',
  sardine: 'var(--f-bluegray-400)',
  stone: 'var(--f-gray-700)',
  licorice: 'var(--f-gray-800)',
};

module.exports = { colors, textColors, breakpoints, troikaAliases };
