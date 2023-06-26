import Image from "next/image"
import Link from "next/link"

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"

interface LibraryItemProps {
  className?: string
  playlist?: string
  album?: string
  artist?: string
  user?: string
  src: string
  href: string
}

const LibraryItem: React.FC<LibraryItemProps> = ({
  className,
  playlist,
  album,
  artist,
  user,
  src,
  href,
}) => {
  const router = useRouter()
  return (
    <Link
      href={href}
      className={twMerge(
        `h-16 w-full hover:bg-[#242424] rounded-md flex items-center gap-2 p-2 font-semibold overflow-hidden transition`,
        className
      )}
    >
      <div className="relative h-full aspect-square shadow-[0_4px_60px_rgba(0,0,0,.5)]">
        <Image fill alt="Library Item" src={src} className="rounded" />
      </div>
      {playlist ? (
        <div className="grid grid-flow-row gap-0.5 text-left">
          <div className="text-[1rem] truncate">{playlist}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate max-md:hidden">
            Playlist • {user}
          </div>
        </div>
      ) : null}
      {album ? (
        <div className="grid grid-flow-row gap-0.5 text-left">
          <div className="text-[1rem] truncate">{album}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate max-md:hidden">
            Album • {user}
          </div>
        </div>
      ) : null}
      {artist ? <div className="text-[1rem] truncate">{artist}</div> : null}
    </Link>
  )
}

export default LibraryItem
