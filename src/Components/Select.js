import React from 'react';

const Select = () => {
    return (
        <div className='select'>
            <select
                className="form-control"
            >
                <option value="html">Yes</option>
                <option value="text">No</option>
            </select>
        </div>
    );
};

export default Select;