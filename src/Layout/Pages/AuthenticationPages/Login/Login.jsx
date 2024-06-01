import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiLock } from "react-icons/ci";
import { PiEyeLight } from 'react-icons/pi';
import { PiEyeSlashThin } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/weCare-logo.png'
import GoogleLogo from '../../../../assets/images/Google-logo.png'
import { IoLogoApple, IoMailOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [openEye, setOpenEye] = useState(false)
    const [hasTextEmail, setHasTextEmail] = useState(false);
    const [hasTextPass, setHasTextPass] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(loading);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/login') {
            // window.localStorage.clear()
            localStorage.removeItem('userData');
            localStorage.removeItem('sessionData');
        }
    }, [location.pathname])

    const handleEmailOnChange = (event) => {
        setHasTextEmail(event.target.value !== '');
    };
    const handlePassOnChange = (event) => {
        setHasTextPass(event.target.value !== '');
    };


    // Form operations
    const {
        register,
        handleSubmit,
        // formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        try {
            // If the email or password is empty
            if (data.email === '' || data.password === '') {
                toast.error(`Please enter email and password`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                });
                setLoading(false)
                return
            }

            const response = await fetch('https://api-doctors24.duckdns.org/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json()
            console.log(responseData);
            const userData = {
                email: data.email,
                sessionid: responseData.sessionid,
            }
            // Save userData to local storage
            if (responseData.status === 200) {
                console.log('userData saved to local storage');
                localStorage.setItem('userData', JSON.stringify(userData));
                // localStorage.setItem('userData', JSON.stringify(userData));
                // navigate('/')
                if (responseData.status !== 200) {
                    localStorage.setItem('userData', JSON.stringify({
                        email: null,
                        sessionid: null,
                    }));
                    localStorage.setItem('sessionData', JSON.stringify(null));
                }
                setLoading(false)
                // navigate('/')
            }

            // If email or password is wrong
            if (responseData.status !== 200) {
                toast.error(`${responseData.status_message}`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            }

            // console.log(responseData);
            // Fetch session data
            const sessionResponse = await fetch("https://api-doctors24.duckdns.org/accounts/dashboard", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${responseData.sessionid}`,
                },
                body: JSON.stringify({ email: data.email }),
            });

            const sessionResponseData = await sessionResponse.json();
            if (sessionResponseData.status !== 200) {
                throw new Error('Failed to fetch session data');
            }
            // Save session data to local storage
            localStorage.setItem('sessionData', JSON.stringify(sessionResponseData.data));

            if (response.status === 200) {
                // console.log('userData saved to local storage');
                // localStorage.setItem('userData', JSON.stringify(userData));
                navigate('/')
            }

        } catch (error) {
            console.log('Error:', error);
        }
    }

    // Handle the form password hide/show events
    const handleOpenEye = () => {
        setOpenEye(!openEye)
    }



    return (
        <div className='bg-white h-full'>
            <div className="absolute">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    containerId="containerA"
                // transition:Bounce
                />
                <ToastContainer />
            </div>
            <div className='px-5 pt-[40px]'>
                {/* Logo and header text */}
                <div className='flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='text-black text-[26px] font-bold mb-2' >Welcome Back!</h2>
                    <p className='text-[14px]'>Use Credentials to access your account</p>
                </div>

                {/* Login Form */}
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='my-8'>
                            {/* Email */}
                            <div className='relative mb-5 group'>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email")}
                                    onChange={handleEmailOnChange}
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
                            <div className='text-right  mt-2'>
                                <Link to={'forgot-pass'} className='text-[#7563f7]'>Forgot Password?</Link>
                            </div>
                        </div>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                            {
                                loading === true
                                    ?
                                    <span className="loading loading-infinity loading-lg"></span>
                                    :
                                    <input className='w-full h-full' onClick={() => setLoading(true)} type="submit" value={`Log In`} />
                            }
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
                    <div className='mt-[80px]'>
                        <p className='text-black text-[14px] font-medium'>Don&apos;t have an account? <Link to={'/signUp'} className='text-[#7563f7]'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;