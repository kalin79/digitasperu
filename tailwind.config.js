const { xs, ...screens } = require('./src/config/breakpoints')
const colors = require('./src/config/colors')

const rem = px => px ? `${(px / 16).toFixed(7)}rem` : '0rem'
const em = (px, base) => px ? `${(px / base).toFixed(7)}em` : '0em'
const vw = (px, base) => px ? `${(px / base * 100).toFixed(7)}vw` : '0vw'

const mockupSettings = {
  mobile: {
    width: 376,
    height: 763
  },
  desktop: {
    width: 1600,
    height: 880
  }
}

const getGridColumnWidth = settings => ((settings.width - (2 * settings.margin) - (settings.gutterWidth * (settings.nbColumns - 1))) / settings.nbColumns)
const getGridGutterWidth = settings => ((settings.width - (settings.nbColumns * settings.columnWidth)) / (settings.nbColumns - 1))

const gridSettings = {
  mobile: {
    nbColumns: 12,
    nbRows: 6,
    width: mockupSettings.mobile.width,
    margin: 0,
    columnWidth: 24,
    padding: 24,
    get gutterWidth () {
      return getGridGutterWidth(this)
    }
  },
  desktop: {
    nbColumns: 12,
    nbRows: 6,
    width: mockupSettings.desktop.width,
    margin: 16,
    gutterWidth: 16,
    padding: 56,
    get columnWidth () {
      return getGridColumnWidth(this)
    }
  },
  get nbColumns () {
    return Math.max(this.mobile.nbColumns, this.desktop.nbColumns)
  },
  get nbRows () {
    return Math.max(this.mobile.nbRows, this.desktop.nbRows)
  }
}

