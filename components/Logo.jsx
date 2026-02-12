import Link from "next/link";
import PropTypes from 'prop-types';

const Logo = ({ light = false }) => {
    // determine colors based on the light prop
    const textColor = light ? "text-white" : "text-primary";
    const iconBgColor = light ? "bg-white" : "bg-accent";
    const iconTextColor = light ? "text-accent" : "text-white";

    return (
        <Link href="/" className="flex items-center gap-3 group">
            {/* Geometric Icon with "R" */}
            <div className={`${iconBgColor} ${iconTextColor} w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl transition-transform duration-300 group-hover:scale-110`}>
                R
            </div>
            {/* Text */}
            <span className={`${textColor} font-secondary text-2xl font-semibold tracking-wide`}>
                Roushan
            </span>
        </Link>
    );
};

Logo.propTypes = {
    light: PropTypes.bool,
};

Logo.defaultProps = {
    light: false,
};

export default Logo;