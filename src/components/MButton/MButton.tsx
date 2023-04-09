import { IconType } from 'react-icons'
import styles from './MButton.module.scss'

type MButtonProps = {
  text?: string
  type?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  className?: string
  icon?: IconType | (() => JSX.Element)
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function MButton({
  text,
  onClick,
  type = 'primary',
  icon: Icon,
  disabled,
  className,
}: MButtonProps) {
  // TODO: find better approach then list classes in string
  // consider have a method to generate classes from object
  // const classes = `${styles.MButton} ${styles['MButton--' + type]} ${
  //   disabled ? styles['MButton--disabled'] : ''
  // }}`
  // this approach is not good because in html you can't see which classes are applied
  const classes = Object.entries({
    [styles.MButton]: true,
    [styles[`MButton--${type}`]]: true,
    [styles['MButton--disabled']]: disabled,
  })
    .reduce((acc, [key, value]) => {
      if (value) {
        acc.push(key)
      }
      return acc
    }, [] as string[])
    .join(' ')

  function onClickLocal(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (!disabled) {
      onClick?.(e)
    }
  }

  const iconElement = Icon && <Icon className="mr-2 h-6 w-6" />

  return (
    <button className={`${className} ${classes}`} onClick={onClickLocal}>
      {iconElement}
      {text}
    </button>
  )
}
