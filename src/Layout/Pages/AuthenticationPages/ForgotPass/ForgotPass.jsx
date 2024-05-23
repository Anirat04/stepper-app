import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMailOutline } from "react-icons/io5";
import forgotPassImg from "../../../../assets/images/Forgot-Pass-image.png"
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ForgotPass = () => {
    const [hasTextEmail, setHasTextEmail] = useState(false);

    const handleEmailOnChange = (event) => {
        setHasTextEmail(event.target.value !== '');
    };

    // Form operations
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (
        <div className="px-5 bg-white h-full pt-[80px]">
            <div>
                <Link to={"/login"}>
                    <IoIosArrowBack className='text-black text-[24px] absolute top-[40px]' />
                </Link>
            </div>
            <div>
                <div className='text-center'>
                    <h2 className='text-black text-[26px] font-bold mb-2' >Forgot Password</h2>
                    <p className='text-[14px]'>Select which contact details should we <br /> use to reset your password.</p>
                </div>
            </div>
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
                    </div>
                    <div className="my-[80px]">
                        <img src={forgotPassImg} alt="" />
                    </div>

                    <Link to={"verificationCode"}>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                            <input className='w-full h-full' type="submit" value={'Continue'} />
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;