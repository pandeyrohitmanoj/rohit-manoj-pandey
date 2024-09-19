import Link from 'next/link'
export default function fileButtons() {
  return (
    <div className='flex flex-col justify-center items-center w-full mb-10 font-bold sm:flex-row gap-4 max-h-max'>
        <a href='/rohit_pandey_resume.pdf' className='text-white bg-black px-4 py-2 dark:text-black dark:bg-white '>Resume</a>
        <a href='/rohit_pandey_cover_letter.pdf' className='text-white bg-black px-4 py-2 dark:text-black dark:bg-white '>Cover Letter</a>
    </div>
  )
}
    