import Template from "./ColorGradient.twig";
import PropTypes from 'prop-types';

export default {
  title: 'Symbols/ColorGradient',
  parameters: {
    layout: 'fullscreen',
    controls: { exclude: ['autoplay'] },
  },
  argTypes: {
    config: {
      name: "config",
      description: 'The gradient config to use',
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' }
    },
    tweak: {
      name: 'tweak',
      type: { name: 'boolean' },
      control: { type: 'boolean' }
    },
  },
  args: {
    config: 1,
    tweak: false
  }
}

export const Basic = Template.bind({});
Basic.args = {
  autoplay: true
}
