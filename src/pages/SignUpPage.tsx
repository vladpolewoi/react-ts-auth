import MButton from "@/components/MButton"
import "./SignUpPage.scss"

export default function SignUpPage() {
	return (
		<div className="card">
			<h1 className="card__title">Sign Up</h1>
			<p className="card__subtitle">
				Let's get started with your 30 days free trial
			</p>
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<MButton text="Sign Up" />
			<div>
				<p>Already have an account?</p>
				<a href="#">Log In</a>
			</div>
			<div>
				<div className="line"></div>
				<p>or</p>
				<div className="line"></div>
			</div>
			<button>Sign up with google</button>
			<p>
				By signing up to create an account I accept Company's{" "}
				<a href="#">Terms of Use and Privacy Policy</a>.
			</p>
		</div>
	)
}
