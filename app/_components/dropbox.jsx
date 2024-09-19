

import Link from "next/link"

export default function Dropbox({options, parentCss, childClass}) {
    const handleScroll = (e) => {
        e.preventDefault(); // Prevent the default behavior
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, ""); // Get the element ID
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
        }
      };
    return <div className={parentCss}>
        {
            options.map( (option,index) => {
                return <Link key={index} href={`/#${option}`} onClick={handleScroll} className={`capitalize block my-0.5 px-2 font-bold hover:text-[#6D07F2] ${childClass} `}>{option}</Link>
            })
        }
    </div>
}