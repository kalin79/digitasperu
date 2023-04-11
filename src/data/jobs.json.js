const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const randomItems = (arr, count) => arr.concat().reduce((p, _, __, arr) => (p[0] < count) ? [p[0] + 1, p[1].concat(arr.splice(Math.random() * arr.length | 0, 1))] : p, [0, []])[1]
const randomDate = (from, to = new Date()) => new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()))
const sortByDateDesc = arr => arr.concat().sort((a, b) => a.date.getTime() < b.date.getTime() ? 1 : (a.date.getTime() > b.date.getTime() ? -1 : 0))

const ROLES = [
  { id: 'design', title: 'Design', taxonomy: 'role' },
  { id: 'strategy', title: 'Strategy', taxonomy: 'role' },
  { id: 'technology', title: 'Technology', taxonomy: 'role' },
  { id: 'production', title: 'Production', taxonomy: 'role' },
  { id: 'general', title: 'General', taxonomy: 'role' },
]

const CITIES = [
  { id: 'atlanta', title: 'Atlanta' },
  { id: 'boston', title: 'Boston' },
  { id: 'chicago', title: 'Chicago' },
  { id: 'detroit', title: 'Detroit' },
  { id: 'los-angeles', title: 'Los Angeles' },
  { id: 'new-york', title: 'New York' },
  { id: 'san-francisco', title: 'San Francisco' },
  { id: 'seattle', title: 'Seattle' },
]

const JOBS = [
  {
    title: 'Associate Media Director',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-05-26',
    city: CITIES[0].id,
    terms: [ROLES[1]],
  },
  {
    title: 'Digital Production Designer',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-05-12',
    city: CITIES[0].id,
    terms: [ROLES[0]],
  },
  {
    title: 'Senior Analyst, Data and Analysis',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-04-12',
    city: CITIES[0].id,
    terms: [ROLES[2]],
  },
  {
    title: 'Experience Designer',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-02-12',
    city: CITIES[0].id,
    terms: [ROLES[0]],
  },
  {
    title: 'Associate Planner, Paid Social',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-02-12',
    city: CITIES[0].id,
    terms: [ROLES[4]],
  },
  {
    title: 'Associate Director, Project Management',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-02-12',
    city: CITIES[0].id,
    terms: [ROLES[3]],
  },
  {
    title: 'Senior Graphic Designer',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-02-12',
    city: CITIES[0].id,
    terms: [ROLES[0]],
  },
  {
    title: 'Associate Media Director',
    link: '/iframe.html?id=pages-job--job',
    date: '2021-02-12',
    city: CITIES[0].id,
    terms: [ROLES[1]],
  },
  {
    title: 'Digital Production Designer',
    link: '#digital-production-designer',
    date: '2021-02-12',
    city: CITIES[0].id,
    terms: [
      ROLES[3],
      ROLES[0],
    ],
  },
]

const FILTERS = {
  title: 'Explore jobs opportunities<br>by filters',
  types: [
    {
      label: 'Filter by role',
      taxonomy: 'role',
      terms: ROLES
    }
  ]
}

let jobs = []
const fromDate = new Date(2020, 6, 1)
CITIES.forEach((city, i) => {
  const batch = JOBS.map(job => ({
    ...job,
    city: city.id,
    date: randomDate(fromDate),
  }))

  jobs = jobs.concat(i ? randomItems(batch, randomInteger(2, batch.length)) : batch)
})

jobs = sortByDateDesc(jobs)

export {
  jobs as default,
  jobs as JOBS,
  CITIES,
  FILTERS
}
