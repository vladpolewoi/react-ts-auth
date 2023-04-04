import styles from './MButton.module.scss'

type MButtonProps = {
  text: string
  type?: 'primary' | 'secondary' | 'tertiary'
}

export default function MButton({ text, type = 'primary' }: MButtonProps) {
  const classes = `${styles.MButton} ${styles['MButton--' + type]}`
  return <button className={classes}>{text}</button>
}
