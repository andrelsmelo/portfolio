import { projects } from '@/contents/projects'
import path from 'path'
import fs from 'fs'
import { Status } from '@/utils/enums'

describe('Test if project values are correct', () => {
  projects.forEach((project) => {
    test(`Project ${project.id} should have correct values`, () => {
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.image).toBeTruthy()
      expect(project.live).toBeTruthy()
      expect(project.code).toBeTruthy()
      expect(project.status).toBeTruthy()
    })
  })
})

describe('Test if images are valid', () => {
  it('should have all images valids in public folder', () => {
    projects.forEach((project) => {
      expect(project.image).toMatch(/.*\.(jpg|jpeg|png|gif|svg|webp)$/)

      const filePath = path.join(__dirname, '../../', 'public', project.image)
      const fileExists = fs.existsSync(filePath)
      expect(fileExists, `Arquivo ${project.image} não encontrado`, {
        showPrefix: false,
      }).toBe(true)
    })
  })
})

describe('Test if status are in a valid enum', () => {
  it('should have all status in Status enum', () => {
    projects.forEach((project) => {
      expect(Object.values(Status)).toContain(project.status)
    })
  })
})
