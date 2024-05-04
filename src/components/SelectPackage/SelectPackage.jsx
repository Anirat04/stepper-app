
import { IoMdArrowBack } from "react-icons/io";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { HiClock } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

const SelectPackage = () => {
  return (
    <div className="bg-[#f8f8f8] h-svh pt-9 px-5 font-rubik flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4">
          <div>
            <IoMdArrowBack className="text-[22px]" />
          </div>
          <div>
            <h1 className="text-[20px] font-bold">Select Package</h1>
          </div>
        </div>
        <div className="py-5">
          <h3 className="text-[18px] font-semibold">Select Duration</h3>
          <div className="pt-5">
            <div className="bg-[#f0f0f0] flex items-center justify-between p-5 rounded-xl">
              <div className="flex items-center gap-2">
                <HiClock />
                <p>30 minutes</p>
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-[18px] font-semibold">Select Package</h3>
          <div>
            {/* Chat */}
            <div className="bg-white rounded-xl py-5 px-5 flex justify-between my-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#e5edfe] flex justify-center items-center rounded-full">
                  <TbMessageCircle2Filled />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px]">Messaging</h3>
                  <p className="text-[12px] text-[#677294]">
                    Chat message with doctor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-[18px] font-semibold text-[#246bfd]">
                    $20
                  </h3>
                  <p className="text-[12px] text-[#677294]">/30 mins</p>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
            </div>
            {/* Voice call */}
            <div className="bg-white rounded-xl py-5 px-5 flex justify-between my-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#e5edfe] flex justify-center items-center rounded-full">
                  <TbMessageCircle2Filled />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px]">Voice Call</h3>
                  <p className="text-[12px] text-[#677294]">
                    Voice call with doctor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-[18px] font-semibold text-[#246bfd]">
                    $40
                  </h3>
                  <p className="text-[12px] text-[#677294]">/30 mins</p>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
            </div>
            {/* Video Call */}
            <div className="bg-white rounded-xl py-5 px-5 flex justify-between my-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-[#e5edfe] flex justify-center items-center rounded-full">
                  <TbMessageCircle2Filled />
                </div>
                <div>
                  <h3 className="font-semibold text-[14px]">Video Call</h3>
                  <p className="text-[12px] text-[#677294]">
                    Video call with doctor
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-[18px] font-semibold text-[#246bfd]">
                    $60
                  </h3>
                  <p className="text-[12px] text-[#677294]">/30 mins</p>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <button className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectPackage;
