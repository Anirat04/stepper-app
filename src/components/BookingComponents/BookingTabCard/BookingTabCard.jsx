
import { Link } from 'react-router-dom';
import avatarImg from '../../../assets/images/DoctorDetails/doctor-details-1.png'
import { useState } from 'react';

const BookingTabCard = ({ item }) => {
    const [isPopUp, setIsPopUp] = useState(false)
    const {
        booking_id,
        doctors_name,
        // doctorsid,
        order_time,
        rating,
        // status
    } = item || {}

    const handlePopUp = () => {
        setIsPopUp(!isPopUp)
    }
    return (
        <div>
            <div className='bg-white p-4 rounded-lg shadow-lg mb-3'>
                <div>
                    <h3 className='font-bold text-[14px]'>Order ID: {booking_id}</h3>
                    <p className='text-[11px] text-[#868686]'>Order Date: {order_time}</p>
                </div>
                <div className='flex gap-3 py-5'>
                    <div>
                        <img className='w-[60px] h-[60px] rounded-lg' src={avatarImg} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h3 className=''>{doctors_name}</h3>
                        </div>
                        <div className="flex items-center gap-1 w-fit bg-[#FEFCF5] p-1 rounded-[5px]">
                            <div>
                                <svg width="14" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.199951" width="18" height="18" fill="url(#pattern0_149_126)" />
                                    <defs>
                                        <pattern id="pattern0_149_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_149_126" transform="scale(0.0104167)" />
                                        </pattern>
                                        <image id="image0_149_126" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <p className="text-[12px]">{rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <button
                        className="h-10 bg-[#f3f3f3] border-none text-black font-normal text-[13px] rounded-lg w-full cursor-pointer"
                        onClick={handlePopUp}
                    >
                        Cancel
                    </button>
                    <button className="h-10 bg-[#7563f7] border-none text-white font-light text-[13px] rounded-lg">
                        View Details
                    </button>
                </div>
            </div>
            <div
                className={`fixed min-h-screen w-full bg-[#000000] bg-opacity-70 top-0 left-0 z-[99999] 
                ${isPopUp === false ? 'hidden' : 'flex'}
                `
                }
            >
            </div>
            <div className={`bg-white fixed w-full text-center rounded-t-[45px] py-7 px-5 left-1/2 -translate-x-1/2 ${isPopUp === true ? 'bottom-0' : '-bottom-full'} transition-all ease-linear duration-300 z-[999999]`}>
                <div className=''>
                    <h2 className='text-[24px] text-[#f75555] font-medium'>Cancel Apppointment</h2>
                </div>
                <div className="divider py-5 my-0 h-fit"></div>
                <div className='grid gap-5'>
                    <p>Are you sure you want to cancel your appointment?</p>
                    <p>Only 50% of the funds will be returned to your account.</p>
                </div>
                <div className="divider py-5 my-0 h-fit"></div>
                <div className='grid grid-cols-2 gap-4'>
                    <button
                        className='bg-[#e9f0ff] text-[#246bfd] text-[18px] font-medium rounded-full py-4'
                        onClick={handlePopUp}
                    >
                        Back
                    </button>
                    <Link to={`cancel-appointment/${booking_id}`}>
                        <button className='bg-[#246bfd] text-white text-[18px] font-medium rounded-full py-4 w-full'>Yes, Cancel</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default BookingTabCard;