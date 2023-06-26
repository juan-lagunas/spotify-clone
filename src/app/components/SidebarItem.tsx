import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Home, Search } from "@mui/icons-material"

interface SidebarItemProps {
  label: string
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex flex-row h-fit items-center w-full gap-x-4 text-md font-bold cursor-pointer hover:text-white transition text-zinc-400 py-1`,
        active && "text-white"
      )}
    >
      {active ? <Home /> : <Search />}
      <p className="truncate w-100">{label}</p>
    </Link>
  )
}

export default SidebarItem
