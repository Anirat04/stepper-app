import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SelectDate = () => {

    // Responsive Breakpoints for swiper slider
    const swiperBreakPoints = {
        // when window width is >= 375px
        375: {
            slidesPerView: 5.5,
            spaceBetween: 75
        },
        // when window width is >= 425px
        425: {
            slidesPerView: 5.5,
            spaceBetween: 25
        },
        // when window width is >= 500px
        480: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 6,
            spaceBetween: 0
        },
        // when window width is >= 575px
        575: {
            slidesPerView: 6.5,
            spaceBetween: 0
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 7,
            spaceBetween: 0
        },
    }

    return (
        <div>
            < Swiper
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={swiperBreakPoints}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <span className="text-[20px] font-bold">19</span>
                        <span className="text-[14px]" >Sat</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <span className="text-[20px] font-bold">20</span>
                        <span className="text-[14px]" >Sun</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <span className="text-[20px] font-bold">21</span>
                        <span className="text-[14px]" >Mon</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <span className="text-[20px] font-bold">22</span>
                        <span className="text-[14px]" >Tue</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <span className="text-[20px] font-bold">23</span>
                        <span className="text-[14px]" >Thu</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#F3F3F3] flex flex-col justify-center items-center h-[70px] w-[70px] rounded-[10px] hover:bg-[#7563F7] hover:text-white">
                        <span className="text-[20px] font-bold">24</span>
                        <span className="text-[14px]" >Fri</span>
                    </div>
                </SwiperSlide>
            </ Swiper>
        </div>
    );
};

export default SelectDate;