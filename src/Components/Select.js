import React from 'react';

const Select = ({format, changingFormat}) => {

    const onChange = (e) => {
        let parasNum = e.target.value;
        changingFormat(parasNum);
    };

    return (
        <div className='select'>
            <select
                className="form-control"
                onChange={onChange}
            >
                <option value="html">Yes</option>
                <option value="text">No</option>
            </select>
        </div>
    );
};

export default Select;