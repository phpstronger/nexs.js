import PropTypes from 'prop-types';

import Header from "./Header";

const HeaderContainer = () => {
    const onHandler = () => {
        alert("Click");

    }
    return (
        <Header
            onHandler={onHandler}
        />
    )
}

HeaderContainer.propTypes = {}

export default HeaderContainer;