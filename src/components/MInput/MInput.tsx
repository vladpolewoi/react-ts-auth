import styles from './MInput.module.scss'

type MInputProps = {
  type?: 'text' | 'password'
  placeholder?: string
  className?: string
}

export default function MInput({ type = 'text', placeholder, className }: MInputProps) {
  return (
    <div className={`${styles.MInput} ${className}`}>
      <input type={type} className={styles.MInput__field} required />
      {placeholder && <label className={styles.MInput__label}>{placeholder}</label>}
    </div>
  )
}
