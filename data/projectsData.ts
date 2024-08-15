interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'foodjuggler',
    description: `A MVP i made some time back to test the first OpenAI API: Suggests a recipe based 
    on the given ingredients and creates a picture of it. Built with Streamlit and OpenAI API.`,
    imgSrc: '/static/images/foodjuggler.png',
    href: 'https://www.thefoodjuggler.com',
  },
  {
    title: 'OfficiallyRefurbished.com',
    description: `A directory of refurbished tech products with a Blog. Built with Next.js, Tailwind CSS, Contentlayer and Supabase.`,
    imgSrc: '/static/images/officiallyrefurbished.png',
    href: 'https://www.officiallyrefurbished.com',
  },
  {
    title: 'csv2ai.io',
    description: `csv2ai takes a csv of product descriptions and optimizes the description and title, optimizes for SEO and lets you translate everything to 100+ languages. 
    Built with Next.js, Tailwind CSS, Contentlayer and Supabase.`,
    imgSrc: '/static/images/csv2ai.png',
    href: 'https://www.csv2ai.io',
  },
  {
    title: 'BatteryValueModel',
    description: `BatteryValueModel is a first hypothesis model to calculate the remaining value of an EV battery. The model is based on the battery's state of health, it's usage history and accounts for its age (warranty).`,
    imgSrc: '/static/images/batteryvaluemodel.png',
    href: 'https://github.com/lappemic/BatteryValueModel',
  },
]

export default projectsData
