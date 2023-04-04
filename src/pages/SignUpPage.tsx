import MButton from '@/components/MButton/MButton'
import MInput from '@/components/MInput/MInput'
import styles from './SignUpPage.module.scss'

export default function SignUpPage() {
  return (
    <div className="container m-auto flex h-screen items-center">
      <div className={styles.card}>
        <h1 className={styles.card__title}>Sign Up</h1>
        <p className={styles.card__subtitle}>Let&apos;s get started with your 30 days free trial</p>
        <MInput className="mt-10" placeholder="Name" />
        <MInput className="my-4" placeholder="Email" type="email" />
        <MInput className="mb-8" placeholder="Password" type="password" />
        <MButton text="Sign Up" />
        <div className="mt-2 flex justify-center">
          <p className="mr-2 text-gray-500">Already have an account?</p>
          <a className="font-semibold text-primary hover:underline" href="#s">
            Log In
          </a>
        </div>
        <div className="mb-6 mt-8 flex items-center justify-center">
          <div className={styles.line}></div>
          <p className="mx-2 text-gray-500">or</p>
          <div className={styles.line}></div>
        </div>
        <MButton text="Sign up with google" />
        <p className="mt-6 text-sm text-gray-500">
          By signing up to create an account I accept Company&apos;s{' '}
          <a className="text-sm text-primary hover:underline" href="#s">
            Terms of Use and Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
