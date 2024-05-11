import { BsArrowLeft, BsExclamation } from "react-icons/bs";
import { CiEdit, CiLock, CiLogout, CiUser } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import { CiCreditCard1 } from "react-icons/ci";
import { PiGearSixLight, PiHeartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="px-5 min-h-svh pb-20">
            <div className="mt-9">
                <div className="text-center h-fit relative">
                    <p className="text-[18px] font-medium">Profile</p>
                    <Link to={'/'}>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 border p-2 rounded-full">
                            <BsArrowLeft className="text-black" />
                        </div>
                    </Link>
                </div>
                {/* Profile */}
                <div className="flex flex-col items-center gap-5 py-8">
                    <div className="w-[100px] h-[100px] relative">
                        <img className="w-full h-full rounded-full" src={`https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg`} alt="" />
                        <div className="w-fit h-fit bg-[#0165FC] rounded-full p-1 border-[2px] border-white absolute bottom-0 right-0">
                            <CiEdit className="text-[22px] text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-[20px]">Esther Howard</h3>
                    </div>
                </div>
                {/* Profile links */}
                <div>
                    {/* Your Profile */}
                    <Link to={'your-profile'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><CiUser className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Your Profile</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Payment Methods */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><CiCreditCard1 className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Payment Methods</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Favourite */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'/'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><PiHeartLight className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Favourite</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Settings */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'/settings'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><PiGearSixLight className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Settings</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Help Center */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'/settings'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div className="border rounded-full border-[#0165FC]"><BsExclamation className="text-[23px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Help Center</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Privacy Policy */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'/settings'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><CiLock className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Privacy Policy</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Logout */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'/settings'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><CiLogout className="text-[26px] text-[#0165FC] rotate-180" /></div>
                                <div><p className="text-[19px]">Log out</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;