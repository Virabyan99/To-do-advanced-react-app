type ButtonProps = {
  onClick?: () => Promise<void>
  buttonType?: "primary" | "secondary";
  children: React.ReactNode
}

export default function Button({onClick, children, buttonType}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer px-[16px] ${
        buttonType === 'secondary' ? 'opacity-[80%]' : ''
      }`}>
        {children}
    </button>
  )
}
