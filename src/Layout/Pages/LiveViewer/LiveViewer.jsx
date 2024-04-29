
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/live-avatar.png'
import { useForm } from 'react-hook-form';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const LiveViewer = () => {

    const [openEmoji, setOpenEmoji] = useState(false)

    const handleEmojiPickerOpen = () => {
        setOpenEmoji(!openEmoji)
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (
        <>
            <div className='h-full relative'>
                {/* Div for video stream content */}
                <div className='h-full bg-gray-300'>

                </div>
                <div className='absolute top-0 left-0 h-full w-full pt-9 px-5 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div>
                            <Link to={"/"}>
                                <div className='px-[12px] py-2 bg-white w-fit rounded-[10px]'>
                                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.185815 6.81049L5.90303 12.5258C6.1539 12.776 6.56035 12.776 6.81185 12.5258C7.06272 12.2756 7.06272 11.8691 6.81185 11.6189L1.54811 6.35706L6.81121 1.09522C7.06208 0.844989 7.06208 0.438543 6.81121 0.187676C6.56035 -0.0625585 6.15327 -0.0625585 5.9024 0.187676L0.185181 5.90294C-0.0618326 6.15059 -0.0618326 6.56342 0.185815 6.81049Z" fill="#677294" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <img className='w-9 h-9 rounded-full' src={avatar} alt="" />
                        </div>
                    </div>
                    {/* Comment Section */}
                    <div className='h-[385px] max-h-[385px] bg-green-200'>
                        <div></div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='relative'>
                                    <textarea
                                        {...register("Comment")}
                                        placeholder='Add a Comment......'
                                        className='textareaScroll w-full max-h-[54px] outline-0 rounded-full pl-[60px] pr-12 py-[17px]'
                                    />
                                    <div className='bg-[#0EBE7E] w-11 h-11 rounded-full flex justify-center items-center absolute bottom-[12px] left-[5px]'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C3.57861 0 0 3.578 0 8C0 9.4032 0.365967 10.7737 1.06091 11.9824L0.0301514 15.1833C-0.0417481 15.4065 0.017334 15.6511 0.183105 15.8169C0.34729 15.9811 0.591309 16.0424 0.81665 15.9698L4.01758 14.9391C5.22632 15.634 6.5968 16 8 16C12.4214 16 16 12.422 16 8C16 3.57861 12.422 0 8 0ZM8 14.75C6.73254 14.75 5.49707 14.3964 4.42712 13.7273C4.27319 13.6311 4.08203 13.6051 3.90417 13.6624L1.59351 14.4065L2.33765 12.0958C2.39404 11.9205 2.37024 11.7291 2.27258 11.5729C1.60364 10.5029 1.25 9.26746 1.25 8C1.25 4.27808 4.27808 1.25 8 1.25C11.7219 1.25 14.75 4.27808 14.75 8C14.75 11.7219 11.7219 14.75 8 14.75ZM8.78125 8C8.78125 8.4314 8.43152 8.78125 8 8.78125C7.56848 8.78125 7.21875 8.4314 7.21875 8C7.21875 7.56848 7.56848 7.21875 8 7.21875C8.43152 7.21875 8.78125 7.56848 8.78125 8ZM11.9062 8C11.9062 8.4314 11.5565 8.78125 11.125 8.78125C10.6935 8.78125 10.3438 8.4314 10.3438 8C10.3438 7.56848 10.6935 7.21875 11.125 7.21875C11.5565 7.21875 11.9062 7.56848 11.9062 8ZM5.65625 8C5.65625 8.4314 5.30652 8.78125 4.875 8.78125C4.4436 8.78125 4.09375 8.4314 4.09375 8C4.09375 7.56848 4.4436 7.21875 4.875 7.21875C5.30652 7.21875 5.65625 7.56848 5.65625 8Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div
                                        className='absolute right-5 bottom-6'
                                        onClick={handleEmojiPickerOpen}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18C6.59602 18 4.33593 17.0638 2.63602 15.364C0.936176 13.6641 0 11.404 0 9C0 6.59602 0.936176 4.33593 2.63602 2.63602C4.33593 0.936176 6.59602 0 9 0C11.404 0 13.6641 0.936176 15.364 2.63602C17.0638 4.33593 18 6.59602 18 9C18 11.404 17.0638 13.6641 15.364 15.364C13.6641 17.0638 11.404 18 9 18ZM9 1.40625C4.81279 1.40625 1.40625 4.81279 1.40625 9C1.40625 13.1872 4.81279 16.5938 9 16.5938C13.1872 16.5938 16.5938 13.1872 16.5938 9C16.5938 4.81279 13.1872 1.40625 9 1.40625ZM12.2954 10.5535C11.9678 10.345 11.5332 10.4415 11.3248 10.7692C11.3161 10.7828 10.4411 12.1311 8.96484 12.1311C7.48863 12.1311 6.61359 10.7828 6.60491 10.7692C6.39643 10.4416 5.96187 10.345 5.63425 10.5535C5.30662 10.762 5.21005 11.1966 5.41853 11.5241C5.47084 11.6063 6.72536 13.5373 8.96484 13.5373C11.2043 13.5373 12.4588 11.6064 12.5112 11.5241C12.7196 11.1965 12.6231 10.762 12.2954 10.5535ZM5.90625 5.80078C6.39165 5.80078 6.78516 6.19428 6.78516 6.67969C6.78516 7.16509 6.39165 7.55859 5.90625 7.55859C5.42085 7.55859 5.02734 7.16509 5.02734 6.67969C5.02734 6.19428 5.42085 5.80078 5.90625 5.80078ZM11.1797 6.67969C11.1797 7.16509 11.5732 7.55859 12.0586 7.55859C12.544 7.55859 12.9375 7.16509 12.9375 6.67969C12.9375 6.19428 12.544 5.80078 12.0586 5.80078C11.5732 5.80078 11.1797 6.19428 11.1797 6.67969Z" fill="#677294" fillOpacity="0.8" />
                                        </svg>
                                    </div>
                                    <div className='absolute -bottom-[320px] left-0'>
                                        <EmojiPicker open={openEmoji} width={335} height={320} className='' />
                                    </div>
                                </div>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LiveViewer;