import Image from "next/image"
import Link from "next/link"
import FacebookImage from '../public/facebook.png'
import InstaImage from '../public/insta.png'
import LinkedinImage from '../public/linkedin.png'
import TwitterImage from '../public/twitter.png'
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500']
})
export default function navigationBottom() {
  return (
    <section id="navigation-Bottom" className="bg-slate-900 flex text-white justify-center content-center">
        <div className="grid grid-cols-1  p-4 [&>*:nth-child(odd)]:mt-4 [&>*:nth-child(even)]:mt-2 lg:grid-cols-2 w-5/6">
          <div className="font-bold text-xl">Social</div>
          <div  className="flex flex-wrap sm:gap-3 *:h-8 *:w-8 gap-10 lg:row-start-2 lg:col-start-1">
              <Link href='https://www.facebook.com/profile.php?id=100021839953940' ><Image src={FacebookImage} alt="Instagram_icon"  className="" height={0} width={0} /></Link>
              <Link href="https://www.instagram.com/rohit_red_arcade/"><Image src={InstaImage} alt="feacebook_icon" className="" height={0} width={0} /></Link>
              <Link href="https://www.linkedin.com/in/rohit-manoj-pandey/"><Image src={LinkedinImage} alt="linkedin_icon" className="" height={0} width={0} /></Link>
              <Link href="https://twitter.com/pandeyg42848875"><Image src={TwitterImage} alt="twitter_icon" className="" height={0} width={0} /></Link>
              </div>
          <div className="font-bold text-xl">Rohit pandey</div>
          <div className={`${roboto.className}`}>
            I am a Web App Developer, and I like to creates user-freindly web application using Javascript to create Illusive, Scalable websites.
          </div>
          <hr className="lg:col-span-2"/>
          <div className="text-center font-bold lg:col-span-2">Created by Rohit pandey</div>
        </div>
    </section>
  )
}