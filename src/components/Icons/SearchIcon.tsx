import { type SVGProps } from 'react'
import { type JSX } from 'react/jsx-runtime'

export const SearchIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
      <path d="M239.5 208.2 200.4 169c10.3-16.1 16.5-35.1 16.5-55.6C216.9 56.3 170.6 10 113.4 10 56.3 10 10 56.3 10 113.4c0 57.1 46.3 103.4 103.4 103.4 20.5 0 39.5-6.1 55.6-16.5l39.1 39.1c8.6 8.6 22.7 8.6 31.4 0 8.7-8.5 8.7-22.6 0-31.2zm-126.1-20.9c-40.8 0-73.9-33.1-73.9-73.9 0-40.8 33.1-73.9 73.9-73.9s73.9 33.1 73.9 73.9c0 40.8-33.1 73.9-73.9 73.9z" />
    </svg>
  )
}
