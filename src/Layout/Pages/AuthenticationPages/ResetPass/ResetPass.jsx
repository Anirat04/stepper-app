import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiLock } from "react-icons/ci";
import { PiEyeLight } from 'react-icons/pi';
import { PiEyeSlashThin } from "react-icons/pi";
import newPassImage from '../../../../assets/images/NewPass-Image.png'
import congoImage from '../../../../assets/images/CongoModal-Image.png'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';


const Modal = () => {
    return (
        <div className='h-full w-full absolute top-0 left-0'>
            <div className='h-full w-full relative'>
                <div className='h-[410px] w-[330px] rounded-2xl bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col px-4 justify-center shadow-lg z-10'>
                    <div className='flex justify-center'>
                        <img src={congoImage} alt="" />
                    </div>
                    <div className='mt-5'>
                        <Link to={'/'}>
                            <button
                                className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal rounded-xl"                                            >
                                Back to home
                            </button>
                        </Link>
                    </div>
                </div>
                <div
                    className=' h-full'
                    style={{
                        // background: 'rgba(255, 255, 255, 0)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        WebkitBackdropFilter: 'blur(12.7px)',
                        backdropFilter: 'blur(12.7px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                >
                </div>
            </div>
        </div>
    )
}

const ResetPass = () => {
    const [openEye, setOpenEye] = useState(false)
    const [openEyeConfirm, setOpenEyeConfirm] = useState(false)
    const [hasTextNewPass, setHasTextNewPass] = useState(false);
    const [hasTextConfirmPass, setHasTextConfirmPass] = useState(false);
    // Modal useStates
    const [showModal, setShowModal] = useState(false)


    const handleNewPassOnChange = (event) => {
        setHasTextNewPass(event.target.value !== '');
    };
    const handleConfirmPassOnChange = (event) => {
        setHasTextConfirmPass(event.target.value !== '');
    };


    // Form operations
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    // Handle the form password hide/show events
    const handleOpenEye = () => {
        setOpenEye(!openEye)
    }
    const handleOpenEyeConfirm = () => {
        setOpenEyeConfirm(!openEyeConfirm)
    }

    return (
        <div className='bg-white h-full'>
            <div className='px-5 pt-[80px]'>
                <div>
                    <Link to={"/login/forgot-pass/verificationCode"}>
                        <IoIosArrowBack className='text-black text-[24px] absolute top-[40px]' />
                    </Link>
                </div>

                <div className='text-center'>
                    <h2 className='text-black text-[26px] font-bold mb-2' >Enter New Password</h2>
                    <p className='text-[14px]'>Please enter your new password</p>
                </div>

                {/* Login Form */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-8'>
                            {/* New Password */}
                            <div className="relative group mb-5">
                                <input
                                    type={`${openEye === false ? 'password' : 'text'}`}
                                    placeholder="New Password"
                                    {...register("new-password")}
                                    onChange={handleNewPassOnChange}
                                    className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#7563f7] ${hasTextNewPass ? ' border-[#7563f7]' : ''} text-black`}
                                />
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                    <CiLock className={`text-[22px] group-focus-within:text-[#7563f7] ${hasTextNewPass ? 'text-[#7563f7]' : ''}`} />

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
                                    {...register("confirm-password")}
                                    onChange={handleConfirmPassOnChange}
                                    className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#7563f7] ${hasTextConfirmPass ? ' border-[#7563f7]' : ''} text-black`}
                                />
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                    <CiLock className={`text-[22px] group-focus-within:text-[#7563f7] ${hasTextConfirmPass ? 'text-[#7563f7]' : ''}`} />

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

                        <div className="my-[57px]">
                            <img src={newPassImage} alt="" />
                        </div>

                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                            <input
                                className='w-full h-full'
                                type="submit"
                                value={'Continue'}
                                onClick={() => setShowModal(true)}
                            />
                        </button>
                        {showModal &&
                            <Modal></Modal>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;