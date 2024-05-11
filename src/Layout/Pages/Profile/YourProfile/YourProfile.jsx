import { BsArrowLeft } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const YourProfile = () => {
    return (
        <div className="px-5 min-h-svh">
            <div className="mt-9">
                <div className="text-center h-fit relative">
                    <p className="text-[18px] font-medium">Your Profile</p>
                    <Link to={'/profile'}>
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
                </div>
                {/* Profile form */}
                <div>
                    <form >
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="text-[15px]">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    defaultValue={'Esther Howard'}
                                    className="w-full rounded-md py-2 px-5 outline-0 border"
                                />
                            </div>
                            <div>
                                <label className="text-[15px]">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    defaultValue={'603.555.0123'}
                                    className="w-full rounded-md py-2 px-5 outline-0 border"
                                />
                            </div>
                            <div>
                                <label className="text-[15px]">Email</label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full rounded-md py-2 px-5 outline-0 border"
                                />
                            </div>
                            <div>
                                <label className="text-[15px]">DOB</label>
                                <input
                                    type="date"
                                    className="w-full rounded-md py-2 px-5 outline-0 border"
                                />
                            </div>
                            <div className="relative">
                                <label className="text-[15px]">Gender</label>
                                <select className="w-full border px-5 py-2 rounded-md outline-0 bg-white">
                                    <option>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Male">Female</option>
                                </select>
                                <div className="absolute top-9 right-5"><SlArrowRight className="text-[#0165FC] rotate-90" /></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white mt-20 mb-8">
                Update Profile
            </button>
        </div>
    );
};

export default YourProfile;