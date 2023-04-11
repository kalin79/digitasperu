import BetterConnections from './BetterConnections.twig'
import theme from '@/config/storybook'
import { Expertise as page } from '@/config/pages'

import CustomCursor from '@Components/CustomCursor/CustomCursor.twig'
import * as CustomCursorStories from '@Components/CustomCursor/CustomCursor.stories'

export default {
  title: 'Components/Expertise/BetterConnections',
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string' }
    },
    ...theme.argTypes,
  },
  args: {
    ...theme.args,
    ...page.args,
  }
}

const Template = (args) => [
  BetterConnections(args),
  CustomCursor(CustomCursorStories.Basic.args),
].join('')

export const Basic = Template.bind({})
Basic.args = {
  title: "Better connections through",
  items: [
    {
      title: "Connected Campaigns",
      description: "<p>Connected Campaigns Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh. Donec nibh dignissim mauris et tellus pretium odio. Turpis odio consectetur purus egestas ultrices nisi ridiculus massa mi. Ipsum aliquam id iaculis enim quis purus orci lorem volutpat. Ac turpis vitae diam ipsum lorem amet. At turpis nisl ipsum mauris pretium erat eget purus. Habitant sed dignissim turpis dignissim venenatis, quis in. Pellentesque eu habitant orci sodales et lectus quam.</p>",
      project: {
        title: "Roll By GoodYear",
        link: '#project',
        description: "<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh.</p>",
        thumbnail: {
          src: 'https://source.unsplash.com/random/248x195?sig=1',
          alt: '',
          width: 177,
          height: 232
        },
      },
    },
    {
      title: "Social Marketing",
      description: "<p>Social Marketing Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh. Donec nibh dignissim mauris et tellus pretium odio. Turpis odio consectetur purus egestas ultrices nisi ridiculus massa mi. Ipsum aliquam id iaculis enim quis purus orci lorem volutpat. Ac turpis vitae diam ipsum lorem amet. At turpis nisl ipsum mauris pretium erat eget purus. Habitant sed dignissim turpis dignissim venenatis, quis in. Pellentesque eu habitant orci sodales et lectus quam.</p>",
      project: {
        title: "Social Marketing Project",
        link: '#project',
        description: "<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh.</p>",
        tag_id: "social_marketing",
        thumbnail: {
          src: 'https://source.unsplash.com/random/177x232?sig=2',
          alt: '',
          width: 177,
          height: 232
        },
      },
    },
    {
      title: "Brand Experience",
      description: "<p>Brand Experience Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh. Donec nibh dignissim mauris et tellus pretium odio. Turpis odio consectetur purus egestas ultrices nisi ridiculus massa mi. Ipsum aliquam id iaculis enim quis purus orci lorem volutpat. Ac turpis vitae diam ipsum lorem amet. At turpis nisl ipsum mauris pretium erat eget purus. Habitant sed dignissim turpis dignissim venenatis, quis in. Pellentesque eu habitant orci sodales et lectus quam.</p>",
      project: {
        title: "Brand experience project",
        link: '#project',
        description: "<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh.</p>",
        tag_id: "brand_experience",
        thumbnail: {
          src: 'https://source.unsplash.com/random/177x232?sig=3',
          alt: '',
          width: 177,
          height: 232
        },
      },
    },
    {
      title: "CRM & Loyalty",
      description: "<p>CRM & Loyalty Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh. Donec nibh dignissim mauris et tellus pretium odio. Turpis odio consectetur purus egestas ultrices nisi ridiculus massa mi. Ipsum aliquam id iaculis enim quis purus orci lorem volutpat. Ac turpis vitae diam ipsum lorem amet. At turpis nisl ipsum mauris pretium erat eget purus. Habitant sed dignissim turpis dignissim venenatis, quis in. Pellentesque eu habitant orci sodales et lectus quam.</p>",
      project: {
        title: "CRM & Loyalty project",
        link: '#project',
        description: "<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh.</p>",
        tag_id: "crm_loyalty",
        thumbnail: {
          src: 'https://source.unsplash.com/random/177x232?sig=4',
          alt: '',
          width: 177,
          height: 232
        },
      },
    },
    {
      title: "Marketing Transformation",
      description: "<p>Marketing Transformation</p>",
      project: {
        title: "Marketing Transformation project",
        link: '#project',
        description: "<p>Nunc, imperdiet consequat, aliquam mattis. Leo in nulla senectus ullamcorper nibh.</p>",
        tag_id: "marketing_transformation",
        thumbnail: {
          src: 'https://source.unsplash.com/random/177x232?sig=5',
          alt: '',
          width: 177,
          height: 232
        },
      },
    }
  ]
}

