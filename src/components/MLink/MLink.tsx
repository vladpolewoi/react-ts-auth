import { Link, LinkProps } from 'react-router-dom'

type MLinkProps = {
  className?: string
} & LinkProps

export default function MLink({ className = '', ...props }: MLinkProps) {
  return (
    <Link
      className={`text-link ml-2 text-info hover:underline ${className}`}
      {...props}
    />
  )
}
