import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-24 px-8 border-b">
      <h1 className="text-2xl font-bold">André L S Melo</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/sobre" className="text-gray-500 hover:text-gray-700">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/projetos"
              className="text-gray-500 hover:text-gray-700"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/contato" className="text-gray-500 hover:text-gray-700">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
