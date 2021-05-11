import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => (
    <div style={{background: color}}>
        Hello
    </div>
);

Display.propTypes = {
    color: PropTypes.string.isRequired,
}

export default Display;