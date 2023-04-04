import styles from './MButton.module.scss'

type MButtonProps = {
  text: string
  type?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function MButton({ text, onClick, type = 'primary' }: MButtonProps) {
  const classes = `${styles.MButton} ${styles['MButton--' + type]}`
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  )
}
