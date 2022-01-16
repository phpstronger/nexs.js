import PropTypes from "prop-types";

import sprites from "@Public/icons/svg/spriteSvg.svg";

const Icon = ({ svgId, dopClassNames = [] }) => {
    let classNames = [...['icon-wr'], ...dopClassNames];

    return (
        <i className={classNames.join(" ")}>
            <svg className="svg-icon">
                <use href={`${sprites}#${svgId}`} />
            </svg>
        </i>
    )
}

Icon.propTypes = {
    svg: PropTypes.string,
    classNames: PropTypes.array,
};

export default Icon;