import CardNews from './CardNews.twig'

const date = '2021-05-26 12:00:00'

export default {
  title: 'Symbols/CardNews',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true }
    },
    excerpt: {
      name: 'excerpt',
      type: { name: 'string' }
    },
    link: {
      name: 'link',
      type: { name: 'object' }
    },
    date: {
      name: 'date',
      type: { name: 'string', required: true },
      control: { type: 'date' }
    },
  },
  args: {
    date
  }
}

const Template = ({ date, ...args }) => CardNews({
  ...args,
  date: new Date(date),
})

export const Basic = Template.bind({})
Basic.args = {
  title: 'Digitas Highlights Media-Fueled Creativity Approach at 2021 NewFront',
  excerpt: '<p>Publicis Groupe is proud to announce that 10 of its U.S. agencies have received the “Best Place to Work for LGBTQ Equality” accolade by receiving a perfect score of 100 on the Human Rights Campaign Foundation’s 2021 Corporate Equality Index, the nation’s foremost benchmarking survey and report measuring corporate policies and practices related to LGBTQ workplace equality.</p>',
  date,
  link: {
    url: 'http://website.com',
    label: 'Read on website.com'
  }
}
