"use client"

import GitHubIcon from "@mui/icons-material/GitHub"

const Footer = () => {
  return (
    <div className="px-4 mt-10 max-sm:mb-[120px] sm:px-6">
      <div className="border border-[#292929] rounded-full"></div>
      <div className="h-20 flex items-center justify-between">
        <a href="" className="hover:scale-105 transition">
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a>
        <span className="text-sm">&copy; 2023 PBJ</span>
      </div>
    </div>
  )
}

export default Footer
