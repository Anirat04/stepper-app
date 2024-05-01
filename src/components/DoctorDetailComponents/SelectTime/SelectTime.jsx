import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SelectTime = () => {

    // Responsive Breakpoints for swiper slider
    const swiperBreakPoints = {
        // when window width is >= 375px
        375: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        // when window width is >= 425px
        425: {
            slidesPerView: 4.1,
            spaceBetween: 0
        },
        // when window width is >= 500px
        480: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        500: {
            slidesPerView: 5,
            spaceBetween: 0
        },
        // when window width is >= 575px
        575: {
            slidesPerView: 5.5,
            spaceBetween: 0
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 6,
            spaceBetween: 0
        },
    }

    return (
        <div>
            < Swiper
                slidesPerView={3}
                spaceBetween={0}
                breakpoints={swiperBreakPoints}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex items-center justify-center h-[39px] w-[91px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <p>08:00 AM</p>
                    </div>
                </SwiperSlide>
            </ Swiper>
        </div>
    );
};

export default SelectTime;