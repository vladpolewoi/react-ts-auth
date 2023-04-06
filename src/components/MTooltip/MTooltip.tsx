import styles from './MTooltip.module.scss'

type MTooltipProps = {
  children: React.ReactNode
  content: React.ReactNode
  show: boolean
}

export default function MTooltip({ children, content, show }: MTooltipProps) {
  return (
    <>
      {children}
      {show && <div className={styles.MTooltip}>{content}</div>}
    </>
  )
}
