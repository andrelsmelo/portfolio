import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
}

const variantClasses = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
  tertiary: 'bg-gray-200 text-gray-800',
  danger: 'bg-red-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
  light: 'bg-gray-200 text-gray-800',
  dark: 'bg-gray-800 text-white',
  link: 'text-blue-500 underline',
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variantClasses[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
