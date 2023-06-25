import { twMerge } from "tailwind-merge"

interface ButtonsProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const Buttons: React.FC<ButtonsProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `h-[32px] aspect-square rounded-full flex items-center justify-center transition`,
        className
      )}
    >
      {children}
    </button>
  )
}

export default Buttons
