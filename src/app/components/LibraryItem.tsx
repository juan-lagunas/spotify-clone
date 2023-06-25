import Image from "next/image"

import { twMerge } from "tailwind-merge"

interface LibraryItemProps {
  className?: string
  playlist?: string
  album?: string
  src: string
  user: string
}

const LibraryItem: React.FC<LibraryItemProps> = ({
  className,
  playlist,
  album,
  src,
  user,
}) => {
  return (
    <div
      className={twMerge(
        `h-14 hover:bg-[#242424] rounded flex items-center gap-2 px-2 font-semibold overflow-hidden`,
        className
      )}
    >
      <div className="relative h-12 aspect-square">
        <Image fill alt="Library Item" src={src} className="rounded" />
      </div>
      {playlist ? (
        <div className="grid grid-flow-row gap-1">
          <div className="text-[1rem] truncate">{playlist}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate">
            Playlist • {user}
          </div>
        </div>
      ) : (
        <div className="grid grid-flow-row gap-1">
          <div className="text-[1rem] truncate">{album}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate">
            Album • {user}
          </div>
        </div>
      )}
    </div>
  )
}

export default LibraryItem
