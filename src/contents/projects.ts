import { Project } from '@/utils/types'
import { Status } from '@/utils/enums'

const astley = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUGYXN0bGV5'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Guess Number',
    description:
      'Um jogo onde você tem que adivinhar um número entre 1 a 100 em X tentativas para pontuar no ranking.',
    image: 'guess.jpeg',
    live: 'https://guess-number.andrelsmelo.tech/',
    code: 'https://github.com/andrelsmelo/guess-number',
    status: Status.DONE,
  },
  {
    id: 2,
    title: 'Crack Of Darkness',
    description:
      'Um RPG de texto onde você deve escolher suas ações para desvendar misterios de uma terra assolada por um mal obscuro.',
    image: 'pyp.jpeg',
    live: 'https://pyp.andrelsmelo.tech/',
    code: 'https://github.com/andrelsmelo/pyp',
    status: Status.IN_PROGRESS,
  },
  {
    id: 3,
    title: 'Devo dar Deploy?',
    description:
      'Um projeto inspirado ~copiado~ pelo site https://shouldideploy.today/ mais muito mais abrasileirado.',
    image: 'xablau.jpeg',
    live: astley,
    code: 'https://github.com/andrelsmelo/devodardeploy',
    status: Status.TODO,
  },
  {
    id: 4,
    title: 'Unhash MD5',
    description: 'Descriptografe MD5 com essa ferramenta.',
    image: 'unhash.jpeg',
    live: 'https://unhash-md5.andrelsmelo.tech/',
    code: 'https://github.com/andrelsmelo/unhash-md5',
    status: Status.IN_PROGRESS,
  },
  {
    id: 5,
    title: 'Sudoku',
    description: 'Um jogo de sudoku simples.',
    image: 'sudoku.jpeg',
    live: 'https://sudoku.andrelsmelo.tech/',
    code: 'https://github.com/andrelsmelo/sudoku',
    status: Status.DONE,
  },
  {
    id: 6,
    title: 'Doc Gen Ext',
    description: 'Uma extensão para gerar documentos Brasileiros válidos.',
    image: 'doc-gen.jpeg',
    live: 'https://marketplace.visualstudio.com/items?itemName=andrelsmelo.brazilian-doc-gen',
    code: 'https://github.com/andrelsmelo/brazilian-doc-gen-ext',
    status: Status.DONE,
  },
]
