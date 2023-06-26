import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import CardButton from "./CardButton"


interface CardProps {
  src: string
  album?: string
  playlist?: string
  user: string
  href: string
}

const Card: React.FC<CardProps> = ({ src, album, playlist, user, href }) => {
  const router = useRouter()
  return (
    <Link
      href={href}
      className="
          relative
          w-[168px]
          h-min
          md:w-[200px]
          md:bg-[#181818]
          rounded-md
          p-2
          md:p-4
          hover:bg-[#282828]
          transition
          group
        "
    >
      <div className="w-full aspect-square relative mb-3">
        <Image
          fill
          src={src}
          alt="image"
          className="rounded shadow-[0_8px_24px_rgba(0,0,0,.5)]"
        />
        <CardButton />
      </div>

      <div className="font-bold pb-1">
        {playlist ? <span>{playlist}</span> : <span>{album}</span>}
      </div>
      <div className="text-sm font-[500] line-clamp-2 text-[#a7a7a7]">
        {user}
      </div>
    </Link>
  )
}

export default Card
