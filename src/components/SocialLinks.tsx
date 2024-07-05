import {
  GithubIcon,
  LinkedInIcon,
  CurriculoIcon,
  EmailIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from './icons'

interface ISocialLink {
  name: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

export default function SocialLinks() {
  const socialLinks: ISocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/andré-melo-013087128',
      icon: LinkedInIcon,
    },
    {
      name: 'GitHub',
      url: 'https://www.github.com/andrelsmelo',
      icon: GithubIcon,
    },
    {
      name: 'E-mail',
      url: 'mailto:andrelucassmelo@gmail.com',
      icon: EmailIcon,
    },
    {
      name: 'Telefone',
      url: 'tel:+5541987815525',
      icon: PhoneIcon,
    },
    {
      name: 'Currículo',
      url: '/andre-melo-cv.pdf',
      icon: CurriculoIcon,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5541987815525',
      icon: WhatsappIcon,
    },
    {
      name: 'Telegram',
      url: 'https://t.me/andrelsmelo',
      icon: TelegramIcon,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/drezi0',
      icon: InstagramIcon,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/notdrezio',
      icon: TwitterIcon,
    },
  ]

  return (
    <ul className="flex justify-center space-x-4">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noreferrer" title={link.name}>
            <link.icon className="hover:scale-125 transition-all ease-in-out" />
          </a>
        </li>
      ))}
    </ul>
  )
}
