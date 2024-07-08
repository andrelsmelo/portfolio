import Card from '@/components/Card'
import GetProjects from '@/contents/projects'
import SocialLinks from '@/components/SocialLinks'
import DownloadCvButton from '@/components/DownloadCvButton'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')
  const projects = GetProjects()

  return (
    <div className="flex flex-col min-h-[100dvh] w-full items-center">
      <main className="flex-1">
        <section
          id="hero"
          className="w-full border-b py-12 md:py-24 lg:py-32 relative"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
                {t('heroTitle')}
              </h1>
              <h2 className="text-2xl font-semibold text-slate-500 text-muted-foreground">
                {t('heroSubtitle')}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('heroDescription')}
              </p>
              <DownloadCvButton />
            </div>
            <Image
              src="/andrelsmelo.png"
              width="433"
              height="377"
              alt="Hero"
              className="top-0 mx-auto object-cover hidden lg:block"
            />
          </div>
        </section>
        <section
          id="about"
          className="w-full border-b py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {t('aboutTitle')}
              </h2>
              <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed gap-3 flex flex-col">
                <p>{t('aboutParagraph1')}</p>
                <p>{t('aboutParagraph2')}</p>
                <p>{t('aboutParagraph3')}</p>
                <p> {t('aboutParagraph4')}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full border-b py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t('projectsTitle')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('projectsDescription')}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  description={project.description}
                  status={project.status}
                  live={project.live}
                  code={project.code}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full pt-12 pb-4 md:py-24 lg:py-28 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {t('contactTitle')}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('contactDescription')}
              </p>
            </div>
          </div>
          <SocialLinks />
        </section>
      </main>
    </div>
  )
}
