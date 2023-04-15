type MCardProps = {
  children: React.ReactNode
  className?: string
}

export default function MCard({ children, className }: MCardProps) {
  return (
    <div
      className={`glass max-w-lg rounded-2xl bg-base px-16 py-6 shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
