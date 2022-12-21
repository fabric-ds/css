export const attention = {
  base: 'border-2 relative',
  tooltip: 'bg-gray-700 border-gray-700 text-white rounded-4 py-6 px-8',
  callout: 'bg-green-100 border-green-400 py-8 px-16 rounded-8',
  popover: 'bg-white border-white rounded-8 p-16 filter drop-shadow-20',
  arrowBase: 'absolute h-14 w-14 border-2 border-b-0 border-r-0 transform',
  arrowTooltip: 'bg-gray-700 border-gray-700',
  arrowCallout: 'bg-green-100 border-green-400',
  arrowPopover: 'bg-white border-white'
}

export const pageIndicator = {
    wrapper: 'flex space-x-8 p-8',
    dot: 'h-8 w-8 rounded-full',
    inactive: 'bg-honkburgundy-800',
    active: 'bg-honkburgundy-800',
};

export const ribbon = {
    base: 'py-4 px-8 border rounded-4 inline-flex last-child:mb-0',
    info: 'border-aqua-50 bg-aqua-50',
    success: 'border-green-100 bg-green-100',
    warning: 'border-yellow-100 bg-yellow-100',
    error: 'border-red-100 bg-red-100',
    disabled: 'border-bluegray-300 bg-bluegray-300',
    sponsored: 'border-aqua-200 bg-aqua-200',
    neutral: 'border-gray-100 bg-gray-100',
    outlined: 'border-bluegray-300 bg-white',
};

export const slider = {
    wrapper: 'f-slider relative w-full h-44 py-2',
    track: 'track absolute bg-blue-200 h-4 top-20 rounded-4 w-full',
    trackDisabled: 'pointer-events-none bg-gray-200',
    activeTrack: 'larger-active-track absolute bg-blue-600 h-4 top-20 rounded-4',
    activeTrackDisabled: 'bg-bluegray-300 pointer-events-none',
    thumb: 'f-thumb absolute w-24 h-24 bottom-10 rounded-4 outline-none',
    thumbEnabled: 'shadow bg-blue-600 cursor-pointer',
    thumbDisabled: 'bg-bluegray-300 cursor-disabled pointer-events-none',
};

export const modal = {
    backdrop:
        'f-modal-backdrop fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-20',
    modal: 'f-modal mx-16 sm:mx-16 flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32',
    content:
        'block overflow-y-auto overflow-x-hidden last-child:mb-0 flex-grow flex-shrink px-16 sm:px-32 relative',
    footer: 'flex justify-end flex-shrink-0 px-16 sm:px-32',
    transitionTitle: 'transition-all duration-300',
    title: '-mt-4 sm:-mt-8 h-40 sm:h-48 grid f-grid gap-8 sm:gap-16 f-modal-title items-center px-16 sm:px-32 border-b sm:border-b-0 flex-shrink-0',
    titleText: 'mb-0 h4 sm:h3',
    titleButton: 'button button--exit',
    titleButtonLeft: '-ml-8 sm:-ml-12',
    titleButtonRight: '-mr-8 sm:-mr-12',
    titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
};

export const box = {
    box: 'group block relative break-words last-child:mb-0 p-16 rounded-8', // relative here enables f-clickable
    bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // we target L and R separately because of TW's rules-order
};

export const step = {
    stepVertical: 'step-v grid f-grid grid-flow-col gap-x-16',
    stepVerticalLeft: 'step-v-l',
    stepVerticalRight: 'step-v-r text-right',
    stepHorizontal: 'step-h flex-1 grid f-grid gap-y-16 items-center',

    stepDot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300',
    stepDotVertical: '',
    stepDotVerticalLeft: '',
    stepDotVerticalRight: 'col-start-2',
    stepDotHorizontal: 'row-start-2 justify-self-end',

    stepDotActive: 'border-honkburgundy-800 bg-honkburgundy-800 text-honkburgundy-800',
    stepDotComplete: 'border-honkburgundy-800 bg-honkburgundy-800 text-white',
    stepDotIncomplete: 'border-honkburgundy-800 bg-white text-white',

    stepLine: 'step-line bg-honkburgundy-800 duration-300',
    stepLineVertical: 'w-2 h-full justify-self-center',
    stepLineVerticalLeft: '',
    stepLineVerticalRight: 'col-start-2',
    stepLineHorizontal: 'h-2 w-full row-start-2',

    stepLineIncomplete: 'bg-honkburgundy-800',
    stepLineComplete: 'bg-honkburgundy-800',

    content: 'last-child:mb-0',
    contentVertical: 'row-span-2 pb-32',
    contentHorizontal: 'col-span-3 px-16 row-start-1 text-center',
};

