'use client'

import './globals.css'
import FirstPage from '../components/firstpage'
import Introduction from '../components/introduction'
import Attributes from '../components/attributes';
import NavigationBottom from '../components/navigationBottom'
import Testing from '../public/testing.svg'
import responsive from '../public/responsive-design-symbol.svg'
import fast from'../public/rocket.svg'
import rocket from '../public/scalable.svg'
import Dynamic from '../public/dynamic (1).svg'
import Security from '../public/security.svg'
import Navigation from '../components/navigation';
import Email from '../components/email'
const ImageArray = [
  {img:responsive,title:'Responsive',description:'Our responsive design, brings seamless browsing on any device.'},
  {img:Dynamic,title:'Dynamic',description:'Websites can be dynamic; I find joy in bringing pages to life.'},
  {img:Security,title:'Secure',description:'Enhance security and user experiences effortlessly'},
  {img:fast,title:'Fast',description:'Accelerate page loads and API responses for lightning-fast performance.'},
  {img:rocket,title:'Scalable',description:'Deliver scalable solutions with lightning-fast page loads and API responses.'},
  {img:Testing,title:'Testing',description:'Ensure robust software quality via comprehensive testing for good performance.'},
]
import Projects from '../components/projects';
export default function Home() {
  return (
    <main className="euros min-w-64 relative">
      <Navigation />
      <FirstPage />
      <Introduction />
      <Attributes ImageArray={ImageArray}/>
      <Projects />
      <Email />
      <NavigationBottom />
     </main>
  );
}
