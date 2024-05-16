import { BsArrowLeft } from "react-icons/bs";
import { CiLock, CiUser } from "react-icons/ci";
import { GrRotateRight } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const MyProfile = () => {
    return (
        <div className="">
            <div className="h-svh bg-[#F8F7FF]">
                <div className="min-h-[40%] relative pt-9 flex items-center justify-center">
                    <div className="absolute top-9 left-0 flex items-center justify-between w-full px-5">
                        <div>
                            <Link to={'/'}>
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
                        <div>
                            <PiDotsThreeOutlineVertical className="text-[22px]" />
                        </div>
                    </div>
                    {/* Profile pic and name with number */}
                    <div className="flex flex-col items-center gap-3 text-center ">
                        <div className="w-[100px] h-[100px]">
                            <img className="w-full h-full rounded-[10px]" src={'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1715836581~exp=1715840181~hmac=d998b33c20c4035c3d6c3a6b703a08a3d5b66d3b2139906cb6d87eac2b2d56fd&w=1380'} alt="" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[20px]">John Smith</h3>
                            <p className="font-medium">+8765 4532 543</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white w-full min-h-[60svh] rounded-t-[30px] px-5 pt-7'>
                    <div className="pb-2">
                        <h3 className="font-bold text-[18px]">My Profile</h3>
                    </div>
                    <div>
                        {/* My Appointment */}
                        <Link to={'your-profile'}>
                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#F8F7FF] p-[10px] rounded-xl">
                                        <LuCalendarDays className="text-[24px] text-[#7563F7]" />
                                    </div>
                                    <div><p className=" font-medium">My Appointments</p></div>
                                </div>
                                <div><SlArrowRight /></div>
                            </div>
                        </Link>
                        <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                        {/* Refund history */}
                        <Link to={'your-profile'}>
                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#F8F7FF] p-[10px] rounded-xl">
                                        <GrRotateRight className="text-[24px] text-[#7563F7]" />
                                    </div>
                                    <div><p className=" font-medium">Refund History</p></div>
                                </div>
                                <div><SlArrowRight /></div>
                            </div>
                        </Link>
                        <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                        {/* Change password */}
                        <Link to={'your-profile'}>
                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#F8F7FF] p-[10px] rounded-xl">
                                        <CiLock className="text-[24px] text-[#7563F7]" />
                                    </div>
                                    <div><p className=" font-medium">Change Password</p></div>
                                </div>
                                <div><SlArrowRight /></div>
                            </div>
                        </Link>
                        <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                        {/* Invite Friends */}
                        <Link to={'your-profile'}>
                            <div className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#F8F7FF] p-[10px] rounded-xl">
                                        <CiLock className="text-[24px] text-[#7563F7]" />
                                    </div>
                                    <div><p className=" font-medium">Invite Friends</p></div>
                                </div>
                                <div><SlArrowRight /></div>
                            </div>
                        </Link>
                        <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;