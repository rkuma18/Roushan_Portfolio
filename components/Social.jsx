import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, SiMedium } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/r__dynamic/"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/rk0718/"
    },
    {
        icon: <FaTwitter />,
        path: "https://x.com/rkuma07"
    },
    {
        icon: <FaGithub />,
        path: "https://github.com/rkuma18"
    },
    {
        icon: <SiMedium />,
        path: "https://medium.com/@rkuma18"
    }
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link href={item.path} key={index} className={iconStyles}>
                    <span>{item.icon}</span>
                </Link>
            })}
        </div>
    )
}

export default Social