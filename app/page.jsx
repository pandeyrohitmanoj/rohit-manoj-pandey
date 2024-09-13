'use client'

import './globals.css'
import FirstPage from '../components/firstpage'
import Introduction from '../components/introduction'
import Attributes from '../components/attributes';
import NavigationBottom from '../components/navigationBottom'
import Navigation from '../components/navigation';
import Email from '../components/email'


import Projects from '../components/projects';
export default function Home() {
  return (
    <main className="euros min-w-64 relative">
      <Navigation />
      <FirstPage />
      <Introduction />
      <Attributes/>
      <Projects />
      <Email />
      <NavigationBottom />
     </main>
  );
}
