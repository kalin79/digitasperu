import HeroHome from './HeroHome.twig'

import AppBackground from '@Components/AppBackground/AppBackground.twig'
import * as AppBackgroundStories from '@Components/AppBackground/AppBackground.stories'

export default {
  title: 'Components/Home/HeroHome',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
    }
  }
}

const Template = (args) => [
  HeroHome(args),
  AppBackground({ ...AppBackgroundStories.Gradient.args, config: 4 })
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: 'Somos Digitas<br>Peru',
}
