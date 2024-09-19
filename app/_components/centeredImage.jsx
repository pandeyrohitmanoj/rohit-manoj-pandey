import Image from "next/image"

export default function centeredImage({ image, alt, height, width, }) {
    // ////console.log(image, alt);
  return (
    <div className="max-h-max flex justify-center items-center px-5"><Image className="h-full " height={height} width={0} src={image} alt={alt}/></div>
  )
}