module.exports = {
  purge: {
    content: [
      './src/components/**/*.twig',
      './src/components/**/*.{js,ts}',
    ],
  },
  theme: {
    screens,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      ...colors,

      primary: 'var(--primary-color)',
      'primary-contrast': 'var(--primary-contrast-color, var(--global-color))',
      secondary: 'var(--secondary-color, var(--primary-color))',
      placeholder: `var(--image-placeholder-color, ${colors.gray['50']})`,
      muted: colors.gray['100'],
    },
    spacing: () => {
      const v = {
        px: '1px',
        '4': '.25rem',
        // '6': '.375rem',
        '10': '.625rem',
        '12': '.75rem',
        '20': '1.25rem',
        container: 'var(--container-margin)',
        gutter: 'var(--container-gutter-width)',
        global: 'var(--global-spacing-vertical)',
      }
      for (let i = 0; i <= 32; i++) {
        v[`${(i * 8)}`] = `${(i / 2)}rem`
      }
      return v
    },
    aspectRatio: () => {
      const ratios = ['1:1', '16:9']
      const v = {}
      for (let ratio of ratios) {
        for (let value of ratio.split(':')) {
          v[value] = `${value}`
        }
      }
      return v
    },
    borderRadius: {
      none: '0',
      DEFAULT: rem(32),
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
    },
    container: {
      nbColumns: {
        DEFAULT: gridSettings.mobile.nbColumns,
        lg: gridSettings.desktop.nbColumns
      },
      margin: {
        DEFAULT: rem(gridSettings.mobile.margin),
        lg: rem(gridSettings.desktop.margin)
      },
      gutterWidth: {
        DEFAULT: rem(gridSettings.mobile.gutterWidth),
        lg: rem(gridSettings.desktop.gutterWidth)
      },
      columnWidth: {
        DEFAULT: rem(gridSettings.mobile.columnWidth),
        lg: rem(gridSettings.desktop.columnWidth)
      },
      padding: {
        DEFAULT: rem(gridSettings.mobile.padding),
        lg: rem(gridSettings.desktop.padding)
      }
    },
    cursor: {
      // auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      grab: 'grab',
      grabbing: 'grabbing',
      // wait: 'wait',
    },
    fontFamily: {
      sans: ['"Avenir LT Std"','sans-serif'],
    },
    fontSize: () => {
      const values = {
        10: rem(16),
        11: rem(16),
        12: rem(16),
        14: rem(16),
        16: (24 / 16),
        18: (24 / 18),
        20: (24 / 20),
        24: (32 / 24),
        32: { lineHeight: 1, letterSpacing: em(-1, 100) },
        48: { lineHeight: (40 / 48), letterSpacing: em(-4, 100) },
        64: { lineHeight: 1, letterSpacing: em(-2, 100) },
        96: { lineHeight: 1, letterSpacing: em(-3, 100) },
        128: { lineHeight: 1, letterSpacing: em(-4, 100) },
      }
      const v = {}
      for (let k in values) {
        v[`${k}`] = [rem(k), values[k]]
      }
      return v
    },
    fontWeight: {
      light: 300,
      book: 400,
      roman: 500,
      medium: 600,
      heavy: 800,
      black: 900,
    },
    gridColumn: theme => {
      const v = {
        auto: 'auto',
      }
      for (let i = 1; i <= (gridSettings.nbColumns + 2); i++) {
        v[`span-${i}`] = `span ${i} / span ${i}`
      }
      v['span-full'] = '1 / -1'
      v['span-default'] = '2 / -2'
      return v
    },
    gridColumnEnd: theme => theme('gridColumnStart'),
    gridColumnStart: theme => {
      const v = {
        auto: 'auto',
      }
      for (let i = 1; i <= (gridSettings.nbColumns + 2) + 1; i++) {
        v[`${i}`] = `${i}`
      }
      return v
    },
    gridTemplateRows: theme => {
      const v = {
        none: 'none',
      }
      for (let i = 1; i <= gridSettings.nbRows; i++) {
        v[`${i}`] = `repeat(${i}, minmax(0, 1fr))`
      }
      return v
    },
    gridRow: theme => {
      const v = {
        auto: 'auto',
      }
      for (let i = 1; i <= gridSettings.nbRows; i++) {
        v[`span-${i}`] = `span ${i} / span ${i}`
      }
      v['span-full'] = '1 / -1'
      return v
    },
    gridRowEnd: theme => theme('gridRowStart'),
    gridRowStart: theme => {
      const v = {
        auto: 'auto',
      }
      for (let i = 1; i <= gridSettings.nbRows + 1; i++) {
        v[`${i}`] = `${i}`
      }
      return v
    },
    gridTemplateColumns: theme => {
      const v = {
        none: 'none',
        auto: 'auto',
      }
      for (let i = 1; i <= gridSettings.nbColumns; i++) {
        v[`${i}`] = `repeat(${i}, minmax(0, 1fr))`
      }
      return v
    },
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      full: '100%',
      '-1/2': '-50%',
      '-full': '-100%',
      'scroll-padding': 'var(--scroll-offset-y)',
    }),
    letterSpacing: {
      tightest: em(-4, 100),
      tighter: em(-2, 100),
      tight: em(-1, 100),
      normal: '0',
      wide: em(1, 100),
      wider: em(2, 100),
      widest: em(4, 100),
    },
    lineHeight: () => {
      const values = [16, 24, 32, 40, 120]
      const v = {
        '0': '0',

        none: '1',
        tight: '1.25',
        // snug: '1.375',
        normal: '1.5',
        relaxed: '1.6',
        // loose: '2',
        // inherit: 'inherit',
      }
      for (let value of values) {
        v[`${value}`] = rem(value)
      }
      return v
    },
    maxWidth: (theme, { breakpoints }) => {
      const v = {
        none: 'none',
        ...theme('width'),
        ...breakpoints(theme('screens')),
      }
      for (let i = 1; i <= gridSettings.nbColumns; i++) {
        v[`${i}/${gridSettings.nbColumns}`] = `calc(${i} * var(--container-column-max-width) + (${i} - 1) * var(--container-gutter-width))`
      }
      return v
    },
    minWidth: theme => ({
      '0': '0',
      ...theme('width'),
    }),
    width: (theme, { breakpoints }) => {
      const v = {
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
        full: '100%',
        screen: 'calc(100 * var(--vw, 1vw))',
        min: 'min-content',
        max: 'max-content',
      }
      for (let i = 1; i <= gridSettings.nbColumns; i++) {
        // add width in percentage for each column ratio
        // e.g. w-1/14, w-2/14, lg:w-1/18, lg:w-2/18, ...
        v[`${i}/${gridSettings.nbColumns}`] = `${(i / gridSettings.nbColumns * 100)}%`
        // add width in viewport width for each column ratio
        // w-col-1/14, w-col-2/14, lg:w-col-1/18, lg:w-col-2/18, ...
        v[`col-${i}/${gridSettings.nbColumns}`] = `calc(${i} * var(--container-column-width) + (${i} - 1) * var(--container-gutter-width))`
      }
      return v
    },
    zIndex: {
      background: '-10',
      '-2': '-2',
      '-1': '-1',
      auto: 'auto',
      0: '0',
      1: '1',
      2: '2',
      'header-bg': '10',
      search: '15',
      header: '20',
      drawer: '30',
      cursor: '99',
      transition: '100',
    },
    extend: {
      backgroundColor: {
        global: 'var(--global-bg-color)',
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.600', 'currentColor'),
      }),
      height: {
        '1/2': '50%',
        screen: 'calc(100 * var(--vh, 1vh))',
      },
      maxHeight: {
        none: 'none',
        screen: 'calc(100 * var(--vh, 1vh))',
      },
      minHeight: {
        '96': rem(96),
        screen: 'calc(100 * var(--vh, 1vh))',
      },
      screens: {
        'no-touch': { raw: '(any-hover: hover)' },
        'touch': { raw: '(any-hover: none)' },
      }
    }
  },
  variants: {
    embeds: ['responsive']
  },
  corePlugins: {
    animation: false,
    appearance: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropDropShadow: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundAttachment: false,
    backgroundBlendMode: false,
    backgroundClip: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    backgroundOrigin: false,
    blur: false,
    borderCollapse: false,
    borderStyle: false,
    boxDecorationBreak: false,
    boxShadow: false,
    boxSizing: false,
    brightness: false,
    container: false,
    contrast: false,
    divideStyle: false,
    dropShadow: false,
    fontVariantNumeric: false,
    grayscale: false,
    hueRotate: false,
    isolation: false,
    listStylePosition: false,
    listStyleType: false,
    mixBlendMode: false,
    objectPosition: false,
    placeholderColor: false,
    placeholderOpacity: false,
    resize: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    rotate: false,
    saturate: false,
    scale: false,
    sepia: false,
    skew: false,
    strokeWidth: false,
    tableLayout: false,
    transform: false,
    transformOrigin: false,
    transitionDelay: false,
    transitionDuration: false,
    transitionProperty: false,
    transitionTimingFunction: false,
    translate: false,
    wordBreak: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
}
