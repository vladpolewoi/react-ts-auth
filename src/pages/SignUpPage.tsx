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
          <p className="mr-2 font-light text-gray-500 dark:text-d-paragraph">
            Already have an account?
          </p>
          <a className="text-link hover:underline dark:text-d-link" href="#s">
            Log In
          </a>
        </div>
        <div className="mb-6 mt-8 flex items-center justify-center">
          <div className={styles.line}></div>
          <p className="mx-2 text-gray-500 dark:text-d-paragraph">or</p>
          <div className={styles.line}></div>
        </div>
        <MButton text="Sign up with google" type="secondary" icon={FcGoogle} />
        <p className="mt-6 text-sm font-light text-gray-500 dark:text-d-paragraph">
          By signing up to create an account I accept Company&apos;s{' '}
          <a className="text-sm text-link hover:underline dark:text-d-link" href="#s">
            Terms of Use and Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
