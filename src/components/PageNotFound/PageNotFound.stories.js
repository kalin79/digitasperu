import Template from './PageNotFound.twig'
import theme from '@/config/storybook'
import { Home as page } from '@/config/pages'

export default {
  title: 'Components/PageNotFound',
  ...theme,
  args: {
    ...theme.args,
    ...page.args,
  }
}

export const Basic = Template.bind({})
Basic.args = {
  title: ['Unicorn', 'not found'],
  subheading: '<p>Nunc, imperdiet consequat, aliquam mattis<br>Donec nibh dignissim mauris et tellus pretium odio.</p>',
  cta: {
    label: 'Discover Digitas',
    link: '/iframe.html?id=pages-home--home'
  },
  images: [
    {
      src: '/assets/404/unicorn-01.png',
      alt: '',
      width: 168,
      height: 167
    },
    {
      src: '/assets/404/unicorn-02.png',
      alt: '',
      width: 156,
      height: 181
    },
    {
      src: '/assets/404/unicorn-03.png',
      alt: '',
      width: 136,
      height: 180
    },
    {
      src: '/assets/404/unicorn-04.png',
      alt: '',
      width: 147,
      height: 144
    },
    {
      src: '/assets/404/unicorn-05.png',
      alt: '',
      width: 160,
      height: 160
    },
    {
      src: '/assets/404/unicorn-06.png',
      alt: '',
      width: 139,
      height: 186
    },
    {
      src: '/assets/404/unicorn-07.png',
      alt: '',
      width: 129,
      height: 141
    },
    {
      src: '/assets/404/unicorn-08.png',
      alt: '',
      width: 174,
      height: 194
    },
    {
      src: '/assets/404/unicorn-09.png',
      alt: '',
      width: 140,
      height: 145
    },
    {
      src: '/assets/404/unicorn-10.png',
      alt: '',
      width: 209,
      height: 168
    },
    {
      src: '/assets/404/unicorn-11.png',
      alt: '',
      width: 156,
      height: 147
    },
  ]
}
