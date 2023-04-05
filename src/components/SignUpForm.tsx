import { useState } from 'react'
import MInput from '@/components/MInput/MInput'
import MButton from '@/components/MButton/MButton'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

export default function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [validation, setValidation] = useState<{
    [key: string]: string
  }>({})
  const hasValidationErrors = Object.keys(validation).length > 0

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => e.target.value)
    validateEmail()
  }

  const onSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('SEND', name, email, password, validation)
  }

  const validateEmail = () => {
    if (!email) {
      setValidation((v) => ({ ...v, email: 'Email is required' }))
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setValidation((v) => ({ ...v, email: 'Invalid email address' }))
    } else {
      clearValidation('email')
    }
  }

  const validatePassword = () => {
    let message = ''
    if (!password) {
      message = 'Password is required'
    } else if (password.length < 6) {
      message = 'Password must be at least 6 characters'
    } else if (password.length > 20) {
      message = 'Password must be less than 20 characters'
    } else if (!/[a-z]/.test(password)) {
      message = 'Password must contain at least one lowercase letter'
    } else if (!/[A-Z]/.test(password)) {
      message = 'Password must contain at least one uppercase letter'
    } else if (!/[0-9]/.test(password)) {
      message = 'Password must contain at least one number'
    } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      message = 'Password must contain at least one special character'
    } else if (/\s/.test(password)) {
      message = 'Password must not contain any spaces'
    }

    if (message) {
      setValidation((v) => ({ ...v, password: message }))
    }
  }

  const clearValidation = (field: string) => {
    setValidation((v) => {
      const newValidation = { ...v }
      delete newValidation[field]
      return newValidation
    })
  }

  return (
    <form>
      <MInput
        className="mt-10"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e?.target.value)}
      />
      <MInput
        className="my-6"
        placeholder="Email"
        type="email"
        value={email}
        required
        validationMessage={validation.email}
        // onFocus={() => clearValidation('email')}
        onBlur={validateEmail}
        // validation={(v: string) => {
        //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v))
        //     return 'Invalid email address'
        //   return false
        // }}
        onChange={onEmailChange}
      />
      <MInput
        className="mb-8"
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        required
        icon={showPassword ? BsEye : BsEyeSlash}
        value={password}
        validationMessage={validation.password}
        onFocus={() => clearValidation('password')}
        onBlur={validatePassword}
        onChange={(e) => setPassword(e?.target.value)}
        onIconClick={() => setShowPassword(!showPassword)}
      />
      <MButton text="Sign Up" onClick={onSend} disabled={hasValidationErrors} />
    </form>
  )
}