export const card = {
    card: 'cursor-pointer overflow-hidden relative transition-all outline-none',
    cardShadow: 'f-card rounded-8',
    cardFlat: 'border-2 rounded-4',
    cardFlatUnselected: 'border-bluegray-300 hover:bg-gray-50 hover:border-bluegray-400 active:border-bluegray-300',
    cardFlatSelected: 'border-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-700 active:border-blue-600',
    cardSelected: 'border-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-700 active:border-blue-600',
    cardOutline: 'f-card-outline absolute rounded-8 inset-0 transition-all border-2',
    cardOutlineUnselected: 'border-transparent',
    cardOutlineSelected: 'border-blue-600 hover:border-blue-700',
};


export const switchToggle = {
    label: 'block relative h-24 w-44 cursor-pointer f-switch',
    labelDisabled: 'pointer-events-none',
    switchTrack: 'absolute h-full w-full rounded-full transition-colors',
    switchTrackSelected: 'bg-blue-600 f-track-selected',
    switchTrackUnselected: 'bg-gray-300 f-track-unselected',
    switchTrackDisabled: 'bg-bluegray-200',
    switchThumb: 'absolute transition-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
    switchThumbSelected: 'f-switch-selected',
    switchThumbNotDisabled: 'bg-white shadow',
    switchThumbDisabled: 'bg-bluegray-300',
};

export const toaster = {
    toasterContainer: 'fixed fixed-ios-fix bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
    toaster:
        'f-toaster grid f-grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none',
};

export const toast = {
    toastWrapper: 'relative overflow-hidden w-full',
    toast: 'toast flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all',
    toastPositive: 'bg-green-50 border-green-300 text-green-800',
    toastWarning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    toastNegative: 'bg-red-50 border-red-300 text-red-800',
    toastNeutral: 'bg-gray-50 border-gray-300 text-gray-800',
    toastIcon: 'flex-shrink-0 rounded-full w-16 h-16 m-8',
    toastIconPositive: 'bg-green-300',
    toastIconWarning: 'bg-yellow-300',
    toastIconNegative: 'bg-red-300',
    toastIconNeutral: 'bg-gray-300',
    toastIconLoading: 'animate-bounce',
    toastContent: 'self-center mr-8 py-4 last-child:mb-0',
    toastClose: 'ml-auto p-8',
};

export const tabs = {
    wrapperUnderlined: 'border-b border-gray-200 -mx-16 sm:mx-0 px-4 sm:px-0 mb-32',
    wrapperContained: '',
    tabContainer: 'mx-auto max-w-screen-md w-full grid f-grid relative',
    wunderbar: 'absolute border-blue-600 -bottom-4 border-b-4 transition-all',
};

export const tab = {
    tab: 'grid f-grid items-center gap-8 focus-ring font-normal antialias p-16 pb-4 hover:underline f-tab',
    tabActive: 'active-tab',
    tabContained: 'rounded-t-8',
    tabContainedActive: 'bg-transparent',
    icon: 'mx-auto ',
    iconUnderlined: 'f-tab-icon',
    iconUnderlinedActive: 'text-honkburgundy-800',
    iconUnderlinedInactive: 'text-gray-300',
    contentUnderlined: 'font-bold content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
    contentUnderlinedInactive: 'text-gray-500 f-tab-text',
    contentUnderlinedActive: 'text-honkburgundy-800',
    contentContainedActive: 'font-bold',
};

export const buttonReset =
    'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

export const expandable = {
    expandable: 'f-expandable',
    expandableInfo: 'bg-honkgreen-100',
    expandableBox: 'py-0 px-0 ' + box.box,
    expandableBleed: box.bleed,
    chevron: 'inline-block align-middle transform transition-transform transition-gpu',
    chevronNonBox: 'relative left-8',
    chevronBox: 'f-expandable-chevron absolute right-16',
    chevronExpanded: '-rotate-180',
    button: buttonReset + ' hover:underline focus:underline',
    buttonBox: 'w-full text-left relative ' + box.box,
    buttonInfo: 'hover:text-honkburgundy-800',
};

const prefixSuffixWrapperBase =
    'absolute top-0 bottom-0 hover:text-honkorange-400 flex justify-center items-center focus-ring p-16 ';

export const suffix = {
    wrapper: prefixSuffixWrapperBase + 'right-0',
    wrapperWithLabel: 'w-max pr-16',
    wrapperWithIcon: 'w-40',
    label: 'field-label pb-0 text-12',
};

export const prefix = {
    wrapper: prefixSuffixWrapperBase + 'left-0',
    wrapperWithLabel: 'w-max pl-12',
    wrapperWithIcon: 'w-40',
    label: 'field-label pb-0 text-secondary text-12',
};
