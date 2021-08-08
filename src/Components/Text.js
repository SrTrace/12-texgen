import React from 'react';

const Text = ({paras, changingParas}) => {

    const onChange = (e) => {
        let parasNum = e.target.value;
        changingParas(parasNum);
    };

    return (
        <div>
            <input
                type="number"
                className="form-control"
                value={paras}
                onChange={onChange}
            />
        </div>
    );
};

export default Text;