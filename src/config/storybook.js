export default {
  argTypes: {
    primaryColor: {
      name: 'primaryColor',
      description: 'Could be Project Main color, Insight\'s Category color, …',
      type: { name: 'string' },
      control: { type: 'color' },
      table: {
        type: { summary: 'string' }
      }
    },
    primaryContrastColor: {
      name: 'primaryContrastColor',
      description: 'Foreground color in combination with PrimaryColor, to improve text\'s readability',
      options: ['black', 'white'],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' }
      }
    },
    secondaryColor: {
      name: 'secondaryColor',
      description: 'Secondary color for gradients in titles or audio button in Insight for example.',
      type: { name: 'string' },
      control: { type: 'color' },
      table: {
        type: { summary: 'string' }
      }
    },
  },
  args: {
    primaryColor: '',
    primaryContrastColor: 'black',
    secondaryColor: '',
  }
}
