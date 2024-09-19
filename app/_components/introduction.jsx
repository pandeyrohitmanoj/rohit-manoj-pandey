import React from 'react'

import ComputerImage from '../../public/devices.svg'
import CenteredImage from './centeredImage';
import Link from 'next/link';
import styles from './styles.module.css'

export default function Introduction() {
  return (
    <section>
      <CenteredImage  image={ComputerImage} alt="Hero-devices" height={350}  />
        <article id='introduction'
         className='py-28  introduction text-white'>
            <div className='max-w-prose px-4 mx-auto text-center'>
        <h1 className='text-4xl mb-12 euros font-black'>Hi, I’m Rohit, Nice to meet you. </h1>
        <p className={`${styles.roboto} font-bold text-xl`}>I have experience of 5 years in JS with emphasis on Next JS creating full-fledged solution. 
          <br/>
          <br/>
          I have 3 years' of experience of working in both higly organized corporate such as Infosys Ltd., and a fast-driven startups such as Eqaim Technolgies and services.
        <br/><br/>I have mastered, and implemented solutions using technolgies such as Next JS, MERN stack, PSQL, Docker, Google Cloud platform products such as Cloud Run,pubsub, Google Kubernetes Cluster, Redis Memory Storage, and Cloud Storage, to create dynamic website with Hybrid Rendering, and scalable backend.
        <br/><br/>Alongside solving problems of Pacific based clients, I have created several projects to solve real-world problems that follows <Link href="#projects" className='text-green-500'>Projects.</Link></p>
        </div>
        </article>
    </section>
  )
}
