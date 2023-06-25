import Image from "next/image"
import CardButton from "./CardButton"
import { Album } from "@mui/icons-material"

type CardProps = {
  src: string
  album?: string
  playlist?: string
  user: string
}

const Card: React.FC<CardProps> = ({ src, album, playlist, user }) => {
  return (
    <div
      className="
          relative
          w-[168px]
          h-min
          md:w-[200px]
          md:bg-[#181818]
          rounded-md
          p-2
          md:p-4
          cursor-pointer
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

      {playlist ? (
        <>
          <div className="font-bold pb-1">{playlist}</div>
          <div className="text-sm font-[500] line-clamp-2 text-[#a7a7a7]">
            {user}
          </div>
        </>
      ) : (
        <>
          <div className="font-bold pb-1">{album}</div>
          <div className="text-sm font-[500] line-clamp-2 text-[#a7a7a7]">
            {user}
            {user}

            {user}

            {user}
            {user}

            {user}
            {user}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
