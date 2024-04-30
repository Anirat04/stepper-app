

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import docImage1 from '../../../assets/images/featureDoc-1.png'
import docImage2 from '../../../assets/images/featureDoc-2.png'
import docImage3 from '../../../assets/images/featureDoc-3.png'

const FeatureDoctor = () => {
    // Responsive Breakpoints for swiper slider
    const swiperBreakPoints = {
        // when window width is >= 375px
        375: {
            slidesPerView: 4,
            spaceBetween: 70
        },

        // when window width is >= 425px
        425: {
            slidesPerView: 4.5,
            spaceBetween: 70
        },

        // when window width is >= 480px
        480: {
            slidesPerView: 5,
            spaceBetween: 60
        },

        // when window width is >= 525px
        525: {
            slidesPerView: 5,
            spaceBetween: 30
        },

        // when window width is >= 575px
        575: {
            slidesPerView: 5,
            spaceBetween: 0
        },

        // when window width is >= 600px
        600: {
            slidesPerView: 6,
            spaceBetween: 50
        },
    };



    return (
        <div className='font-rubik pl-5'>
            <div className="mb-3 flex items-center justify-between pr-4">
                <h3 className='text-[18px] font-medium'>Feature Doctor</h3>
                <span className='text-[#677294] text-[12px]'>See all &gt;</span>
            </div>

            <div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        breakpoints={swiperBreakPoints}
                        className="mySwiper py-12"
                    >
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage1} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage2} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage3} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage1} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage2} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage3} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage1} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage2} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-24 h-[130px] bg-white px-[10px] py-2 rounded-md'>
                                {/* Love and rating */}
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.56003 2.38908L4.99999 3.20398L5.43997 2.38909C5.58634 2.11799 5.82667 1.76251 6.17355 1.49062L5.86885 1.10189L6.17355 1.49062C6.52659 1.21389 6.91613 1.0791 7.34375 1.0791C8.53841 1.0791 9.5 2.06498 9.5 3.49915C9.5 4.24669 9.21062 4.89555 8.63103 5.60436C8.03876 6.32868 7.18166 7.07112 6.09199 8.01227L6.09198 8.01227L6.0916 8.0126C5.76102 8.29813 5.38873 8.61969 5.00001 8.96266C4.61164 8.62001 4.23964 8.29871 3.90946 8.01351L3.90826 8.01247L3.90825 8.01247C2.81845 7.07122 1.9613 6.32873 1.369 5.60438C0.789382 4.89554 0.5 4.24669 0.5 3.49915C0.5 2.06498 1.46159 1.0791 2.65625 1.0791C3.08386 1.0791 3.47341 1.21389 3.82645 1.49062L4.10293 1.13789L3.82645 1.49062C4.17333 1.76251 4.41366 2.11798 4.56003 2.38908Z" stroke="#777EA5" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className='mb-[2px]'>
                                            <svg width="10" height="10" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.98707 3.41753C8.95607 3.31746 8.87357 3.24452 8.77426 3.22941L5.98422 2.80439L4.73644 0.154069C4.69204 0.0597224 4.60037 0 4.50001 0C4.39964 0 4.30799 0.0597224 4.26357 0.154069L3.01574 2.80439L0.225753 3.22941C0.126454 3.24452 0.0439252 3.31746 0.0129175 3.41752C-0.0181077 3.51759 0.00776717 3.62744 0.0796438 3.70087L2.09845 5.76386L1.62194 8.67688C1.60496 8.78059 1.64564 8.88537 1.72683 8.94722C1.77276 8.9822 1.82717 9 1.88183 9C1.92381 9 1.96593 8.98952 2.00449 8.96825L4.5 7.59289L6.99539 8.96823C7.08425 9.01719 7.19188 9.00905 7.27307 8.94721C7.35427 8.88536 7.39496 8.78055 7.378 8.67684L6.90133 5.76386L8.92037 3.70085C8.99222 3.62744 9.01812 3.51759 8.98707 3.41753Z" fill="#F6D060" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='text-[11px] font-semibold'>3.7</p>
                                        </div>
                                    </div>
                                </div>
                                {/* avatar */}
                                <div className='flex items-center justify-center my-[8px]'>
                                    <img className='w-[54px] h-[54px] rounded-full' src={docImage3} alt="" />
                                </div>
                                {/* Doctor info */}
                                <div>
                                    <div className='text-center'>
                                        <p className='text-[12px]'>Dr. Crick</p>
                                        <p className='text-[#0ebe7e] text-[10px]'>$ <span className='text-[#677294CC]'>25.00/ hours</span></p>
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

export default FeatureDoctor;