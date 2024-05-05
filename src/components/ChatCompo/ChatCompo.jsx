import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiDotsThreeCircleLight } from "react-icons/pi";

const ChatCompo = () => {
  return (
    <div className="h-svh pt-9 px-5 font-rubik">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <IoMdArrowBack className="text-[22px]" />
          </div>
          <div>
            <h1 className="text-[18px] font-semibold">Dr. Drake Boeson</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiSearch className="text-[26px]" />
          <PiDotsThreeCircleLight className="text-[22px]" />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <div className="bg-[#f5f5f5] p-5 rounded-b-2xl rounded-tr-2xl rounded-tl-lg max-w-[80%]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            tempore molestiae maiores cumque, veritatis ullam?
          </p>
        </div>
        <div className="bg-[#246bfd] text-white p-5 rounded-b-2xl rounded-tr-lg rounded-tl-2xl max-w-[80%] relative left-[20%]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            tempore molestiae maiores cumque, veritatis ullam?
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-5 rounded-b-2xl rounded-tr-2xl rounded-tl-lg max-w-[80%]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            tempore molestiae maiores cumque, veritatis ullam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatCompo;
