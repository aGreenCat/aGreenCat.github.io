import { SocialIcon } from "react-social-icons"

export default function ContactPage() {
	return (
		<div className="flex flex-col items-center gap-4">
			<div>
				<SocialIcon target="_blank" url="https://www.linkedin.com/in/teddlee/" bgColor="transparent" fgColor="white" />
				<SocialIcon target="_blank" url="https://github.com/aGreenCat" bgColor="transparent" fgColor="white" />
				<SocialIcon target="_blank" url="https://www.instagram.com/greencatted/" bgColor="transparent" fgColor="white" />
				<SocialIcon target="_blank" url="mailto:tedd0328@gmail.com" bgColor="transparent" fgColor="white" />
			</div>
			<a href="Tedd_Lee_Resume_General.pdf" target="blank" className="text-green-gc">resume</a>
		</div>
	)
}
