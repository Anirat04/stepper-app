import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { PiEyeLight, PiEyeSlashThin } from "react-icons/pi";
import { Link } from "react-router-dom";


const PasswordManager = () => {
    const [openEye, setOpenEye] = useState(false)
    const [openEyeConfirm, setOpenEyeConfirm] = useState(false)

    // Handle the form password hide/show events
    const handleOpenEye = () => {
        setOpenEye(!openEye)
    }
    const handleOpenEyeConfirm = () => {
        setOpenEyeConfirm(!openEyeConfirm)
    }


    return (
        <div className="px-5 min-h-svh pb-20">
            <div className="mt-9">
                <div className="text-center h-fit relative">
                    <p className="text-[18px] font-medium">Password Manager</p>
                    <Link to={'/profile/settings'}>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 border p-2 rounded-full">
                            <BsArrowLeft className="text-black" />
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <form>
                    <div className='my-8'>
                        {/* Current Password */}
                        <div className="relative group ">
                            <input
                                type={`${openEye === false ? 'password' : 'text'}`}
                                placeholder="Current Password"
                                className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#0165FC] text-black`}
                            />
                            <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                <CiLock className={`text-[22px] group-focus-within:text-[#0165FC] `} />
                            </span>
                            <span className='absolute right-[24px] top-1/2 -translate-y-1/2' onClick={handleOpenEye}>
                                {
                                    openEye ? <>
                                        <PiEyeLight className='text-[24px]'></PiEyeLight>
                                    </>
                                        :
                                        <>
                                            <PiEyeSlashThin className='text-[24px]'></PiEyeSlashThin>
                                        </>
                                }
                            </span>
                        </div>
                        <div className="mb-5 mt-1 text-[14px] text-right font-medium text-[#0165FC]">
                            <Link>
                                <h3 className="underline">Forgot Password?</h3>
                            </Link>
                        </div>
                        {/* New Password */}
                        <div className="relative group mb-5">
                            <input
                                type={`${openEye === false ? 'password' : 'text'}`}
                                placeholder="New Password"
                                className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#0165FC] text-black`}
                            />
                            <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                <CiLock className={`text-[22px] group-focus-within:text-[#0165FC] `} />

                            </span>
                            <span className='absolute right-[24px] top-1/2 -translate-y-1/2' onClick={handleOpenEye}>
                                {
                                    openEye ? <>
                                        <PiEyeLight className='text-[24px]'></PiEyeLight>
                                    </>
                                        :
                                        <>
                                            <PiEyeSlashThin className='text-[24px]'></PiEyeSlashThin>
                                        </>
                                }
                            </span>
                        </div>
                        {/* Confirm Password */}
                        <div className="relative group">
                            <input
                                type={`${openEyeConfirm === false ? 'password' : 'text'}`}
                                placeholder="Confirm Password"
                                className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#0165FC] text-black`}
                            />
                            <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                <CiLock className={`text-[22px] group-focus-within:text-[#0165FC]`} />

                            </span>
                            <span className='absolute right-[24px] top-1/2 -translate-y-1/2' onClick={handleOpenEyeConfirm}>
                                {
                                    openEyeConfirm ? <>
                                        <PiEyeLight className='text-[24px]'></PiEyeLight>
                                    </>
                                        :
                                        <>
                                            <PiEyeSlashThin className='text-[24px]'></PiEyeSlashThin>
                                        </>
                                }
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <button className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white mt-20 mb-8">
                Change Password
            </button>
        </div>
    );
};

export default PasswordManager;