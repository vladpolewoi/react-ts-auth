type MTextProps = {
  children: React.ReactNode
  className?: string
  type?: 'heading' | 'title' | 'paragraph'
}

export default function MText({ children, type, className }: MTextProps) {
  switch (type) {
    case 'heading':
      return (
        <h1 className={`text-3xl font-bold text-base-800 dark:text-white ${className}`}>
          {children}
        </h1>
      )
    case 'title':
      return (
        <h2 className={`text-2xl font-bold text-base-800 dark:text-white ${className}`}>
          {children}
        </h2>
      )
    // case 'paragraph':
    default:
      return (
        <p className={`font-light text-neutral dark:text-gray-600 ${className}`}>
          {children}
        </p>
      )
  }
}
