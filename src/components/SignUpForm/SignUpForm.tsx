import { useState } from 'react'
import supabase from '@/supabase/client'
// components
import MInput from '@/components/MInput/MInput'
import MButton from '@/components/MButton/MButton'
// icons
import { BsEye, BsEyeSlash, BsFillCapslockFill } from 'react-icons/bs'
// hooks
import useForm from '@/hooks/useForm'
import useCapsLockState from '@/hooks/useCapsLockState'

import validation from './validation'
export default function SignUpForm() {
  const defaultValues = {
    name: 'User76',
    password: 'Example1@',
    email: 'vlad.polewoi1@gmail.com',
  }
  const { values, errors, isValid, onFormChange } = useForm({ validation, defaultValues })
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const isCapsLockOn = useCapsLockState()
  const [showPassword, setShowPassword] = useState(false)

  async function onSend(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('SEND', values)
    const session = await supabase.auth.getSession()
    console.log(session)
    // const { data, error } = await supabase.auth.signUp({
    //   email: values.email,
    //   password: values.password,
    // })
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: 'test@gmail.com',
    //   password: '123123',
    // })
    // const { data, error } = await supabase.from('posts').select()
    // console.log('REGISTER: ', data, error)
  }

  const CapsLockIcon = isPasswordFocused && isCapsLockOn && (
    <BsFillCapslockFill className="absolute -left-7 top-4 z-10 mr-2 h-5 w-5 fill-primary" />
  )

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
        className="my-7"
        type="email"
        name="email"
        value={values.email || ''}
        placeholder="Email"
        required
        validationMessage={errors.email?.message}
        onChange={onFormChange}
      />
      <div className="relative">
        {CapsLockIcon}
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
          onFocusedChanged={(v) => setIsPasswordFocused(v)}
        />
      </div>

      <MButton text="Sign Up" onClick={onSend} disabled={!isValid} />
    </form>
  )
}
