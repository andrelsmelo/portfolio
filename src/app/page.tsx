import Image from 'next/image'
import Card from '@/components/Card'
import { projects } from '@/contents/projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8 bg-gray-100 text-gray-900">
      <section className="text-center">
        <Image
          src="/andrelsmelo.png"
          width={350}
          height={350}
          alt="André Melo Foto"
          className="rounded-full border-4 border-red-500"
        />
        <article className="mt-8 space-y-4 text-lg leading-relaxed">
          <p>
            Olá! Me chamo <strong>André Melo</strong>, sou um entusiasta da
            tecnologia. No dia a dia, você pode me encontrar mergulhado em
            código como Desenvolvedor de Software, liderando times como Gerente
            de Projetos ou guiando sprints como Scrum Master. Mas nem tudo é
            feito de bits e bytes!
          </p>
          <p>
            Durante meu tempo livre, gosto de me aventurar nas mesas de Poker,
            em jogos online ou com as minhas habilidades na cozinha.
          </p>
          <p>
            Mas de longe, onde mais me divirto, aprendo e busco ensinar é no meu
            papel de Pai, sou completamente maluco pelo meu filhote.
          </p>
          <p>
            Seja na criação de soluções inovadoras, nas aventuras em meio a meus
            hobbies ou no meu tempo de qualidade com minha família, tem uma
            coisa que sempre me acompanha, a paixão por tudo aquilo que faço.
          </p>
          <p>Venha descobrir mais sobre mim e minhas paixões!</p>
        </article>
      </section>
      <section className="mt-12 text-center">
        <article className="space-y-4 text-lg leading-relaxed">
          <p>
            Abaixo você pode encontrar diversos projetos meus, onde busco
            aplicar um conhecimento específico, aprender algo novo ou
            simplesmente me divertir.
          </p>
          <p>
            Seja bem-vindo e fique à vontade para explorar, testar e até mesmo
            contribuir com meus projetos.
          </p>
        </article>
      </section>
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </section>
    </main>
  )
}
