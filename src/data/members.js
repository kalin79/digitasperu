const shuffle = arr => arr.concat().sort(() => .5 - Math.random())
const wrap = (arr, i) => arr[i % arr.length]

const jobTitles = [
  'Marketing Manager',
  'Media Planner',
  'Chief Marketing Officer',
  'Digital Designer',
  'Business Development Manager',
  'Brand Manager',
  'Marketing Analyst',
  'Digital Strategist',
]

const personNames = [
  'Michael Sanders',
  'Barbara Harris',
  'David Fisher',
  'David Roberts',
  'Robert Ross',
  'Richard Carter',
  'Sarah Jordan',
  'Sharon Ford',
]

export const generateMembers = (count = 8) => {
  const randomJobTitles = shuffle(jobTitles)
  const randomNames = shuffle(personNames)
  const members = []

  for (let i = 0; i < count; i++) {
    members.push({
      name: wrap(randomNames, i),
      title: wrap(randomJobTitles, i),
      thumbnail: {
        src: `https://source.unsplash.com/collection/8363141/450x640?sig=${(Math.floor(Math.random()*5041874871))}`,
        alt: '',
        width: 450,
        height: 640
      }
    })
  }

  return members
}
