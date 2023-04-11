import ShuffleGallery from './ShuffleGallery.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/ShuffleGallery',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true }
    },
    subheading: {
      name: 'subheading',
      type: { name: 'string' }
    },
    images: {
      name: 'images',
      type: { name: 'array', required: true }
    },
    layout: {
      name: 'layout',
      description: 'Choose one of 3 predefined layout.',
      type: { name: 'string' },
      options: [1, 2, 3],
      control: { type: 'inline-radio' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    background: {
      name: 'background',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
    autoplay: {
      name: 'autoplay',
      type: 'number',
      description: 'Delay between transitions (in seconds). 0 to disable autoplay.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 }
      }
    },
    ...theme.argTypes,
  },
  args: {
    layout: 1,
    background: false,
    autoplay: 0,
    ...theme.args,
    ...page.args,
  }
}

const generateImages = (count = 1) => {
  const images = []
  for (let i = 0; i < count; i++) {
    images.push({
      src: `https://source.unsplash.com/random/800x600?sig=${i}`,
      alt: '',
      width: 800,
      height: 600
    })
  }

  return images
}

const Template = (args) => [
  ShuffleGallery(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: '<b>Unicorns</b> Giving Back',
  subheading: '<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus.</p>',
  images: generateImages(15),
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  ...Basic.args,
  background: true,
}

export const Layout2 = Template.bind({})
Layout2.args = {
  ...Basic.args,
  layout: 2,
}

export const Layout3 = Template.bind({})
Layout3.args = {
  ...Basic.args,
  layout: 3,
}
