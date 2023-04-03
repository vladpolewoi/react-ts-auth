import "./MButton.scss"

type MButtonProps = {
	text: string
	type?: "primary" | "secondary" | "tertiary"
}

export default function MButton({ text, type = "primary" }: MButtonProps) {
	console.log(text, type)

	return <button className={`MButton MButton--${type}`}>{text}</button>
}
