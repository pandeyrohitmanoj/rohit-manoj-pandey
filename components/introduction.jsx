import React from 'react'

import ComputerImage from '../public/devices.svg'
import CenteredImage from './centeredImage';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    subsets: ['latin'],
    weight:['300','400']
})

export default function Introduction() {
  return (
    <section>
      <CenteredImage  image={ComputerImage} alt="Hero-devices" height={350}  />
        <article id='introduction'
         className='py-28  introduction text-white'>
            <div className='max-w-prose px-4 mx-auto text-center'>
        <h1 className='text-4xl mb-12 euros font-black'>Hi, I’m Rohit. Nice to meet you. </h1>
        <p className={`${roboto.className} font-normal text-xl`}>I have professional experience of 5 years, working as a full-stack developer at Infosys Ltd. India's second largest tech company.
        <br/><br/>I have learned Next JS, MERN stack, SQL Google Cloud services, like pubsub, Google Kubernetes Cluster, Redis Memory Storage, and Cloud Storage, to create dynamic website with Hybrid Rendering, and scalable backend.
        <br/><br/>I have created several projects to solve real-world problems, such as file sharing.</p>
        </div>
        </article>
    </section>
  )
}
