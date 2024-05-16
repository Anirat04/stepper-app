import React from 'react';
import HeadingOne from '../../../components/Shared/CommonHeadings/HeadingOne/HeadingOne';
import BottomPurpleButton from '../../../components/Shared/Buttons/BottomPurpleButton/BottomPurpleButton';
const HelpAndSupport = () => {
    return (
        <div className='MainDiv'>
            <HeadingOne hText={'Help & Support'} linkTo={'/'} ></HeadingOne>
            <div className='h-full grid gap-3 mt-7 px-5'>
                {/* Payment/Refund */}
                <div className="collapse collapse-arrow bg-white shadow-lg">
                    <input className='min-h-[54px]' type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[18px] font-medium">
                        Payment/Refund
                    </div>
                    <div className="collapse-content">
                        <p className='pb-3'>Sorry! we are not able to recommend a solution. Please get in touch using the contact us option bellow.</p>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white">Contact Us</button>
                    </div>
                </div>
                {/* Offers, Discounts & Coupons */}
                <div className="collapse collapse-arrow bg-white shadow-lg">
                    <input className='min-h-[54px]' type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[18px] font-medium">
                        Offers, Discounts & Coupons
                    </div>
                    <div className="collapse-content">
                        <p className='pb-3'>Sorry! we are not able to recommend a solution. Please get in touch using the contact us option bellow.</p>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white">Contact Us</button>
                    </div>
                </div>

                {/* Manage your account */}
                <div className="collapse collapse-arrow bg-white shadow-lg">
                    <input className='min-h-[54px]' type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[18px] font-medium">
                        Manage your account
                    </div>
                    <div className="collapse-content">
                        <p className='pb-3'>Sorry! we are not able to recommend a solution. Please get in touch using the contact us option bellow.</p>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white">Contact Us</button>
                    </div>
                </div>
                {/* Others */}
                <div className="collapse collapse-arrow bg-white shadow-lg">
                    <input className='min-h-[54px]' type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[18px] font-medium">
                        Others
                    </div>
                    <div className="collapse-content">
                        <p className='pb-3'>Sorry! we are not able to recommend a solution. Please get in touch using the contact us option bellow.</p>
                        <BottomPurpleButton btnText={"Contact Us"}></BottomPurpleButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpAndSupport;