import { Project } from '@/utils/types'
import { Status } from '@/utils/enums'
import { useTranslations } from 'next-intl'

const astley = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUGYXN0bGV5'

export default function GetProjects(): Project[] {
  const t = useTranslations('Projects')

  return [
    {
      id: 1,
      title: t('0.title'),
      description: t('0.description'),
      image: 'guess.jpeg',
      live: 'https://guess-number.andrelsmelo.tech/',
      code: astley,
      status: Status.DONE,
    },
    {
      id: 2,
      title: t('1.title'),
      description: t('1.description'),
      image: 'pyp.jpeg',
      live: 'https://pyp.andrelsmelo.tech/',
      code: astley,
      status: Status.IN_PROGRESS,
    },
    {
      id: 3,
      title: t('2.title'),
      description: t('2.description'),
      image: 'xablau.jpeg',
      live: astley,
      code: astley,
      status: Status.TODO,
    },
    {
      id: 4,
      title: t('3.title'),
      description: t('3.description'),
      image: 'unhash.jpeg',
      live: 'https://unhash-md5.andrelsmelo.tech/',
      code: astley,
      status: Status.IN_PROGRESS,
    },
    {
      id: 5,
      title: t('4.title'),
      description: t('4.description'),
      image: 'sudoku.jpeg',
      live: 'https://sudoku.andrelsmelo.tech/',
      code: astley,
      status: Status.DONE,
    },
    {
      id: 6,
      title: t('5.title'),
      description: t('5.description'),
      image: 'doc-gen.jpeg',
      live: 'https://marketplace.visualstudio.com/items?itemName=andrelsmelo.brazilian-doc-gen',
      code: astley,
      status: Status.DONE,
    },
    {
      id: 7,
      title: t('6.title'),
      description: t('6.description'),
      image: 'cpf.jpeg',
      live: 'https://gerar-cpf.andrelsmelo.tech/',
      code: 'https://github.com/andrelsmelo/generate-cpf',
      status: Status.DONE,
    },
  ]
}
