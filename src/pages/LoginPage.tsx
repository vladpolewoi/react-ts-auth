import { MButton, MCard, MText, MLink } from '@/components'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const { loginWithGithub } = useAuth()

  async function signInWithGithub() {
    console.log('Sign in with Github')
    await loginWithGithub()
  }

  return (
    <div className="container m-auto flex h-screen items-center">
      <MCard className="mx-auto text-center">
        <MText type="heading">Log In</MText>
        <MText type="paragraph" className="mb-6 mt-2">
          Let&apos;s get started with your 30 days free trial
        </MText>
        <MButton
          text="Sign in with Google"
          type="secondary"
          icon={FcGoogle}
          className="mb-2"
        />
        <MButton
          text="Sign in with Github"
          type="secondary"
          icon={BsGithub}
          onClick={signInWithGithub}
        />
        <div className="mt-2 flex justify-center">
          <MText type="paragraph">Don&apos;t have an account?</MText>
          <MLink to="/sign-up">Sign Up</MLink>
        </div>
        <MText type="paragraph" className="mx-2 mt-8 text-xs">
          By signing up to create an account I accept Company&apos;s{' '}
          <MLink to="/legal" className="whitespace-nowrap">
            Terms of Use and Privacy Policy
          </MLink>
          .
        </MText>
      </MCard>
    </div>
  )
}
