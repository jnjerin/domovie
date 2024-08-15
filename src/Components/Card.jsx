import Link from "next/link"
import Image from "next/image"

export default function Card({ result }) {
  return (
    <div className="group">
        <Link href={'/movie/${result.id}'}>
            <Image
             src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
            }`}
             width={500}
                height={300}
                className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-300'
            ></Image>
        </Link>
    </div>
  )
}
