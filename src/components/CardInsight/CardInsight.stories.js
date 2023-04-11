import CardInsight from './CardInsight.twig'

const date = '2021-05-14 12:00:00'

export default {
  title: 'Symbols/CardInsight',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true }
    },
    authors: {
      name: 'authors',
      type: { name: 'array' }
    },
    link: {
      name: 'link',
      type: { name: 'string' }
    },
    thumbnail: {
      name: 'thumbnail',
      type: { name: 'object' }
    },
    date: {
      name: 'date',
      type: { name: 'string', required: true },
      control: { type: 'date' }
    },
    categories: {
      name: 'categories',
      type: { name: 'array' },
    }
  },
  args: {
    date
  }
}

const Template = ({ date, ...args }) => CardInsight({
  ...args,
  date: new Date(date),
})

export const Basic = Template.bind({})
Basic.args = {
  title: 'How to Adapt Your Social Strategy to Unpredictable Times',
  authors: [
    {
      id: 'author_1',
      name: 'Robert Fox',
      thumbnail: {
        src: '/assets/authors/author_1.png',
        alt: '',
        width: 112,
        height: 112
      }
    },
    {
      id: 'author_2',
      name: 'Lydia Cox',
      thumbnail: {
        src: '/assets/authors/author_1.png',
        alt: '',
        width: 112,
        height: 112
      }
    },
    {
      id: 'author_3',
      name: 'Danisha Lomax',
      thumbnail: {
        src: '/assets/authors/author_1.png',
        alt: '',
        width: 112,
        height: 112
      }
    },
  ],
  thumbnail: {
    src: 'https://source.unsplash.com/random/848x1136',
    alt: '',
    width: 848,
    height: 1136
  },
  date,
  categories: [
    { name: 'Brand content', color: '#ff1400' },
  ]
}

export const WithLink = Template.bind({})
WithLink.args = {
  ...Basic.args,
  link: '#how-to-adapt-your-social-strategy-to-unpredictable-times'
}
