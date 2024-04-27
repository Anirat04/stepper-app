import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiLock } from "react-icons/ci";
import { PiEyeLight } from 'react-icons/pi';
import { PiEyeSlashThin } from "react-icons/pi";
import newPassImage from '../../assets/images/NewPass-Image.png'


const ResetPass = () => {
    const [openEye, setOpenEye] = useState(false)
    const [openEyeConfirm, setOpenEyeConfirm] = useState(false)
    const [hasTextNewPass, setHasTextNewPass] = useState(false);
    const [hasTextConfirmPass, setHasTextConfirmPass] = useState(false);


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
            <div className='px-5 pt-[40px]'>
                <div className='text-center'>
                    <h2 className='text-black text-[26px] font-bold mb-2' >Welcome Back!</h2>
                    <p className='text-[14px]'>Use Credentials to access your account</p>
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

                        <div className="my-[75px]">
                            <img src={newPassImage} alt="" />
                        </div>

                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                            <input
                                className='w-full h-full'
                                type="submit"
                                value={'Continue'}
                            />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;