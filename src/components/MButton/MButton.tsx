import styles from './MButton.module.scss'

type MButtonProps = {
  text: string
  type?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function MButton({
  text,
  onClick,
  type = 'primary',
  disabled,
}: MButtonProps) {
  // TODO: find better approach then list classes in string
  // consider have a method to generate classes from object
  // const classes = `${styles.MButton} ${styles['MButton--' + type]} ${
  //   disabled ? styles['MButton--disabled'] : ''
  // }}`
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

  const onClickLocal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!disabled) {
      onClick?.(e)
    }
  }

  return (
    <button className={classes} onClick={onClickLocal}>
      {text}
    </button>
  )
}
