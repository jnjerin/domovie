import MenuItem from "./MenuItem"
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"


export default function Header() {
  return (
    <div>
        <div className="">
            <MenuItem title="Home" address="/" Icon={AiFillHome} />
            <MenuItem title="Home" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="">

        </div>
    </div>

    
  )
}
