interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div style={{ height: "560px" }} className={`flex flex-col items-center justify-center bg-gray-800 shadow-lg rounded-lg ${className} md:w-[400px]`}>
      {children}
    </div>
  )
}