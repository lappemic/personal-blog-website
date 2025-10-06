interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

// images should be 544x306

const projectsData: Project[] = [
  {
    title: 'PixThatSell',
    description: `AI-powered photo enhancement tool that transforms amateur photos into professional sales magnets. Helps sellers create compelling product images that sell 3x faster.`,
    imgSrc: '/static/images/pixthatsell.png',
    href: 'https://www.pixthatsell.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'investfa.st',
    description: `A static website promoting passive ETF investing through humor and memes. Self-hosted on Hetzner VPS with Node.js backend and SQLite for email signups.`,
    imgSrc: '/static/images/investfast.svg',
    href: 'https://investfa.st?ref=michaelscheiwiller.com',
  },
  {
    title: 'Asylassistent',
    description: `AI-powered assistant for asylum counseling in Switzerland. Provides support with questions about asylum procedures, work permits, and residency in Switzerland.`,
    imgSrc: '/static/images/asylberatung.png',
    href: 'https://www.asylberatung.ch?ref=michaelscheiwiller.com',
  },
  {
    title: 'ByteBricks.ch',
    description:
      'An MVP development Studio. For non-technical people who want to check their idea in real life.',
    imgSrc: '/static/images/bytebricks.png',
    href: 'https://www.bytebricks.ch?ref=michaelscheiwiller.com',
  },
  {
    title: 'NextGenEnergyJobs.com',
    description:
      'A jobboard for renewable energy jobs. Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/), [MongoDB](https://www.mongodb.com/) and [Algolia](https://www.algolia.com/).',
    imgSrc: '/static/images/nextgenenergyjobs.png',
    href: 'https://www.nextgenenergyjobs.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'OpenClimate.fund',
    description: `A crowdfunding platform for climate projects. Built with [Next.js](https://nextjs.org/) on github pages.`,
    imgSrc: '/static/images/openclimate.fund.png',
    href: 'https://protontypes.github.io/open-climate-fund/?ref=michaelscheiwiller.com',
  },
  {
    title: 'SustainabilitySoftwares.com',
    description: `A directory of sustainability softwares. Built with [Next.js](https://nextjs.org/), [Contentlayer](https://www.contentlayer.dev/) and [Tailwind CSS](https://tailwindcss.com/).`,
    imgSrc: '/static/images/sustainabilitysoftwares.png',
    href: 'https://www.sustainabilitysoftwares.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'MindBoostingBooks.com',
    description:
      'A directory of books categorized by topic which are considered to be worth reading. It uses [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/)/[Tailwind CSS](https://tailwindcss.com/) and [Supabase](https://supabase.com).',
    imgSrc: '/static/images/mindboostingbooks.png',
    href: 'https://www.mindboostingbooks.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'TheCyclingCollective.com',
    description:
      'A platform for cycling enthusiasts to share their bike builds, parts and events. Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Contentlayer](https://www.contentlayer.dev/).',
    imgSrc: '/static/images/thecyclingcollective.png',
    href: 'https://www.thecyclingcollective.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'OfficiallyRefurbished.com',
    description: `A directory of refurbished tech products with a Blog. Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Contentlayer](https://www.contentlayer.dev/) and [Supabase](https://supabase.com/).`,
    imgSrc: '/static/images/officiallyrefurbished.png',
    href: 'https://www.officiallyrefurbished.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'csv2ai.io',
    description: `csv2ai takes a csv of product descriptions and optimizes the description and title, optimizes for SEO and lets you translate everything to 100+ languages. This is the result of a freelancing gig i did for a client.
    Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Contentlayer](https://www.contentlayer.dev/) and [Supabase](https://supabase.com/).`,
    imgSrc: '/static/images/csv2ai.png',
    href: 'https://x.com/mischeiwiller/status/1934598997420744877',
  },
  {
    title: 'pongarcade.com',
    description: `A simple pong game built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).`,
    imgSrc: '/static/images/pongarcade.png',
    href: 'https://www.pongarcade.com?ref=michaelscheiwiller.com',
  },
  {
    title: 'This Website :D',
    description:
      'This website is a portfolio of my projects and a blog (once i start the blog...). Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Contentlayer](https://www.contentlayer.dev/).',
    imgSrc: '/static/images/michaelscheiwiller.png',
    href: 'https://github.com/lappemic/thiswebsite?ref=michaelscheiwiller.com',
  },
  {
    title: 'foodjuggler',
    description: `A MVP i made some time back to test the first OpenAI API: Suggests a recipe based 
    on the given ingredients and creates a picture of it. Built with [Streamlit](https://streamlit.io/) and [OpenAI API](https://platform.openai.com/docs/api-reference/introduction).`,
    imgSrc: '/static/images/foodjuggler.png',
    href: 'https://github.com/lappemic/foodjuggler?ref=michaelscheiwiller.com',
  },
  // {
  //   title: 'BatteryValueModel',
  //   description: `BatteryValueModel is a first hypothesis model to calculate the remaining value of an EV battery. The model is based on the battery's state of health, it's usage history and accounts for its age (warranty).`,
  //   imgSrc: '/static/images/batteryvaluemodel.png',
  //   href: 'https://github.com/lappemic/BatteryValueModel?utm_source=michaelscheiwiller.com',
  // },
]

export default projectsData
