import { Status } from './enums'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  url: string
  status: Status
}
