import Card from '@/components/Card'
import { projects } from '@/contents/projects'
import SocialLinks from '@/components/SocialLinks'
import DownloadCvButton from '@/components/DownloadCvButton'
import Image from 'next/image'

export default function Home() {
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
                Olá 🤙, me chamo André Melo
              </h1>
              <h2 className="text-2xl font-semibold text-slate-500 text-muted-foreground">
                Full Stack Developer | Project Manager | Scrum Master
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sou um entusiasta da tecnologia. No dia a dia, você pode me
                encontrar mergulhado em código, liderando times ou planejando
                sprints. Completamento louco por troubleshooting e aprendizado
                contínuo.
              </p>
              <DownloadCvButton />
            </div>
            <Image
              src="/andrelsmelo.png"
              width="433"
              height="577"
              alt="Hero"
              className="top-0 mx-auto aspect-square rounded-xl object-cover sm:w-full lg:w-auto"
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
                Sobre mim
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Durante meu tempo livre, gosto de me aventurar nas mesas de
                Poker, em jogos online ou com as minhas habilidades na cozinha.
                {'\n'}
                Mas de longe, onde mais me divirto, aprendo e busco ensinar é no
                meu papel de Pai, sou completamente maluco pelo meu filhote.
                {'\n'}
                Seja na criação de soluções inovadoras, nas aventuras em meio a
                meus hobbies ou no meu tempo de qualidade com minha família, tem
                uma coisa que sempre me acompanha, a paixão por tudo aquilo que
                faço.
                {'\n'}
                Venha descobrir mais sobre mim e minhas paixões!
              </p>
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
                  Projetos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Abaixo você pode encontrar diversos projetos meus, onde busco
                  aplicar um conhecimento específico, aprender algo novo ou
                  simplesmente me divertir.
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
          className="w-full py-12 md:py-24 lg:py-28 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Entrar em contato
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Gostou de algum projeto? Quer saber mais sobre mim? Ou
                simplesmente bater um papo? Fique à vontade para entrar em
                contato!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="max-w-lg flex-1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="max-w-lg flex-1"
                />
                <textarea placeholder="Message" className="max-w-lg flex-1" />
                <button type="submit">Enviar Mensagem</button>
              </form>
            </div>
          </div>
          <SocialLinks />
        </section>
      </main>
    </div>
  )
}
