interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const openSourceData: Project[] = [
  {
    title: 'Huggingface Hub',
    description: `Hugging Face is the leading NLP company in the world. I have contributed to their open-source projects, especially the Huggingface Hub.`,
    imgSrc: '/static/images/huggingface_hub.png',
    href: 'https://github.com/huggingface/huggingface_hub/commits?author=lappemic',
  },
  {
    title: 'Kornia',
    description: `Kornia is a differentiable computer vision library for PyTorch. I am a maintainer of the project.`,
    imgSrc: '/static/images/kornia.png',
    href: 'https://github.com/kornia/kornia/commits?author=lappemic',
  },
  {
    title: 'Gradio',
    description: `Gradio is the fastest way to demo your machine learning model with a friendly web interface so that anyone can use it. I have contributed minor bug fixes.`,
    imgSrc: '/static/images/gradio.png',
    href: 'https://github.com/gradio-app/gradio/commits?author=lappemic',
  },
  {
    title: 'bank.green',
    description: `bank.green is an ngo that helps people assess if their bank is investing in fossil fuels. I actively contribute as a data software engineer.`,
    imgSrc: '/static/images/bank-green.png',
    href: 'https://bank.green/',
  },
  {
    title: 'Protontypes',
    description: `A Free Community Accelerating Open and Sustainable Technology. I am a member of the organization and contribute to various projects, mainly in the field of NLP.`,
    imgSrc: '/static/images/protontypes.png',
    href: 'https://github.com/orgs/protontypes/people',
  },
]

export default openSourceData
