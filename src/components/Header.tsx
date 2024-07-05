import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-24 px-8 border-b">
      <Link href="/">
        {/** Add Icon */}
        <h1 className="text-2xl font-bold">André Melo</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#sobre" className="text-gray-500 hover:text-gray-700">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projetos" className="text-gray-500 hover:text-gray-700">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className="text-gray-500 hover:text-gray-700">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
