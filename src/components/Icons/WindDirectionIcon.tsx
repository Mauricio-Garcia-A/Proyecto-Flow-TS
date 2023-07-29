import { type SVGProps } from 'react'
import { type JSX } from 'react/jsx-runtime'

export default function WindDirectionIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
      <path d="M244.7 230.7 136.1 16.6c-1.5-3-4.6-4.9-7.9-4.9-3.4 0-6.4 1.9-7.9 4.9L11 231.3c-1.6 3.2-1.2 7.2 1.2 9.9s6.2 3.8 9.6 2.6L128 207.9l106.2 35.9c.9.3 1.9.5 2.9.5h.1c4.9-.1 8.8-4 8.8-8.9 0-1.8-.5-3.3-1.3-4.7zM122.2 191l-85.3 28.9 85.3-167.8V191zm11.9 0V52.1l85.1 167.7-85.1-28.8z" />
    </svg>
  )
}
