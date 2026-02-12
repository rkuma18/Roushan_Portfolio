"use client";
import { Link as ScrollLink } from 'react-scroll';
import { navigationData } from '@/data/navigationData';
import PropTypes from 'prop-types';

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
    return (
        <nav className={containerStyles} aria-label="Main navigation">
            <ul className={listStyles}>
                {navigationData.map((link) => {
                    return (
                        <li key={link.name}>
                            <ScrollLink
                                spy={spy}
                                activeClass="active"
                                to={link.name}
                                smooth
                                className={linkStyles}
                            >
                                {link.label}
                            </ScrollLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    containerStyles: PropTypes.string,
    listStyles: PropTypes.string,
    linkStyles: PropTypes.string,
    spy: PropTypes.bool,
};

Nav.defaultProps = {
    containerStyles: '',
    listStyles: '',
    linkStyles: '',
    spy: false,
};

export default Nav;