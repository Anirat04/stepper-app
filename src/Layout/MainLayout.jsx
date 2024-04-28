import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className='bg-[#f5f5f5] min-h-screen pt-5'>
            <div className='md:max-w-[375px] max-h-[812px] h-[812px]  mx-auto bg-white relative shadow-lg'>
                {/* <div className="text-[12px] absolute top-12 text-purple-600 right-4 bg-gray-200 px-2 rounded-md">skip</div> */}
                <div className='bg-[#f8f7ff] h-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;