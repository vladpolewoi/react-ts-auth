import { useState, useEffect, useRef } from 'react'
import styles from './MInput.module.scss'
import { IconType } from 'react-icons'
import MTooltip from '@/components/MTooltip/MTooltip'
import ValidationGuide from './ValidationGuide'

type MInputProps = {
  name: string
  type?: 'text' | 'password' | 'email'
  value?: string
  placeholder?: string
  autofocus?: boolean
  className?: string
  required?: boolean
  icon?: IconType | (() => JSX.Element)
  validationMessage?: string
  validationGuide?: {
    title: string
    isValid: boolean
  }[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onIconClick?: (e: React.MouseEvent<HTMLSpanElement>) => void
  onFocusedChanged?: (isFocused: boolean) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function MInput({
  name,
  type = 'text',
  value,
  placeholder,
  autofocus,
  className,
  required,
  icon: Icon,
  validationMessage,
  validationGuide,
  onChange,
  onBlur,
  onFocus,
  onIconClick,
  onFocusedChanged,
  onKeyUp,
  onKeyDown,
}: MInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [showValidationGuide, setShowValidationGuide] = useState(false)

  // Effects
  useEffect(() => {
    if (isFocused && validationGuide && !showValidationGuide) {
      setShowValidationGuide(true)
    } else if (!isFocused && showValidationGuide) {
      setShowValidationGuide(false)
    }
  }, [isFocused, validationGuide])

  useEffect(() => {
    if (autofocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    onFocusedChanged?.(isFocused)
  }, [isFocused])

  // Events
  const onBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(e)
    setIsFocused(false)
  }

  const onFocusHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(e)
    setIsFocused(true)
  }

  const onIconClickLocal = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    onIconClick?.(e)
  }

  // JSX elements
  const InputIcon = Icon && (
    <button className={styles.MInput__icon} onClick={onIconClickLocal} tabIndex={-1}>
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

  const tooltip = validationGuide && <ValidationGuide rules={validationGuide} />

  return (
    <div className={`${styles.MInput} ${className}`}>
      <MTooltip content={tooltip} show={showValidationGuide}>
        <input
          type={type}
          className={`${styles.MInput__field} ${
            validationMessage ? styles['MInput__field--invalid'] : ''
          }`}
          placeholder=" "
          ref={inputRef}
          value={value}
          required={required}
          name={name}
          onChange={onChange}
          onBlur={onBlurHandle}
          onFocus={onFocusHandle}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        />
      </MTooltip>
      {InputIcon}
      {InputPlaceholder}
      {validationMessage && (
        <span className={styles.MInput__validation}>{validationMessage}</span>
      )}
    </div>
  )
}
