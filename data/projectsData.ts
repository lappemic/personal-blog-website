interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

// images should be 544x306

const projectsData: Project[] = [
  {
    title: 'csv2ai.io',
    description: `csv2ai takes a csv of product descriptions and optimizes the description and title, optimizes for SEO and lets you translate everything to 100+ languages. 
    Built with Next.js, Tailwind CSS, Contentlayer and Supabase.`,
    imgSrc: '/static/images/csv2ai.png',
    href: 'https://www.csv2ai.io?utm_source=michaelscheiwiller.com',
  },
  {
    title: 'SustainabilitySoftwares.com',
    description: `A directory of sustainability softwares. Built with Next.js, Tailwind CSS.`,
    imgSrc: '/static/images/sustainabilitysoftwares.png',
    href: 'https://www.sustainabilitysoftwares.com?utm_source=michaelscheiwiller.com',
  },
  {
    title: 'TheCyclingCollective.com',
    description:
      'A platform for cycling enthusiasts to share their bike builds, parts and events. Built with Next.js, Tailwind CSS, and Contentlayer.',
    imgSrc: '/static/images/thecyclingcollective.png',
    href: 'https://www.thecyclingcollective.com?utm_source=michaelscheiwiller.com',
  },
  {
    title: 'OfficiallyRefurbished.com',
    description: `A directory of refurbished tech products with a Blog. Built with Next.js, Tailwind CSS, Contentlayer and Supabase.`,
    imgSrc: '/static/images/officiallyrefurbished.png',
    href: 'https://www.officiallyrefurbished.com?utm_source=michaelscheiwiller.com',
  },
  {
    title: 'OpenClimate.fund',
    description: `A crowdfunding platform for climate projects. Built with Next.js on github pages.`,
    imgSrc: '/static/images/openclimate.fund.png',
    href: 'https://protontypes.github.io/open-climate-fund/?utm_source=michaelscheiwiller.com',
  },
  {
    title: 'This Website :D',
    description:
      'This website is a portfolio of my projects and a blog (once i start the blog...). Built with Next.js, Tailwind CSS, and Contentlayer.',
    imgSrc: '/static/images/michaelscheiwiller.png',
    href: 'https://github.com/lappemic/thiswebsite?utm_source=michaelscheiwiller.com',
  },
  {
    title: 'foodjuggler',
    description: `A MVP i made some time back to test the first OpenAI API: Suggests a recipe based 
    on the given ingredients and creates a picture of it. Built with Streamlit and OpenAI API.`,
    imgSrc: '/static/images/foodjuggler.png',
    href: 'https://github.com/lappemic/foodjuggler?utm_source=michaelscheiwiller.com',
  },
  // {
  //   title: 'BatteryValueModel',
  //   description: `BatteryValueModel is a first hypothesis model to calculate the remaining value of an EV battery. The model is based on the battery's state of health, it's usage history and accounts for its age (warranty).`,
  //   imgSrc: '/static/images/batteryvaluemodel.png',
  //   href: 'https://github.com/lappemic/BatteryValueModel?utm_source=michaelscheiwiller.com',
  // },
]

export default projectsData
