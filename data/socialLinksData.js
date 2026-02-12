import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri';

export const socialLinksData = [
    {
        id: 'instagram',
        platform: 'Instagram',
        icon: <RiInstagramFill />,
        path: 'https://www.instagram.com/r__dynamic/',
    },
    {
        id: 'linkedin',
        platform: 'LinkedIn',
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/rk0718/',
    },
    {
        id: 'twitter',
        platform: 'Twitter/X',
        icon: <RiTwitterXLine />,
        path: 'https://x.com/rkuma07',
    },
    {
        id: 'github',
        platform: 'GitHub',
        icon: <FaGithub />,
        path: 'https://github.com/rkuma18',
    },
    {
        id: 'medium',
        platform: 'Medium',
        icon: <SiMedium />,
        path: 'https://medium.com/@rkuma18',
    },
];
