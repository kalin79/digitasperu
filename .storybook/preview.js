import COLORS from '../src/config/colors'

const presetColors = []
let color = ''
for (let title in COLORS) {
  color = COLORS[title]
  if (typeof color === 'string') {
    presetColors.push({ title, color })
  } else if (typeof color === 'object') {
    for (let variant in COLORS[title]) {
      color = COLORS[title][variant]
      presetColors.push({ title: `${title}-${variant}`, color })
    }
  }
}

export const parameters = {
  options: {
    storySort: {
      order: [
        'Pages', [
          'Home',
          'Work',
          'Expertise',
          'About',
          'Contact',
          'Office',
          'Case Study',
          'Careers',
          'Job',
          'Insight',
          'Pressroom',
          'News',
          'Terms Of Use',
          'Page 404'
        ],
        'Components',
        'Symbols'
      ],
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    expanded: true,
    // sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors,
    exclude: ['settings'],
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        type: 'mobile',
        styles: {
          width: '376px',
          height: '763px'
        }
      },
      desktop: {
        name: 'Desktop',
        type: 'desktop',
        styles: {
          width: '1600px',
          height: '880px'
        }
      }
    },
  },
  backgrounds: {
    grid: {
      cellSize: 8,
      cellAmount: 8,
    }
  },
  grid: {
    columns: 12,
    gap: '16px',
    gutter: '16px',
    maxWidth: 'none',
    animation: false,
    guidesColor: 'rgba(255, 0, 0, 0.05)',
  }
}

const printStyles = (styles = {}) => Object.keys(styles).map(key => [key, styles[key]].join(':')).join(';')

export const decorators = [
  (Story, { args }) => {
    const styles = {}
    if (args.primaryColor) {
      styles['--primary-color'] = args.primaryColor
      if (args.primaryContrastColor) {
        styles['--primary-contrast-color'] = args.primaryContrastColor
      }
    }
    if (args.secondaryColor) {
      styles['--secondary-color'] = args.secondaryColor
    }

    return `<div style="${printStyles(styles)}">${Story()}</div>`
  }
]
