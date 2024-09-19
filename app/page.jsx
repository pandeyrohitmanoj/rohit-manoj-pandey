'use client'

import './globals.css'
import FirstPage from './_components/firstpage'
import Introduction from './_components/introduction'
import Attributes from './_components/attributes';
import NavigationBottom from './_components/navigationBottom'
import Navigation from './_components/navigation';
import Email from './_components/email'


import Projects from './_components/projects';
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
