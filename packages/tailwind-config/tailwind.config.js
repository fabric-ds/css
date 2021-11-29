const { colors: colorSpec } = require('./colors');
const focusRing = require('./focus-ring');
const headings = require('./headings');
const transitionGpu = require('./transition-gpu');
const aspectRatio = require('@tailwindcss/aspect-ratio');

const colors = Object.entries(colorSpec).reduce((acc, [colorName, colorObjectOrString]) => {
    acc[colorName] = {};
    if (colorObjectOrString === Object(colorObjectOrString))
        Object.keys(colorObjectOrString).forEach(
            (level) => (acc[colorName][level] = `var(--f-${colorName.toLowerCase()}-${level})`),
        );
    else acc[colorName] = `var(--f-${colorName})`;
    return acc;
}, {});

// NB: these cannot take the 4th 'spread' arg without hax because we use them for both box and drop shadow
// drop-shadow does not support the 4th arg
const shadows = {
    10: ['0 1px 3px rgba(var(--f-bluegray-600-rgb), .12)', '0 1px 2px rgba(var(--f-bluegray-600-rgb), .24)'],
    20: ['0 3px 6px rgba(var(--f-bluegray-600-rgb), .16)', '0 3px 6px rgba(var(--f-bluegray-600-rgb), .24)'],
    30: ['0 10px 20px rgba(var(--f-bluegray-600-rgb), .19)', '0 6px 6px rgba(var(--f-bluegray-600-rgb), .23)'],
    40: ['0 14px 28px rgba(var(--f-bluegray-600-rgb), .25)', '0 10px 10px rgba(var(--f-bluegray-600-rgb), .22)'],
    none: 'none',
};

module.exports = {
    darkMode: false,
    plugins: [focusRing, headings, transitionGpu, aspectRatio],
    corePlugins: {
        // Backgrounds
        gradientColorStops: false,
        // Layout
        boxSizing: false,
        // Typography
        fontFamily: false,
        letterSpacing: false,
        placeholderColor: false,
        placeholderOpacity: false,
        opacity: false,
        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        ringOpacity: false,
        textOpacity: false,
        translate: false,
        // SVG
        fill: false,
        stroke: false,
        strokeWidth: false,
    },
    theme: {
        extend: {
            transitionDuration: {
                0: '0ms',
                1: '1ms',
            },
        },
        aspectRatio: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            9: '9',
            16: '16',
        },
        spacing: {
            0: '0',
            1: '1px',
            2: '2px',
            4: '4px',
            6: '6px',
            8: '8px',
            10: '10px',
            12: '12px',
            14: '14px',
            16: '16px',
            20: '20px',
            24: '24px',
            28: '28px',
            32: '32px',
            40: '40px',
            44: '44px',
            48: '48px',
            56: '56px',
            64: '64px',
            80: '80px',
            96: '96px',
            112: '112px',
            128: '128px',
            144: '144px',
        },
        lineHeight: {
            16: '16px',
            18: '18px',
            22: '22px',
            24: '24px',
            28: '28px',
            34: '34px',
            41: '41px',
        },
        maxWidth: (theme, { breakpoints }) => ({
            none: 'none',
            0: '0px',
            '1/4': '25%',
            '1/3': '33.3%',
            '1/2': '50%',
            '2/3': '66.6%',
            '3/4': '75%',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            ...breakpoints(theme('screens')),
        }),
        borderRadius: {
            0: '0px',
            2: '2px',
            4: '4px',
            8: '8px',
            16: '16px',
            full: '9999px',
        },
        colors,
        backgroundColor: {
            ...colors,
            // TBD
            // ice: colors.aqua['50'],
            // toothpaste: colors.aqua['200'],
            // marble: colors.bluegray['50'],
            // mint: colors.green['100'],
            // banana: colors.yellow['100'],
            // salmon: colors.red['100']
        },
        // Typography
        textColor: {
            ...colors,
            primary: colors.gray['700'],
            secondary: colors.gray['500'],
            danger: colors.red['600'],
        },
        fontSize: {
            12: ['12px', '16px'],
            14: ['14px', '18px'],
            16: ['16px', '22px'],
            22: ['22px', '28px'],
            28: ['28px', '34px'],
            34: ['34px', '41px'],
        },
        fontWeight: {
            normal: 400,
            bold: 700,
        },
        // Effects
        boxShadow: {
            DEFAULT: shadows['10'],
            2: shadows['20'],
            3: shadows['30'],
            4: shadows['40'],
            none: shadows['none'],
        },
        dropShadow: shadows,
        screens: {
            // => @media (min-width: 480) { ... }
            // sm hits typical mobiles in landscape and up
            sm: '480px',
            // md hits tablets and up
            md: '768px',
            // lg hits full desktop-width and up
            lg: '990px',
        },
    },
    // Disable response variants for these
    variants: {
        // Effects
        extend: {
            backgroundColor: ['active'],
            borderColor: ['active'],
            textColor: ['active'],
        },
        animation: [],
        appearance: [],
        backgroundAttachment: [],
        backgroundClip: [],
        backgroundColor: ['hover', 'focus', 'group-hover'],
        backgroundImage: [],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColor: ['hover', 'focus', 'group-hover'],
        borderRadius: ['responsive'],
        boxShadow: [],
        clear: [],
        cursor: [],
        display: ['responsive'],
        divideColor: [],
        divideOpacity: [],
        divideStyle: [],
        divideWidth: [],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: [],
        maxWidth: [],
        // Typography
        fontStyle: [],
        fontSmoothing: [],
        fontVariantNumeric: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        textTransform: [],
        // Interactivity
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: [],
        minWidth: ['responsive'],
        objectFit: [],
        objectPosition: [],
        order: ['responsive'],
        outline: [],
        overflow: [],
        overscrollBehavior: [],
        padding: ['responsive'],
        placeContent: ['responsive'],
        placeItems: ['responsive'],
        placeSelf: ['responsive'],
        pointerEvents: [],
        position: ['responsive'],
        resize: [],
        ringColor: [],
        ringOffsetColor: [],
        ringOffsetWidth: [],
        ringWidth: ['hover', 'focus'],
        rotate: [],
        scale: [],
        skew: [],
        space: ['responsive'],
        tableLayout: [],
        textAlign: ['responsive'],
        textColor: ['hover', 'focus', 'group-hover'],
        textDecoration: ['hover', 'focus'],
        textOverflow: [],
        textTransform: [],
        transform: [],
        transformOrigin: [],
        transitionDelay: [],
        transitionDuration: [],
        transitionProperty: [],
        transitionTimingFunction: [],
        translate: [],
        userSelect: [],
        verticalAlign: [],
        visibility: [],
        whitespace: [],
        width: ['responsive'],
        wordBreak: [],
        zIndex: ['responsive'],
    },
};
