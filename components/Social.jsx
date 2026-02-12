import Link from "next/link";
import { socialLinksData } from "@/data/socialLinksData";
import PropTypes from 'prop-types';

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socialLinksData.map((item) => {
                return <Link
                    href={item.path}
                    key={item.id}
                    className={iconStyles}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.platform} profile`}
                >
                    <span>{item.icon}</span>
                </Link>
            })}
        </div>
    )
}

Social.propTypes = {
    containerStyles: PropTypes.string,
    iconStyles: PropTypes.string,
};

Social.defaultProps = {
    containerStyles: '',
    iconStyles: '',
};

export default Social