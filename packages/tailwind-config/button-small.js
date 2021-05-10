const buttonSmall = { '@apply px-16 py-8 text-12 leading-16': {} };
const secondary = { paddingTop: '6px', paddingBottom: '6px' };
const utility = { padding: '7px 15px' };
const pill = { padding: '4px', minHeight: '32px', minWidth: '32px' };
const link = { padding: 0 };

// .button--small {
//     @apply px-16 py-8 text-12 leading-16;
// }

// .button--small.button--secondary {
//     padding-top: 6px;
//     padding-bottom: 6px;
// }

// .button--small.button--utility {
//     padding: 7px 15px;
// }

// .button--small.button--pill {
//     @apply p-4;
//     min-height: 36px;
//     min-width: 36px;
// }
// .button--small.button--link {
//     @apply p-0;
// }

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
    const smallRules = {
      '.button--small': buttonSmall,
      // tailwind is weird and these have to be reversed or it tries to make all the alternate classes responsive too
      '.button--secondary.button--small': secondary,
      '.button--utility.button--small': utility,
      '.button--pill.button--small': pill,
      '.button--link.button--small': link
    };
    addComponents(smallRules, { variants: ['responsive'] });
});
