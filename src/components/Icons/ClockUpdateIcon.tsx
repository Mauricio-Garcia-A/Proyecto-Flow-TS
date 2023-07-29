import { type SVGProps } from 'react'
import { type JSX } from 'react/jsx-runtime'

export default function ClockUpdateIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
      <path d="M238.3 88.2c-1.9-4.9-7.3-7.4-12.2-5.5-4.9 1.9-7.4 7.3-5.5 12.2 9.1 24.1 8.5 50.4-1.6 74.1-10.4 24.3-29.7 43.1-54.2 52.9-24.5 9.8-51.4 9.5-75.7-.9-7.1-3-13.6-6.8-19.7-11.2-14.8-10.8-26.3-25.6-33.2-43-9.8-24.5-9.5-51.4.9-75.8s29.6-43.2 54.2-53c23.5-9.4 49.1-9.5 72.6-.3l-6.7 11.4c-1.9 3.1-.4 5.2 3.2 4.6l31.9-5.2c3.6-.6 5.5-3.9 4.3-7.3l-10.8-30.5c-1.2-3.4-3.7-3.7-5.6-.5l-6.5 10.9C145 9 113.3 8.7 84.3 20.3 55 32.1 32 54.5 19.6 83.5c-12.4 28.9-12.8 61-1.1 90.3 8.3 20.8 22 38.4 39.6 51.3 7.2 5.3 15 9.8 23.4 13.3 28.9 12.4 61 12.8 90.3 1.1 29.3-11.7 52.2-34.1 64.6-63 12.1-28.3 12.8-59.6 1.9-88.3z" />
      <path d="M123.8 54.2c-4.2 0-7.7 3.4-7.7 7.7v76.5l70 36.2c1.1.6 2.3.9 3.5.9 2.8 0 5.5-1.5 6.8-4.1 2-3.8.5-8.4-3.3-10.4l-61.6-32V61.9c0-4.3-3.4-7.7-7.7-7.7z" />
    </svg>
  )
}
