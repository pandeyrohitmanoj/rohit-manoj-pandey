
import HexagonImage from './hexagonImage'
import { OpacityAnimation } from './popUpAnimation'
import Testing from '../../public/testing.svg'
import responsive from '../../public/responsive-design-symbol.svg'
import fast from'../../public/rocket.svg'
import rocket from '../../public/scalable.svg'
import Security from '../../public/security.svg'
import Dynamic from '../../public/dynamic (1).svg'
import styles from './styles.module.css'
const ImageArray = [
    {img:Dynamic,title:'Dynamic',description:'Websites can be dynamic,and I find joy in bringing pages to life.'},
    {img:responsive,title:'Responsive',description:'Our responsive design, brings seamless browsing on any device.'},
    {img:Security,title:'Secure',description:'Rigorous testing to provide secure user experiences effortlessly'},
    {img:rocket,title:'Scalable',description:'Deliver scalable solutions with lightning-fast page loads .'},
    {img:fast,title:'Fast',description:'Accelerate page loads and API responses for lightning-fast performance.'},
  {img:Testing,title:'Testing',description:'Ensure robust software quality via comprehensive testing for good performance.'},
]
let duration = 0
export default function Attributes() {
    return <section id='attributes' className='w-9/12 min-w-64 z-0 mx-auto my-24 '>
        <div className='text-4xl font-bold text-center mb-24 w-9/12 mx-auto tracking-wider'>My web-apps constitutes best features for our clients</div>
        <section className={`flex justify-center items-center text-black  flex-wrap gap-24`}>
        {ImageArray.map( (imageObject, index ) => {
            duration+=0.15
            return <div className='bg-slate-100 mx-4 p-8 rounded-lg text-center flex flex-col justify-start shadow-xl max-h-max max-w-4/6 w-64' key={index}>
                <OpacityAnimation duration={duration}>
                <HexagonImage IconImage={imageObject.img} />
                <h1 className='font-bold text-2xl h-5/6'>{imageObject.title}</h1>
                <p className={`h-5/6 font-normal text-lg ${styles.roboto}`}>{imageObject.description}</p>
                </OpacityAnimation>
            </div>
        })}
        </section>
    </section>
}