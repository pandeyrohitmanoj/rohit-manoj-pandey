import Image from 'next/image'
import Hexagon from '../../public/hexagon.svg'
export default function hexagon({ IconImage}){
    return <div className="relative z-0 flex justify-center items-center h-40">
        <Image className='h-full absolute w-auto hexagon' src={Hexagon} alt="hexagon" height="auto" width="auto" />
        <Image src={IconImage} alt="attributeImage" className='h-3/6 z-2 relative' height="auto" width="auto" />
    </div>
}