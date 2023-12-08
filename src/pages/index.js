import Image from 'next/image'
import { Inter } from 'next/font/google'
import Default from './Urdu/default'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="">
      <Default />
    </main>
  )
}
