interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'foodjuggler',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/foodjuggler.png',
    href: 'https://www.thefoodjuggler.com',
  },
  {
    title: 'OfficiallyRefurbished.com',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/officiallyrefurbished.png',
    href: 'https://www.officiallyrefurbished.com',
  },
  {
    title: 'csv2ai.org',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/csv2ai.png',
    href: 'https://www.csv2ai.org',
  },
  {
    title: 'BatteryValueModel',
    description: `batteryValueModel is a first hypothesis model to calculate the remaining value of an EV battery. The model is based on the battery's state of health, it's usage history and accounts for its age (warranty).`,
    imgSrc: '/static/images/batteryvaluemodel.png',
    href: 'https://github.com/lappemic/BatteryValueModel',
  },
]

export default projectsData
