import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => (
    <div style={{background: color, height: "200px", width: "200px"}}>
        
    </div>
);

Display.propTypes = {
    color: PropTypes.string.isRequired,
}

export default Display;