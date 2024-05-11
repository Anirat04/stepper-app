import { AiOutlineUserDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { CiLock, CiLogout, CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { PiKeyLight } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const Settings = () => {
    return (
        <div className="px-5 min-h-svh pb-20">
            <div className="mt-9">
                <div className="text-center h-fit relative">
                    <p className="text-[18px] font-medium">Settings</p>
                    <Link to={'/profile'}>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 border p-2 rounded-full">
                            <BsArrowLeft className="text-black" />
                        </div>
                    </Link>
                </div>
                {/* Profile links */}
                <div className="pt-8">
                    {/* Notification Settings */}
                    <Link to={'notification-settings'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><IoIosNotificationsOutline className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Notification Settings</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Password Manager */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'password-manager'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><PiKeyLight className="text-[26px] text-[#0165FC]" /></div>
                                <div><p className="text-[19px]">Password Manager</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                    {/* Delete Account */}
                    <div className="divider my-0 h-fit after:h-[1px] before:h-[1px]"></div>
                    <Link to={'/delete-account'}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <div><IoPersonRemoveOutline className="text-[26px] text-[#0165FC] -scale-x-100" /></div>
                                <div><p className="text-[19px]">Delete Account</p></div>
                            </div>
                            <div><SlArrowRight className="text-[#0165FC]" /></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Settings;