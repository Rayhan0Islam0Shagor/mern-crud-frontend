import React from 'react';
import spinner from '../../image/spinner.gif';

const Spinner = () => {
    return (
        <div style={{ height: "500px", width: "950px", overflow: "hidden" }}>
            <img height="500px" width="900px" className="w-100" src={spinner} alt="spinner" />
        </div>
    );
};

export default Spinner;