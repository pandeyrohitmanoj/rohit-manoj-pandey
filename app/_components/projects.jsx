"use client"
import React from "react";
import Project1 from "../../public/project1.png";
import Project2 from "../../public/Project2.png";
import Image from "next/image";
const projectsArray = [
  {
    name: "ShareDoc",
    description: "Document Storing and sharing web app",
    githubLink: "https://github.com/pandeyrohitmanoj/sharedoc.git",
    projectLink: "https://sharedoc-yqmtcbehnq-el.a.run.app/dashboard",
    image: Project2,
    technology: [ 'Next JS','HTML5','CSS3','Node JS','Mongo DB','Express JS','React JS','Google Cloud Storage', 'Framer Motion']
  },
  {
    name: "Zoomcar Rental",
    description: "Car Rental App",
    githubLink: "https://github.com/pandeyrohitmanoj/chess-mern.git",
    projectLink: "https://chess-mern-1vrp.vercel.app/app",
    image: Project1,
    technology: ['React JS','Express JS','HTML5','CSS3','Node JS','Mongo DB','Google Cloud Storage','Framer Motion']
  },
];
import { OpacityAnimation } from "./popUpAnimation";
import Link from "next/link";

let duration=0
export default function projects() {
  return (
    <section id="projects" className="mb-28">
      <h2 className="text-center text-4xl font-bold mb-28">My Projects</h2>
      <section className="flex justify-center items-start flex-wrap  gap-16 overflow-auto w-full mx-auto">
        {projectsArray.map((project, index) => {
          duration+=0.25
          return (
            <article
              className="flex flex-col flex-wrap shadow-xl max-w-full gap-2 projectComponent hover:border hover:border-1 border-slate-100 rounded-xl overflow-hidden mb-10"
              key={index}
            >
            <OpacityAnimation duration={duration}>

              <Image
                className="w-full"
                src={project.image}
                height={0}
                width={0}
                alt="ProjectImage"
              />
              <h2 className={`font-bold px-4 pt-8 text-xl`}>
                Name<span className={`font-normal`}>: {project.name}</span>
              </h2>
              <p className={`font-bold  px-4 text-xl`}>
                Description<span className={`text-lg font-normal`}>
                   : {project.description}
                </span>
              </p>
              <div className="font-bold  px-4 text-xl flex gap-2">
                Technology: 
                {/* {project.technology.map( tech => tech+' ,')} */}
                <span className="flex flex-wrap gap-2">{
                  project.technology.map( (tech, index) => {
                    ////console.log(tech, index);
                    return <div key={index} className={`bg-slate-200 text-base font-bold rounded-lg py-2 px-4 text-black hover:bg-black hover:text-white hover:border-white hover:border cursor-default `}>{tech}</div>
                  })
                }
                </span> 
              </div>
              <section className="grid px-4 mt-8 grid-cols-2 gap-4 pb-8">
                <Link href="https://github.com/pandeyrohitmanoj/chess-mern.git" className="font-bold w-full px-4 border-2 text-center border-slate-300 inline hover:bg-white hover:text-black">
                  Github
                </Link>
                <Link href="https://chess-mern-1vrp.vercel.app/" className="font-bold w-full px-4 hover:bg-white hover:text-black border-2 text-center border-slate-300 inline">
                  Live App
                </Link>
              </section>
              </OpacityAnimation>
            </article>
          );
        })}
      </section>
    </section>
  );
}
