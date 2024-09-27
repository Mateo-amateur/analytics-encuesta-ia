interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h2 className={`text-2xl font-bold text-gray-800 dark:text-white ${className}`}>
      {children}
    </h2>
  )
}