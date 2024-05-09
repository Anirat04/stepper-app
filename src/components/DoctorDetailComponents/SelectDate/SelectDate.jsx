import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { DateResponsive } from './dateresponsive';

const SelectDate = ({ DateArray }) => {
    return (
        <div>
            < Swiper
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={DateResponsive}
                className="mySwiper"
            >
                {
                    DateArray?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                                <span className="text-[20px] font-bold">{item?.date_number}</span>
                                <span className="text-[14px]" >{item?.day_name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </ Swiper>
        </div>
    );
};

export default SelectDate;