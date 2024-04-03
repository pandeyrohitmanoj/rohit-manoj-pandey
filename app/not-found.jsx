import Link from "next/link"
export default function notFound() {
    return <div className="h-svh flex flex-col justify-center items-center">
      <div>Sorry, Seems you made a bad request
      Click here to get back at</div><Link href='/' className="text-blue-500">home</Link>
    </div>
}