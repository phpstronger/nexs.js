import PropTypes from "prop-types";

import styleHead from "@Styles/containers/header.module.scss";
import Icon from "@Components/iconsSprite";

const Header = () => {
    return (
        <header className={styleHead.header}>
            Header
            <Icon svgId='youtube' />
        </header>
    )
}

Header.propTypes = {}

export default Header;