import { SVGProps } from '@/utils/types'

const Curriculo = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={24}
      height={24}
      {...props}
    >
      <rect width="256" height="256" fill="none" />
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z" />
    </svg>
  )
}

export default Curriculo
