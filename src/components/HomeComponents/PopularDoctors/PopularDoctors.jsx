
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import popularDoc1 from "../../../assets/images/popularDoctor-1.png"
import { FreeMode } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const PopularDoctors = () => {
    const { sessionData } = useContext(AuthContext)
    const popularDoctors = sessionData?.PopularDoctors

    // Responsive Breakpoints for swiper slider
    const swiperBreakPoints = {
        // when window width is >= 375px
        375: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        // when window width is >= 425px
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.5,
            spaceBetween: 60
        },
        // when window width is >= 525px
        525: {
            slidesPerView: 3,
            spaceBetween: 100
        },
        // when window width is >= 575px
        575: {
            slidesPerView: 3.5,
            spaceBetween: 140
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 3,
            spaceBetween: 60
        },
    }


    return (
        <div className='font-rubik pl-5'>
            <div className="mb-3 flex items-center justify-between pr-4">
                <h3 className='text-[18px] font-medium'>Popular Doctors</h3>
                <span className='text-[#677294] text-[12px]'>See all &gt;</span>
            </div>

            <div>
                <div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={112}
                        breakpoints={swiperBreakPoints}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {
                            popularDoctors?.map(item => (
                                <div key={item?.doctor_id}>
                                    <SwiperSlide>
                                        <div className='h-[264px] w-[190px] bg-gray-300 rounded-[12px]'>
                                            <div className='min-h-[180px]'>
                                                <img className='max-h-[180px] w-full rounded-t-[12px]' src={item?.photo_url} alt="Doctors Image" />
                                            </div>
                                            <div className='bg-white py-[5px] rounded-b-[12px]'>
                                                <div className='text-center'>
                                                    <h2 className='text-[18px] font-medium'>{item?.name}</h2>
                                                    <p className='text-[#677294CC] font-light'>{item?.department}</p>
                                                    <div className="rating rating-xs">
                                                        {/* <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" /> */}
                                                        <div>
                                                            <Rating
                                                                style={{ maxWidth: 70 }}
                                                                value={item?.rating}
                                                                readOnly={true}
                                                            ></Rating>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PopularDoctors;