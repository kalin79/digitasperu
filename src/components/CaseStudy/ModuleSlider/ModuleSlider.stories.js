import ModuleSlider from './ModuleSlider.twig'
import theme from '@/config/storybook'
import { CaseStudy as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/Case Study/ModuleSlider',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  ModuleSlider(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  items: [
    {
      image: {
        src: 'https://source.unsplash.com/random/1288x712?sig=0',
        alt: '',
        width: 1288,
        height: 712
      },
      video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4',
    },
    {
      image: {
        src: 'https://source.unsplash.com/random/1288x896?sig=1',
        alt: '',
        width: 1288,
        height: 896
      },
    },
    {
      image: {
        src: 'https://source.unsplash.com/random/1288x712?sig=2',
        alt: '',
        width: 1288,
        height: 712
      },
    },
    {
      image: {
        src: 'https://source.unsplash.com/random/1288x712?sig=3',
        alt: '',
        width: 1288,
        height: 712
      },
    },
  ]
}
