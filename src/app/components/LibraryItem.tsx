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
        `h-16 hover:bg-[#242424] rounded-md flex items-center gap-2 p-2 font-semibold overflow-hidden transition`,
        className
      )}
    >
      <div className="relative h-full aspect-square shadow-[0_4px_60px_rgba(0,0,0,.5)]">
        <Image fill alt="Library Item" src={src} className="rounded" />
      </div>
      {playlist ? (
        <div className="grid grid-flow-row gap-0.5">
          <div className="text-[1rem] truncate">{playlist}</div>
          <div className="text-[#a7a7a7] text-[0.875rem] truncate">
            Playlist • {user}
          </div>
        </div>
      ) : (
        <div className="grid grid-flow-row gap-0.5">
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
