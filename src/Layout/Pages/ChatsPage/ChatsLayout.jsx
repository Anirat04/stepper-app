import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AvatarResponsiveBreakpoints } from '../../../components/ChatComponents/ChatAvatarSwiper/ChatAvatarSwiper';

const ChatsLayout = () => {


    return (
        <div className="">
            <div className="pt-9 h-svh bg-[#0165FC]">
                <div className='px-5'>
                    <div className="text-center h-fit relative">
                        <p className="text-[18px] font-medium text-white">Chat</p>
                        <Link to={'/'}>
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 border p-2 rounded-full bg-white">
                                <BsArrowLeft className="text-[#0165FC]" />
                            </div>
                        </Link>
                    </div>
                    {/* Search bar */}
                    <div className="w-full mt-7">
                        <form
                            // onSubmit={handleSubmit(onSubmit)} 
                            className="w-full relative z-[99999]"
                        >
                            <input
                                type="search"
                                placeholder="Search..."
                                // {...register("SearchText")}
                                className="bg-white py-2 pl-[45px] pr-5 text-[15px] text-[#677294] w-full rounded-md outline-0 border border-[#ffffff] focus-within:border-gray-200"
                                style={{ boxShadow: "0 0 20px 0 #00000014" }}
                            />
                            <span className="absolute top-1/2 -translate-y-1/2 left-5">
                                <svg width="18" height="18" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.7248 0C2.56823 0 0 2.56826 0 5.72487C0 8.88165 2.56823 11.4497 5.7248 11.4497C8.88154 11.4497 11.4496 8.88165 11.4496 5.72487C11.4496 2.56826 8.88154 0 5.7248 0ZM5.7248 10.3929C3.15093 10.3929 1.05689 8.29879 1.05689 5.72489C1.05689 3.15099 3.15093 1.0569 5.7248 1.0569C8.29866 1.0569 10.3927 3.15097 10.3927 5.72487C10.3927 8.29876 8.29866 10.3929 5.7248 10.3929Z" fill="#0165FC" />
                                    <path d="M12.845 12.0979L9.81527 9.06817C9.60882 8.86172 9.27449 8.86172 9.06804 9.06817C8.8616 9.27444 8.8616 9.60913 9.06804 9.81541L12.0978 12.8452C12.201 12.9484 12.3361 13 12.4714 13C12.6065 13 12.7418 12.9484 12.845 12.8452C13.0514 12.6389 13.0514 12.3042 12.845 12.0979Z" fill="#0165FC" />
                                </svg>
                            </span>
                        </form>
                    </div>
                </div>
                {/* Chats div */}
                <div className='bg-white w-full min-h-[80svh] rounded-3xl mt-7'>
                    <div>
                        <div className='py-6 pl-5'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={90}
                                breakpoints={AvatarResponsiveBreakpoints}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to={'/chats'}>
                                        <div className='h-[54px] w-[54px]'>
                                            <img className='h-full w-full rounded-full' src={'https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380'} alt="" />
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='px-5 grid gap-3'>
                            <div className='h-[60px] max-h-[60px] border rounded-md p-2 flex items-center gap-3 relative shadow-sm'>
                                <div className='h-10 w-10 rounded-full'>
                                    <img className='h-full w-full rounded-full' src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-semibold'>Carla Schoen</h3>
                                    <p className='text-[12px] text-[#868686]'>Perfect, will check it</p>
                                </div>
                                <div className='absolute top-2 right-2'>
                                    <p className='text-[14px] text-[#868686]'>09:34 PM</p>
                                </div>
                            </div>
                            <div className='h-[60px] max-h-[60px] border rounded-md p-2 flex items-center gap-3 relative shadow-sm'>
                                <div className='h-10 w-10 rounded-full'>
                                    <img className='h-full w-full rounded-full' src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-semibold'>Carla Schoen</h3>
                                    <p className='text-[12px] text-[#868686]'>Perfect, will check it</p>
                                </div>
                                <div className='absolute top-2 right-2'>
                                    <p className='text-[14px] text-[#868686]'>09:34 PM</p>
                                </div>
                            </div>
                            <div className='h-[60px] max-h-[60px] border rounded-md p-2 flex items-center gap-3 relative shadow-sm'>
                                <div className='h-10 w-10 rounded-full'>
                                    <img className='h-full w-full rounded-full' src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-semibold'>Carla Schoen</h3>
                                    <p className='text-[12px] text-[#868686]'>Perfect, will check it</p>
                                </div>
                                <div className='absolute top-2 right-2'>
                                    <p className='text-[14px] text-[#868686]'>09:34 PM</p>
                                </div>
                            </div>
                            <div className='h-[60px] max-h-[60px] border rounded-md p-2 flex items-center gap-3 relative shadow-sm'>
                                <div className='h-10 w-10 rounded-full'>
                                    <img className='h-full w-full rounded-full' src="https://img.freepik.com/premium-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?w=1380" alt="" />
                                </div>
                                <div>
                                    <h3 className='text-[14px] font-semibold'>Carla Schoen</h3>
                                    <p className='text-[12px] text-[#868686]'>Perfect, will check it</p>
                                </div>
                                <div className='absolute top-2 right-2'>
                                    <p className='text-[14px] text-[#868686]'>09:34 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatsLayout;