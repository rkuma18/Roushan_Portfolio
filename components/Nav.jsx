"use client";
import { Link as ScrollLink } from 'react-scroll';

const links = [
    {
        name: "home"
    },
    {
        name: "about"
    },
    {
        name: "journey"
    },
    {
        name: "work"
    },
    {
        name: "contact"
    },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
    return (
        <nav className={containerStyles}>
            <ul className={listStyles}>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <ScrollLink 
                                spy={spy} 
                                activeClass="active" 
                                to={link.name} 
                                smooth 
                                className={linkStyles}
                            >
                                {link.name}
                            </ScrollLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;