
const options = [
    'front-page',
    'attributes',
    'introduction',
    'projects',
]
import Link from "next/link"

export default function Dropbox() {
    const handleScroll = (e) => {
        e.preventDefault(); // Prevent the default behavior
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, ""); // Get the element ID
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
        }
      };
    return <div className='flex justify-center items-center flex-col'>
        {
            options.map( (option,index) => {
                return <Link key={index} href={`/#${option}`} onClick={handleScroll}>{option}</Link>
            })
        }
    </div>
}