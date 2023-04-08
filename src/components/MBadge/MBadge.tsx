// TODO: In maintanance
import { IconType } from 'react-icons'

type MBadgeProps = {
  tone?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  text?: string
  icon?: IconType | (() => JSX.Element)
}

export default function MBadge({ tone = 'primary', text, icon: Icon }: MBadgeProps) {
  const IconElement = Icon && <Icon className="mr-2" />

  const toneClasses = {
    primary: 'bg-primary text-white',
  }

  return (
    <div className="flex items-center rounded-lg border">
      {IconElement}
      {text || ''}
    </div>
  )
}
