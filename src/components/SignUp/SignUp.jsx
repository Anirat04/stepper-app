import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiLock, CiUser } from 'react-icons/ci';
import { IoLogoApple, IoMailOutline } from 'react-icons/io5';
import { PiEyeLight, PiEyeSlashThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/weCare-logo.png'
import GoogleLogo from '../../assets/images/Google-logo.png'
import { IoIosArrowBack } from "react-icons/io";

const SignUp = () => {
    const [openEye, setOpenEye] = useState(false)
    const [hasTextUser, setHasTextUser] = useState(false);
    const [hasTextEmail, setHasTextEmail] = useState(false);
    const [hasTextPass, setHasTextPass] = useState(false);

    const handleUserOnchange = (event) => {
        setHasTextUser(event.target.value !== '');
    };
    const hnadleEmailOnChange = (event) => {
        setHasTextEmail(event.target.value !== '');
    };
    const handlePassOnChange = (event) => {
        setHasTextPass(event.target.value !== '');
    };

    // Form operations
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://api-doctors24.duckdns.org/create-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to create account');
            }

            const responseData = await response.json();
            console.log(responseData);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Handle the form password hide/show events
    const handleOpenEye = () => {
        setOpenEye(!openEye)
    }



    return (
        <div className='bg-white h-full'>
            <div className='px-5 pt-[40px]'>
                <div>
                    <Link to={"/login"}>
                        <IoIosArrowBack className='text-black text-[24px] absolute' />
                    </Link>
                </div>
                {/* Logo and header text */}
                <div className='flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='text-black text-[26px] font-bold mb-2' >Create an Account</h2>
                    <p className='text-[14px]'>Please fill this details to create an account</p>
                </div>

                {/* Sign Up Form */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-8'>
                            {/* Name */}
                            <div className='relative mb-5 group'>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    {...register("name")}
                                    onChange={handleUserOnchange}
                                    className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#7563f7] ${hasTextUser ? 'border-[#7563f7]' : ''} text-black`}
                                />
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                    <CiUser
                                        className={`text-[22px] group-focus-within:text-[#7563f7] ${hasTextUser ? 'text-[#7563f7]' : ''}`}
                                    />
                                </span>
                            </div>
                            {/* Email */}
                            <div className='relative mb-5 group'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email")}
                                    onChange={hnadleEmailOnChange}
                                    className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#7563f7] ${hasTextEmail ? 'border-[#7563f7]' : ''} text-black`}
                                />
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                    <IoMailOutline className={`text-[22px] group-focus-within:text-[#7563f7] ${hasTextEmail ? 'text-[#7563f7]' : ''}`} />
                                </span>
                            </div>

                            {/* Password */}
                            <div className="relative group">
                                <input
                                    type={`${openEye === false ? 'password' : 'text'}`}
                                    placeholder="Enter Password"
                                    {...register("password")}
                                    onChange={handlePassOnChange}
                                    className={`bg-white border w-full py-3 rounded-lg pl-12 outline-0 focus:border-[#7563f7] ${hasTextPass ? ' border-[#7563f7]' : ''} text-black`}
                                />
                                <span className='absolute left-4 top-1/2 -translate-y-1/2'>
                                    <CiLock className={`text-[22px] group-focus-within:text-[#7563f7] ${hasTextPass ? 'text-[#7563f7]' : ''}`} />

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
                        </div>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                            <input className='w-full h-full' type="submit" value={'Sign Up'} />
                        </button>
                    </form>
                </div>
                {/* Divider */}
                <div className="divider text-[14px]">Or</div>
                {/* Social Logins */}
                <div className='border rounded-lg relative py-3 mb-3'>
                    <div className='absolute left-6 top-1/2 -translate-y-1/2'>
                        <span><img className='h-5 w-5' src={GoogleLogo} alt="" /></span>
                    </div>
                    <div>
                        <p className='text-black font-medium text-center'>Sign in with Google</p>
                    </div>
                </div>
                <div className='border rounded-lg relative py-3'>
                    <div className='absolute left-6 top-1/2 -translate-y-1/2'>
                        <span><IoLogoApple className='text-black h-6 w-6'></IoLogoApple></span>
                    </div>
                    <div>
                        <p className='text-black font-medium text-center'>Sign in with Apple</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='mt-[42px]'>
                        <p className='text-black text-[14px] font-medium'>Already have an account? <Link to={'/login'} className='text-[#7563f7]'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;