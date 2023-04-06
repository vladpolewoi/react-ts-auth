import { useState } from 'react'
import MInput from '@/components/MInput/MInput'
import MButton from '@/components/MButton/MButton'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import useForm from '@/hooks/useForm'
import validation from './validation'

export default function SignUpForm() {
  const defaultValues = {
    name: 'User76',
    // email: 'test@',
  }
  const { values, errors, isValid, onFormChange } = useForm({ validation, defaultValues })
  const [showPassword, setShowPassword] = useState(false)

  const onSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('SEND', values)
  }

  return (
    <form>
      <MInput
        className="mt-10"
        name="name"
        value={values.name || ''}
        placeholder="Name"
        autofocus
        validationMessage={errors.name?.message}
        onChange={onFormChange}
      />
      <MInput
        className="my-6"
        type="email"
        name="email"
        value={values.email || ''}
        placeholder="Email"
        required
        validationMessage={errors.email?.message}
        onChange={onFormChange}
      />
      <MInput
        className="mb-8"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={values.password || ''}
        placeholder="Password"
        required
        icon={showPassword ? BsEye : BsEyeSlash}
        onChange={onFormChange}
        validationMessage={errors.password?.message}
        validationGuide={errors.password?.rules}
        onIconClick={() => setShowPassword(!showPassword)}
      />
      <MButton text="Sign Up" onClick={onSend} disabled={!isValid} />
    </form>
  )
}
