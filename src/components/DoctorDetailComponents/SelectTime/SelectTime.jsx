import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { TimeResponsive } from './timeresponsive';
import { useState } from 'react';


const SelectTime = ({ TimeArray, onTimeSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const handleTimeClick = (time, index) => {
        if (onTimeSelect) {
            onTimeSelect(time)
            setSelectedIndex(index)
        }
    };

    return (
        <div>
            < Swiper
                slidesPerView={3}
                spaceBetween={0}
                breakpoints={TimeResponsive}
                className="mySwiper"
            >
                {
                    TimeArray?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                onClick={() => handleTimeClick(item, index)}
                                className={`${selectedIndex === index ? 'bg-[#7563F7] text-white' : 'bg-[#F3F3F3]'}  flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white cursor-pointer`}
                            >
                                <p>{item}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </ Swiper>
        </div>
    );
};

export default SelectTime;