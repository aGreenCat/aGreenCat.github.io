import Link from "next/link";

export const Button = ({text, link} : {text : string, link : string}) => {
    return (
        <Link href={link}>
            <button className="bg-pink-600 hover:bg-pink-800 text-white font-light lg:font-medium py-2 px-4 rounded-md w-min h-min">
                {text}
            </button>
        </Link>
    )
}