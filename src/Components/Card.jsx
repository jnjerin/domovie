import Link from "next/link"
import Image from "next/image"
import { FiThumbsUp } from "react-icons/fi"

export default function Card({ result }) {
  return (
    <div className="group
                    cursor-pointer sm:hover:shadow-slate-400
                    sm:shadow-md
                    rounded-lg
                    sm:border sm:border-slate-400 
                    sm:m-2
                    transition-shadow duration-200 
                    mx-auto-6xl">
        <Link href={`/movie/${result.id}`}>
            <Image
             src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
            }`}
             width={600}
                height={400}
                className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-300'
            ></Image>
                <div className='p-2'>
                    <p className="line-clamp-2 text-md">{result.overview}</p>
                    <h2 className="text-lg font-bold truncate mt-2">
                        {result.title || result.name}
                    </h2>
                    <p className="flex items-center text-gray-500 text-sm">
                        {/* {result.media_type && `${result.media_type} •`}{" "} */}
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}           
                    </p>
                </div>  
        </Link>
    </div>
  )
}
