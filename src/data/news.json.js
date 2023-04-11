const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const randomDate = (from, to = new Date()) => new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()))
const sortByDateDesc = arr => arr.concat().sort((a, b) => a.date.getTime() < b.date.getTime() ? 1 : (a.date.getTime() > b.date.getTime() ? -1 : 0))

const YEARS = ['2021', '2020', '2019', '2018']

const NEWS = [
  {
    title: 'Digitas Highlights Media-Fueled Creativity Approach at 2021 NewFront',
    excerpt: '<p>Publicis Groupe is proud to announce that 10 of its U.S. agencies have received the “Best Place to Work for LGBTQ Equality” accolade by receiving a perfect score of 100 on the Human Rights Campaign Foundation’s 2021 Corporate Equality Index, the nation’s foremost benchmarking survey and report measuring corporate policies and practices related to LGBTQ workplace equality.</p>',
    date: '2021-05-11',
    link: {
      link: 'http://website.com',
      label: 'Read on website.com'
    }
  },
  {
    title: 'Digitas Named to 2021 Constellation ShortList for Digital Transformation Services',
    excerpt: '<p>Digitas announced it was named to the Constellation ShortList™ for Digital Transformation Services (DTX): Global in Q3 2021.</p>',
    date: '2021-08-26',
    link: {
      link: '/iframe.html?id=pages-news--news',
      label: 'Read more'
    }
  },
  {
    title: 'Digitas Named a Leader Again in the 2021 Gartner Magic Quadrant for Global Marketing Agencies',
    excerpt: '<p>Digitas, the Connected Marketing Agency, has been named as a Leader in Gartner, Inc.’s newly published March 2021 “Magic Quadrant for Global Marketing Agencies” report for the sixth consecutive year.</p>',
    date: '2021-03-24',
    link: {
      link: '/iframe.html?id=pages-news--news',
      label: 'Read more'
    }
  },
]

let news = []
YEARS.forEach((year) => {
  const fromDate = new Date(parseInt(year), 0, 1)
  let toDate = new Date(parseInt(year), 11, 31)

  if (toDate.getTime() > Date.now()) {
    toDate = new Date()
  }

  year = {
    title: year,
    items: []
  }

  for (let i = 0, nb = randomInteger(3, 9); i < nb; i++) {
    year.items.push({
      ...NEWS[randomInteger(0, NEWS.length - 1)],
      date: randomDate(fromDate, toDate)
    })
  }

  year.items = sortByDateDesc(year.items)

  news.push(year)
})

export {
  news as default,
  news as NEWS,
  YEARS,
}
