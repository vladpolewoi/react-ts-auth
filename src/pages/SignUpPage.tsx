import supabase from '@/supabase/client'
import { MText, MCard, MButton, MLink } from '@/components'
import SignUpForm from '@/components/SignUpForm/SignUpForm'
import styles from './SignUpPage.module.scss'

import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'

export default function SignUpPage() {
  async function signInWithGithub() {
    console.log('Sign in with Github')
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    console.log('HERE', data, error)
  }

  return (
    <div className="container m-auto flex h-screen items-center">
      <MCard className="mx-auto mt-12 text-center">
        <MText type="heading" className="mb-2">
          Sign Up
        </MText>
        <MText type="paragraph">
          Let&apos;s get started with your 30 days free trial
        </MText>
        <SignUpForm />
        <div className="mt-2 flex justify-center">
          <MText type="paragraph">Already have an account?</MText>
          <MLink to="/login">Log In</MLink>
        </div>
        <div className="my-4 flex items-center justify-center">
          <div className={styles.line}></div>
          <MText type="paragraph" className="mx-2">
            or
          </MText>
          <div className={styles.line}></div>
        </div>
        <MButton
          text="Sign up with Google"
          type="secondary"
          icon={FcGoogle}
          className="mb-2"
        />
        <MButton
          text="Sign up with Github"
          type="secondary"
          icon={BsGithub}
          onClick={signInWithGithub}
        />
        <MText type="paragraph" className="mx-2 mt-4 text-xs">
          By signing up to create an account I accept Company&apos;s{' '}
          <MLink to="/legal">Terms of Use and Privacy Policy</MLink>.
        </MText>
      </MCard>
    </div>
  )
}
