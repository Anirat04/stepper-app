import { Link } from "react-router-dom";
import liveDoctorImage from '../../../assets/images/LiveViewer/DoctorInlive1.png'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import './ReviewRadio.css'
const DoctorReview = () => {
    return (
        <div className="min-h-svh pt-9 relative pb-8 px-5">
            <div className="absolute top-9 left-0 flex text-center w-full px-5">
                <div>
                    <Link to={'/vdo-con'}>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="25" height="25" fill="url(#pattern0_149_75)" />
                            <defs>
                                <pattern id="pattern0_149_75" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_149_75" transform="scale(0.0111111)" />
                                </pattern>
                                <image id="image0_149_75" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR4nO3cvUrEQBiF4W8t/IGZdGGmEGxSnRvVQmRbGy/CYvGOrARRwVKJWtho5c6Yk/eB7QQ/Xg5Zi2AEAAAAAAAAFmY6GlK5zKk85FRfci7XEacnva9yjLwbcn37/vmMjb1G/gid6tNf/ZaVm36M/BX6sfeF9pGH+ZPKVe8r1xB5N/9c70sXTIdDqre/Rc6p3EWcHfe+dMFE5P0jMpE9iMcFkS2IJRPZglgykS2IJRPZglgykS2IJRPZglgykS2IJRPZglgykS2IJRPZwsTLLS3kXC94g6iBIdd73iAitI+c6zmPjiYmvgzbEX9DE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWHY7xG6Il3T+Wey6bXnRmv9l5nNEbHpfuYLY5TUiDnpf6B871Zvel5nGrtv5cTEveY48jmPqfZWzDc9lAAAAAADC2TsHapabz52pEgAAAABJRU5ErkJggg==" />
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-bold text-[20px]">Write a Review</h1>
            </div>
            <div className="w-[132px] h-[132px] mx-auto mt-8 mb-6">
                <img className="w-full h-full rounded-lg" src={liveDoctorImage} alt="" />
            </div>
            <div className="text-center">
                <p className="text-black text-[18px]">How was your experience with</p>
                <h3 className="text-[18px] font-bold text-[#7563F7]">Dr. Alexa Johnson</h3>
                <div className="flex justify-center py-5">
                    <Rating
                        style={{ maxWidth: 170 }}
                        value={5}
                        readOnly={true}
                    ></Rating>
                </div>
            </div>
            <div>
                <form>
                    <div>
                        <div>
                            <h1 className="font-bold text-[18px]">Write your Review</h1>
                            <textarea name="" id="" className="border rounded-lg w-full h-[140px] outline-0 p-5 text-[#868686]" placeholder="Write your experience"></textarea>
                        </div>
                        <div className="pt-5">
                            <h1 className="font-bold text-[18px]">Whould you recommended Dr. Alexa Johnson to your friends?</h1>
                            <div className="custom-review-radio flex gap-3">
                                <div className="flex items-center font-medium">
                                    <input type="radio" name="review" />
                                    <label>Yes</label>
                                </div>
                                <div className="flex items-center font-medium">
                                    <input type="radio" name="review" />
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[100px]">
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorReview;