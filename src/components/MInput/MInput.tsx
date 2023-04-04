import { isValidElement } from 'react'
import styles from './MInput.module.scss'

type MInputProps = {
  value?: string
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  className?: string
  icon?: React.ReactElement
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MInput({ type = 'text', placeholder, className, icon, value, onChange }: MInputProps) {
  return (
    <div className={`${styles.MInput} ${className}`}>
      <input type={type} className={styles.MInput__field} placeholder=" " value={value} onChange={onChange} />
      {icon && <span className={styles.MInput__icon}>{isValidElement(icon) && icon}</span>}
      {placeholder && <label className={styles.MInput__label}>{placeholder}</label>}
    </div>
  )
}
