import Template from './ModulePlace.twig'

export default {
  title: 'Components/Careers/ModulePlace',
}

export const Basic = Template.bind({})
Basic.args = {
  title: ['We’re Open,', 'Bold & Curious'],
  subheading: '<p>That’s why we offer industry-leading benefits, endless training opportunities, and a company culture powered that includes everyone.</p>',
  content: `
    <h2 class="title-small">Even our benefits are unique</h2>
    <ul class="list-checked">
      <li>Unlimited paid vacation days</li>
      <li>Equity and inclusion power everything we do</li>
      <li>Other benefit here</li>
    </ul>
  `,
  image: {
    src: 'https://source.unsplash.com/wawEfYdpkag/1024x1200',
    alt: '',
    width: 1024,
    height: 1200
  }
}
