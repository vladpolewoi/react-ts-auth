import { useState } from 'react'
import styles from './MInput.module.scss'
import { IconType } from 'react-icons'
type MInputProps = {
  type?: 'text' | 'password' | 'email'
  value?: string
  placeholder?: string
  className?: string
  required?: boolean
  icon?: IconType | (() => JSX.Element)
  validationMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onIconClick?: (e: React.MouseEvent<HTMLSpanElement>) => void
}

export default function MInput({
  type = 'text',
  value,
  placeholder,
  className,
  required,
  icon: Icon,
  validationMessage,
  onChange,
  onBlur,
  onFocus,
  onIconClick,
}: MInputProps) {
  // const [showValidation, setIsValid] = useState<boolean>(true)
  // const [validationMessage, setValidationMessage] = useState<string>('')
  // const validate = (v: string) => {
  //   if (required && v === '') {
  //     return `${placeholder} field is required`
  //   }

  //   const validationMessage = validation?.(v)

  //   return validationMessage || false
  // }

  // Events
  // const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  //   if (required || validation) {
  //     const message = validate(e.target.value)
  //     if (message) {
  //       setValidationMessage(message)
  //     }
  //   }
  // }

  // const onFocus = () => {
  //   setValidationMessage('')
  // }

  const onIconClickLocal = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    onIconClick?.(e)
  }

  // JSX elements
  const InputIcon = Icon && (
    <button className={styles.MInput__icon} onClick={onIconClickLocal}>
      <Icon className="fill-gray-500" />
    </button>
  )
  const InputPlaceholder = placeholder && (
    <label
      className={`${styles.MInput__label} ${
        required ? styles['MInput__label--required'] : ''
      }`}
    >
      {placeholder}
    </label>
  )

  return (
    <div className={`${styles.MInput} ${className}`}>
      <input
        type={type}
        className={`${styles.MInput__field} ${
          validationMessage ? styles['MInput__field--invalid'] : ''
        }`}
        placeholder=" "
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
      />
      {InputIcon}
      {InputPlaceholder}
      {validationMessage && (
        <span className={styles.MInput__validation}>{validationMessage}</span>
      )}
    </div>
  )
}
