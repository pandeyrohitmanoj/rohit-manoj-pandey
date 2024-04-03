import React from 'react'

import { Roboto, } from 'next/font/google';
import CenteredImage from './centeredImage';
import Image from '../public/avatar.svg'
import FileButtons from '../components/fileButtons'

const serif = Roboto({
  subsets:['latin'],
  weight:['700','300']
})
import {OpacityAnimation} from './popUpAnimation'
export default function firstpage() {
  return (
    <section className='max-w-full'>
      <section id='front-page' className={` min-h-5/6 w-full mb-40  tracking-widest`}>
        <OpacityAnimation duration={0.25}><article className={`font-black text-3xl  sm:text-4xl leading-10 text-center w-4/6 max-w-120 mt-5 sm:mt-20 mx-auto`}>Designer, Full-Stack Cloud Developer, and a Freelancer</article></OpacityAnimation>
        <OpacityAnimation duration={0.40}><article className={`${serif.className} font-normal text-center max-w-108 mt-10 mx-auto mb-10 px-4`}>Hi, I am Rohit Pandey, and I am a Next JS Developer with expertise in Cloud Dev, and  I use it to create awesome web apps.</article></OpacityAnimation>
        <OpacityAnimation duration={0.60}><FileButtons /></OpacityAnimation>
        <OpacityAnimation duration={0.75}><CenteredImage image={Image} alt="avatar Image" height={175} width={150}/></OpacityAnimation>
        {/* <article className='h-40 flex justify-center items-center mt-5'><Image className='h-full' alt='avatar Image' src={ImageValue} height={0} width={0} /></article> */}
      </section>
    </section>
  )
}
