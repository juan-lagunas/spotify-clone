import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"

const MobileNav = () => {
  return (
    <div className="md:hidden w-full h-[70px] grid grid-cols-3">
      <a href="/" className="flex flex-col gap-1 items-center justify-center">
        <HomeIcon sx={{ fontSize: 28 }} />
        <span className="text-sm font-semibold">Home</span>
      </a>

      <a href="/" className="flex flex-col gap-1 items-center justify-center">
        <SearchIcon sx={{ fontSize: 28 }} />
        <span className="text-sm font-semibold">Search</span>
      </a>

      <a href="/" className="flex flex-col gap-1 items-center justify-center">
        <AutoAwesomeMotionIcon sx={{ fontSize: 28 }} />
        <span className="text-sm font-semibold">Library</span>
      </a>
    </div>
  )
}

export default MobileNav
