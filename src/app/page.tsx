import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import AboutMe from '@/components/AboutMe'
import Offers from '@/components/Offers'
import Works from '@/components/Works'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='font-bodyFont'>
      <Banner />
      <AboutMe />
      <Offers />
      <Skills />
      <Works />
      <Contact />
    </div>
  )
}
