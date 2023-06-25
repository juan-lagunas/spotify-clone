import Image from "next/image"

import { twMerge } from "tailwind-merge"

interface LibraryItemProps {
  className?: string
  playlist?: string
  album?: string
  artist?: string
  user?: string
  src: string
}

const LibraryItem: React.FC<LibraryItemProps> = ({
  className,
  playlist,
  album,
  artist,
  user,
  src,
}) => {
  return (
    <div
      className={twMerge(
        `h-16 hover:bg-[#242424] rounded-md flex flex-1 items-center gap-2 p-2 font-semibold overflow-hidden transition`,
        className
      )}
    >
      <div className="relative h-full aspect-square shadow-[0_4px_60px_rgba(0,0,0,.5)]">
        <Image fill alt="Library Item" src={src} className="rounded" />
      </div>
      {playlist ? (
        <div className="grid grid-flow-row gap-0.5">
          <div className="text-[1rem] truncate">{playlist}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate max-md:hidden">
            Playlist • {user}
          </div>
        </div>
      ) : null}
      {album ? (
        <div className="grid grid-flow-row gap-0.5">
          <div className="text-[1rem] truncate">{album}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate max-md:hidden">
            Album • {user}
          </div>
        </div>
      ) : null}
      {artist ? <div className="text-[1rem] truncate">{artist}</div> : null}
    </div>
  )
}

export default LibraryItem
