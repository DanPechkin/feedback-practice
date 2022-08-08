import React from 'react';
import propTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor:bgColor,
        color: textColor,
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>Feedback UI {text}</h2>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: "Passing new props from default",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: propTypes.string,
}

export default Header;