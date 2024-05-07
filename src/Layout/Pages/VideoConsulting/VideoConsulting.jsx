import { useState } from "react";
import { BsMic } from "react-icons/bs";
import { BsMicMute } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { CiVideoOff } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "react-router-dom";

const VideoConsulting = () => {
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCamOn, setIsCamOn] = useState(true);

    const handleMicOn = () => {
        setIsMicOn(!isMicOn);
    };

    const handleCamOn = () => {
        setIsCamOn(!isCamOn);
    };

    return (
        <>
            <div className="font-rubik relative bg-red-300 min-h-svh">
                {/* Div for video stream content */}
                <div className="bg-gray-300 relative min-h-svh w-full">
                    <div className="bg-green-200 h-svh w-full">
                        <img
                            className="h-svh w-full"
                            src={
                                "https://universalhealthconnect.com/wp-content/uploads/2022/12/doc1-3.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div
                        className="absolute h-[498px] w-full bottom-0 left-0 flex items-end justify-center"
                        style={{
                            background:
                                "linear-gradient(178.05deg, rgba(0, 0, 0, 0) 2.42%, #000000 98.35%)",
                        }}
                    >
                        <div className="">
                            <div className="text-center">
                                <h3 className="text-white font-bold text-[14px]">
                                    Dr. John Wilson
                                </h3>
                                <p className="text-[#b3b5b5]">00:06:36</p>
                            </div>
                            <div className="flex items-center gap-7 pt-5 pb-10">
                                <div
                                    className="bg-[#8F8F92] w-fit p-3 rounded-full"
                                    onClick={handleMicOn}
                                >
                                    {
                                        isMicOn ? <BsMic className="text-white text-[24px]" /> : <BsMicMute className="text-white text-[24px]" />
                                    }
                                </div>
                                <Link to={'doc-review'}>
                                    <div className="bg-[#DC5F5F] w-fit p-5 rounded-full">
                                        <PiPhoneCall className="text-white text-[24px]" />
                                    </div>
                                </Link>
                                <div className="bg-[#8F8F92] w-fit p-3 rounded-full" onClick={handleCamOn}>
                                    {
                                        isCamOn ? <CiVideoOn className="text-white text-[24px]" /> : <CiVideoOff className="text-white text-[24px]" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-16 right-5 h-[120px] w-[90px]">
                    <img
                        className="w-full h-full rounded-lg"
                        src={"https://c.stocksy.com/a/YIb100/z9/381706.jpg"}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default VideoConsulting;
