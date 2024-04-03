
import HexagonImage from './hexagonImage'
import { Roboto } from 'next/font/google'
import { OpacityAnimation } from './popUpAnimation'
const roboto =Roboto({
    subsets:['latin'],
    weight:['300', '400', '700']
})
let duration = 0
export default function Attributes({ImageArray}) {
    return <section id='attributes' className='w-9/12 min-w-64  mx-auto my-24 '>
        <div className='text-4xl font-bold text-center mb-24 w-9/12 mx-auto tracking-wider'>My web-apps constitutes best features for our clients</div>
        <section className={`${roboto.className} flex justify-center items-center text-black  flex-wrap gap-24`}>
        {ImageArray.map( (imageObject, index ) => {
            duration+=0.15
            return <div className='bg-slate-100 mx-4 z-4 p-8 rounded-lg text-center flex flex-col justify-start shadow-xl max-h-max max-w-4/6 w-64' key={index}>
                <OpacityAnimation duration={duration}>
                <HexagonImage IconImage={imageObject.img} />
                <h1 className='font-bold text-2xl h-5/6'>{imageObject.title}</h1>
                <p className='h-5/6 font-normal text-lg'>{imageObject.description}</p>
                </OpacityAnimation>
            </div>
        })}
        </section>
    </section>
}