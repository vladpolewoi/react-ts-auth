import MButton from '@/components/MButton/MButton'
import MInput from '@/components/MInput/MInput'
import './SignUpPage.scss'

export default function SignUpPage() {
  return (
    <div className="card">
      <h1 className="card__title">Sign Up</h1>
      <p className="card__subtitle">Let&apos;s get started with your 30 days free trial</p>
      <MInput placeholder="Name" />
      <MInput placeholder="Email" className="my-4" />
      <MInput placeholder="Password" type="password" />
      <MButton text="Sign Up" />
      <div>
        <p>Already have an account?</p>
        <a href="#s">Log In</a>
      </div>
      <div>
        <div className="line"></div>
        <p>or</p>
        <div className="line"></div>
      </div>
      <button>Sign up with google</button>
      <p>
        By signing up to create an account I accept Company&apos;s <a href="#s">Terms of Use and Privacy Policy</a>.
      </p>
    </div>
  )
}
