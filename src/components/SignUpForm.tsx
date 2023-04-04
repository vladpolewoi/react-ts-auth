import { useState } from 'react'
import MInput from '@/components/MInput/MInput'
import MButton from '@/components/MButton/MButton'
import { BsEye } from 'react-icons/bs'

export default function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const eyeIcon = <BsEye className="fill-gray-500" />

  const onSend = () => {
    console.log('SEND', name, email, password)
  }

  return (
    <>
      <MInput
        className="mt-10"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e?.target.value)}
      />
      <MInput
        className="my-4"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e?.target.value)}
      />
      <MInput
        className="mb-8"
        placeholder="Password"
        type="password"
        icon={eyeIcon}
        value={password}
        onChange={(e) => setPassword(e?.target.value)}
      />
      <MButton text="Sign Up" onClick={onSend} />
    </>
  )
}
