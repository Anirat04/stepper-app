
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import popularDoc1 from "../../../assets/images/popularDoctor-1.png"
import { FreeMode } from 'swiper/modules';

const PopularDoctors = () => {
    return (
        <div className='font-rubik pl-5'>
            <div className="mb-3">
                <h3 className='text-[18px] font-medium'>Popular Doctors</h3>
            </div>

            <div>
                <div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={80}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                <div>
                                    <img className='max-h-[180px] w-full rounded-t-[12px]' src={popularDoc1} alt="" />
                                </div>
                                <div className='bg-white py-[5px] rounded-b-[12px]'>
                                    <div className='text-center'>
                                        <h2 className='text-[18px] font-medium'>Dr. Fillerup Grab</h2>
                                        <p className='text-[#677294CC] font-light'>Medicine Specialist</p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                <div>
                                    <img className='max-h-[180px] w-full rounded-t-[12px]' src={popularDoc1} alt="" />
                                </div>
                                <div className='bg-white py-[5px] rounded-b-[12px]'>
                                    <div className='text-center'>
                                        <h2 className='text-[18px] font-medium'>Dr. Fillerup Grab</h2>
                                        <p className='text-[#677294CC] font-light'>Medicine Specialist</p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                <div>
                                    <img className='max-h-[180px] w-full rounded-t-[12px]' src={popularDoc1} alt="" />
                                </div>
                                <div className='bg-white py-[5px] rounded-b-[12px]'>
                                    <div className='text-center'>
                                        <h2 className='text-[18px] font-medium'>Dr. Fillerup Grab</h2>
                                        <p className='text-[#677294CC] font-light'>Medicine Specialist</p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                <div>
                                    <img className='max-h-[180px] w-full rounded-t-[12px]' src={popularDoc1} alt="" />
                                </div>
                                <div className='bg-white py-[5px] rounded-b-[12px]'>
                                    <div className='text-center'>
                                        <h2 className='text-[18px] font-medium'>Dr. Fillerup Grab</h2>
                                        <p className='text-[#677294CC] font-light'>Medicine Specialist</p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                <div>
                                    <img className='max-h-[180px] w-full rounded-t-[12px]' src={popularDoc1} alt="" />
                                </div>
                                <div className='bg-white py-[5px] rounded-b-[12px]'>
                                    <div className='text-center'>
                                        <h2 className='text-[18px] font-medium'>Dr. Fillerup Grab</h2>
                                        <p className='text-[#677294CC] font-light'>Medicine Specialist</p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                <div>
                                    <img className='max-h-[180px] w-full rounded-t-[12px]' src={popularDoc1} alt="" />
                                </div>
                                <div className='bg-white py-[5px] rounded-b-[12px]'>
                                    <div className='text-center'>
                                        <h2 className='text-[18px] font-medium'>Dr. Fillerup Grab</h2>
                                        <p className='text-[#677294CC] font-light'>Medicine Specialist</p>
                                        <div className="rating rating-xs">
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PopularDoctors;