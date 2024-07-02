import { Project } from '@/utils/types'
import { Status } from '@/utils/enums'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Guess Number',
    description:
      'Um jogo onde você tem que adivinhar um número entre 1 a 100 em X tentativas para pontuar no ranking.',
    image: 'gato.jpg',
    url: 'https://guess-number.andrelsmelo.tech/',
    status: Status.DONE,
  },
  {
    id: 2,
    title: 'Crack Of Darkness',
    description:
      'Um RPG de texto onde você deve escolher suas ações para desvendar misterios de uma terra assolada por um mal obscuro.',
    image: 'gato.jpg',
    url: 'https://pyp.andrelsmelo.tech/',
    status: Status.IN_PROGRESS,
  },
  {
    id: 3,
    title: 'Devo dar Deploy?',
    description:
      'Um projeto inspirado pelo site https://shouldideploy.today/ mais muito mais abrasileirado.',
    image: 'gato.jpg',
    url: 'https://devo-dar-deploy.andrelsmelo.tech/',
    status: Status.TODO,
  },
  {
    id: 4,
    title: 'Unhash MD5',
    description: 'Descriptografe MD5 com essa ferramenta.',
    image: 'gato.jpg',
    url: 'https://unhash-md5.andrelsmelo.tech/',
    status: Status.IN_PROGRESS,
  },
]
