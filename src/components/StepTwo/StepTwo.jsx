import { Link } from "react-router-dom";

// TODO: Fix the bottom padding/margin
const StepTwo = () => {
    return (
        <div className="bg-[#f8f7ff] h-full">
            <div className="">
                <img className="w-full" src="https://i.ibb.co/GP0mrLh/uiux-design-Figma-1-removebg-preview.png" alt="" />
            </div>
            <div className="w-full pb-[44px] bg-white rounded-t-[30px]">
                <div className="text-center pt-[30px] px-5">
                    <h1 className="font-bold text-[22px] mb-4 text-black">Schedule appointments with expert doctors</h1>
                    <div className="">
                        <p className="text-gray-400 text-[14px]">Find experienced specialist doctors<br /> with expert ratings and reviews <br /> and book your appoinments assale-free</p>
                    </div>
                </div>
                <div className="flex justify-center my-7">
                    <div className="flex gap-[5px]">
                        <div className="bg-gray-300 w-[4px] min-h-[4px] rounded-full"></div>
                        <div className="bg-[#7563f7] w-[30px] min-h-[4px] rounded-full"></div>
                        <div className="bg-gray-300 w-[4px] min-h-[4px] rounded-full"></div>
                    </div>
                </div>
                <div className="px-5">
                    <Link to='/step3'>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white">Next</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StepTwo;