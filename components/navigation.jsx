'use client'

import { useState } from 'react'
import Dropbox from '../components/dropbox'
import Image from 'next/image'
// import navigationValue from '../app/icon.png'
// import navigationValue from './icon.svg'
import Hamubrger from '../public/hamburger.svg'
import Link from 'next/link'
export default function navigation() {
  const [ visible, setVisible] = useState(false)
  return (
    <nav  className='h-24 z-1000 w-full sticky top-0 bg-slate-100  shadow-xl dark:bg-black '>
        <ul className='h-full px-10 flex justify-between items-center'>
        <Link href='/'><Image src="https://storage.googleapis.com/share_doc/icon.png" height={80} width={80} className='rounded-full' alt="link to home page icon"/></Link>
            <div onClick={() =>{ setVisible(prev => !prev)}}><Image src={Hamubrger} alt='Menu Icon' /></div>
        </ul>
        { visible && <div onClick={() =>{ setVisible(prev => !prev)}} className='absolute right-0 hover:cursor-pointer'><Dropbox /></div>}
    </nav>
  )
}
