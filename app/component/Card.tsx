interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}