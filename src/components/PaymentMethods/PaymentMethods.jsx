import React from 'react';
import HeadingOne from '../Shared/CommonHeadings/HeadingOne/HeadingOne';
import BottomPurpleButton from '../Shared/Buttons/BottomPurpleButton/BottomPurpleButton';

const PaymentMethods = () => {
    return (
        <div className='MainDiv'>
            <HeadingOne hText={'Payment Method'} linkTo={'/'}></HeadingOne>
            <div className='px-5 pt-7'>
                <div className='pb-3'>
                    <p className='font-bold'>Payment Option</p>
                </div>
                <div className='grid gap-4'>
                    {/* Credit/Debit Card */}
                    <div className='shadow-lg p-5 rounded-lg flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-[#f5f5f5] p-2 h-10 w-10 rounded-lg'>
                                <img className='h-full w-full' src="https://i.ibb.co/QCRTW4S/Master-Card-removebg-preview.png" alt="" />
                            </div>
                            <div>
                                <p className='font-medium'>Credit/Debit Card</p>
                            </div>
                        </div>
                        <div className='custom-review-radio'>
                            <input name='payment' type="radio" />
                        </div>
                    </div>

                    {/* Paypal */}
                    <div className='shadow-lg p-5 rounded-lg flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-[#f5f5f5] p-2 h-10 w-10 rounded-lg'>
                                <img className='h-full w-full' src="https://i.ibb.co/mG8Bpph/paypal-removebg-preview.png" alt="" />
                            </div>
                            <div>
                                <p className='font-medium'>Paypal</p>
                            </div>
                        </div>
                        <div className='custom-review-radio'>
                            <input name='payment' type="radio" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full px-5  bottom-10'>
                <BottomPurpleButton btnText={'Confirm & Pay'}></BottomPurpleButton>
            </div>
        </div>
    );
};

export default PaymentMethods;