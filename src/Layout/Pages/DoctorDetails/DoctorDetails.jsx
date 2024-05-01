import { useState } from "react";
import doctorIMG from "../../../assets/images/DoctorDetails/doctor-details-1.png"
import SelectDate from "../../../components/DoctorDetailComponents/SelectDate/SelectDate";
import SelectTime from "../../../components/DoctorDetailComponents/SelectTime/SelectTime";
import { Link } from "react-router-dom";


const DoctorDetails = () => {
    // const [dateSelected, setDateSelected] = useState(false)
    return (
        <div className="font-rubik relative min-h-svh max-h-svh bg-gray-500">
            <div className="relative">
                <img className="w-full min-h-[375px] max-h-[46%]" src={doctorIMG} alt="" />
                <div className="absolute top-9 left-0 flex justify-between w-full px-5">
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
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="25" height="25" fill="url(#pattern0_149_76)" />
                            <defs>
                                <pattern id="pattern0_149_76" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_149_76" transform="scale(0.0104167)" />
                                </pattern>
                                <image id="image0_149_76" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVR4nO3awUoCURQGYJcJcw6MBCNqy/DdQ3wzoXqBwqI2gamLTtf7fTA7F4f7cwbm+s9mAAAAAPCPjHerh4hpF8PyNWP5dur5/M20j1htq+e+ncMfpsNvB/8ziOmwmK831fM3L2LaXXr43yHE8ql6/ubFGa+dE6+jl+r5m5dXHv7XUz1/81IAAuha2gABdC1tgAC6ljag6Q+x5+Lx25cx7a+/iph21fM3L2K1vfYyLuL+sXr+m7CYrzfHi7Xj3c459z8fV9cOHwAAAAAuN+qG1hl1Q2uFbmhxAINuaKn0p7wAupY2QABdSxsggK6lDRBA10I3tFbqhtYK3dB6C91QAAAAAPgbo25onVE3tFbohhYHMOiGlkqtCAF0LW2AALqWNkAAXUsbIICuhW5ordQNrRW6ofUWuqEAAAAAzNr3DnMEaKcPv7jzAAAAAElFTkSuQmCC" />
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-t-[30px] h-fit w-full absolute top-[335px]">
                <div className="flex justify-between items-center px-5 pt-5">
                    <div>
                        <h2 className="text-[18px] font-medium">John Wilson</h2>
                        <h3 className="text-[13px]">Cardiology</h3>
                    </div>
                    <div className="flex items-center  gap-1">
                        <div>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.199951" width="18" height="18" fill="url(#pattern0_149_126)" />
                                <defs>
                                    <pattern id="pattern0_149_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_149_126" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_149_126" width="96" height="96" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[14px]">4.8</p>
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className="px-5 my-8">
                    <h3 className="text-[15px] font-semibold">Description</h3>
                    <p className="text-[12.8px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                </div>
                {/* Select Date section */}
                <div className="pl-5">
                    <h3 className="text-[15px] font-semibold mb-1">Select Date</h3>
                    <div>
                        <SelectDate></SelectDate>
                    </div>
                </div>
                {/* Select Time section */}
                <div className="pl-5 mt-5">
                    <h3 className="text-[15px] font-semibold mb-1">Select Time</h3>
                    <div>
                        <SelectTime></SelectTime>
                    </div>
                </div>
                <div className="px-5 mt-4 mb-8">
                    <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div >
    );
};

export default DoctorDetails;