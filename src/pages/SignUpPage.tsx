import MButton from '@/components/MButton/MButton'
import SignUpForm from '@/components/SignUpForm/SignUpForm'
import styles from './SignUpPage.module.scss'

import { FcGoogle } from 'react-icons/fc'

export default function SignUpPage() {
  return (
    <div className="container m-auto flex h-screen items-center">
      <div className={styles.card}>
        <h1 className={styles.card__title}>Sign Up</h1>
        <p className={styles.card__subtitle}>
          Let&apos;s get started with your 30 days free trial
        </p>
        <SignUpForm />
        <div className="mt-2 flex justify-center">
          <p className="mr-2 font-light text-gray-500 ">Already have an account?</p>
          <a className="text-link text-info hover:underline" href="#s">
            Log In
          </a>
        </div>
        <div className="mb-6 mt-8 flex items-center justify-center">
          <div className={styles.line}></div>
          <p className="mx-2 text-gray-500">or</p>
          <div className={styles.line}></div>
        </div>
        <MButton text="Sign up with google" type="secondary" icon={FcGoogle} />
        <p className="mt-6 text-sm font-light text-gray-500">
          By signing up to create an account I accept Company&apos;s{' '}
          <a className="text-link text-sm text-info hover:underline" href="#s">
            Terms of Use and Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
