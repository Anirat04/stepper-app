import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { DateResponsive } from './dateresponsive';
import { useState } from 'react';

const SelectDate = ({ DateArray, onDateSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const handleDateClick = (date, index) => {
        if (onDateSelect) {
            onDateSelect(date)
            setSelectedIndex(index)
        }
    };

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
                            <div
                                onClick={() => handleDateClick(item, index)}
                                className={`${selectedIndex === index ? 'bg-[#7563F7] text-white' : 'bg-[#F3F3F3]'} flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white cursor-pointer`}
                            >
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