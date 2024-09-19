'use client'

import { useState } from 'react'
import Dropbox from '../_components/dropbox'
import Image from 'next/image'
// import MainIcon from '../public/icon.svg'
// import NavigationValue from './localIcon.svg'
import Hamubrger from '../../public/hamburger.svg'
// import Link from 'next/link'
import IconValue from './Icon'
const options = [
  'front-page',
  'introduction',
  'attributes',
  'projects',
]
export default function navigation() {
  const [ visible, setVisible] = useState(false)
  return (
    <nav  className='h-24 w-full sticky z-10 top-0 left-0 bg-slate-100  shadow-xl dark:bg-black '>
      <ul className='h-full px-10  flex justify-between items-center'>        
      <a href='#front-page-parent' >
        <IconValue />
      </a>
      <Dropbox options ={ options} parentCss='md:flex justify-around items-center cursor-pointer w-3/6 max-w-96 hidden ml-auto' />
      <div onClick={() =>{ setVisible(prev => !prev)}} className='md:hidden flex'><Image src={Hamubrger} alt='Menu Icon' /></div>
      </ul>
      { visible && <div onClick={() =>{ setVisible(prev => !prev)}} className='md:hidden flex absolute right-5 hover:cursor-pointer'><Dropbox options ={ options} childClass='bg-white text-black' parentCss='cursor-pointer' /></div>}
    </nav>
  )
}

  