import MenuItem from "./MenuItem"
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from "next/link"


export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex gap-4 mt-2">
            <MenuItem title="Home" address="/" Icon={AiFillHome} />
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <Link href={'/'} className="">
            <span className="text-2xl 
                           bg-green-500 
                             rounded-lg 
                             px-2 py-2 
                             font-bold">
            DoMovie
            </span>
        </Link>
    </div>

    
  )
}
