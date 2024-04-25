import { Link } from "react-router-dom";


const StepOne = () => {
    return (
        <div className="h-full">
            <div className="">
                <img className="w-full" src="https://i.ibb.co/P5RQ9MP/uiux-design-Figma-removebg-preview-1.png" alt="" />
            </div>
            <div className="w-full pb-8 bg-white rounded-t-[30px] px-5">
                <div className="text-center pt-[30px]">
                    <h1 className="font-bold text-[26px] mb-4 text-black">Find the best doctors in your vicinity</h1>
                    <div className="">
                        <p className="text-gray-400 text-[14px]">With the help of out inteligent algorithms <br /> now locate the best doctors around <br /> your vicinity at total ease</p>
                    </div>
                </div>
                <div className="flex justify-center my-7">
                    <div className="flex gap-[5px]">
                        <div className="bg-[#7563f7] w-[30px] min-h-[4px] rounded-full"></div>
                        <div className="bg-gray-300 w-[4px] min-h-[4px] rounded-full"></div>
                        <div className="bg-gray-300 w-[4px] min-h-[4px] rounded-full"></div>
                    </div>
                </div>
                <div className="">
                    <Link to='/step2'>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white">Next</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StepOne;