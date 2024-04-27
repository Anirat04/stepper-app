import { Link } from "react-router-dom";


const StepThree = () => {
    return (
        <div className="h-full">
            <div className="">
                <img className="w-full" src="https://i.ibb.co/PgZq8qj/uiux-design-Figma-2-removebg-preview.png" alt="" />
            </div>
            <div className="w-full pb-[46px] bg-white rounded-t-[30px] px-5">
                <div className="text-center pt-[30px]">
                    <h1 className="font-bold text-[22px] mb-4 text-black">Find your best caretaker <br /> for your family memebers</h1>
                    <div className="">
                        <p className="text-gray-400 text-[14px]">Find experienced specialist doctors<br /> with expert ratings and reviews <br /> and book your appoinments assale-free</p>
                    </div>
                </div>
                <div className="flex justify-center my-7">
                    <div className="flex gap-[5px]">
                        <div className="bg-gray-300 w-[4px] min-h-[4px] rounded-full"></div>
                        <div className="bg-gray-300 w-[4px] min-h-[4px] rounded-full"></div>
                        <div className="bg-[#7563f7] w-[30px] min-h-[4px] rounded-full"></div>
                    </div>
                </div>
                <div className="">
                    <Link to='/login'>
                        <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StepThree;