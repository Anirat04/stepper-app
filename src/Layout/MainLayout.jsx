import { Outlet } from "react-router-dom";

// TODO: Add skip badge
const MainLayout = () => {
    return (
        // <div className='bg-[#f5f5f5] min-h-screen pt-5'>
        //     <div className="h-[812px]">
        //         <div className='md:max-w-[375px] max-h-[812px] h-[812px]  mx-auto bg-white relative shadow-lg overflow-y-auto textareaScroll'>
        //             {/* <div className="text-[12px] absolute top-12 text-purple-600 right-4 bg-gray-200 px-2 rounded-md">skip</div> */}
        //             <div className='h-full'>
        //                 <Outlet></Outlet>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;