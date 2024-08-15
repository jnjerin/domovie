import Link from "next/link"
import Image from "next/image"
import { FiThumbsUp } from "react-icons/fi"

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
                <div className='p-2'>
                    <p className="line-clamp-2 text-md">{result.overview}</p>
                    <h2 className="text-lg font-bold truncate">
                        {result.title || result.name}
                    </h2>
                    <p className="flex items-center text-gray-300 text-sm">
                        {result.media_type && `${result.media_type} •`}{" "}
                        {result.release_date || result.first_air_date} •
                        <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}           
                    </p>
                </div>  
        </Link>
    </div>
  )
}
