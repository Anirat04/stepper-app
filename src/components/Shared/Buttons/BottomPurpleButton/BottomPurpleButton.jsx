import React from 'react';

const BottomPurpleButton = ({ btnText }) => {
    return (
        <div>
            <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white text-[16px] font-light">{btnText}</button>
        </div>
    );
};

export default BottomPurpleButton;