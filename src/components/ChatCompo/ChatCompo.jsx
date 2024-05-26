import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const ChatCompo = () => {
  const textAreaRef = useRef(null);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const val = e.target?.value;
    setValue(val);
  };

  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.current.style.height = "50px"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [value]);

  return (
    <div className="max-h-svh font-rubik relative overflow-hidden">
      <div className="absolute z-[99999] bg-white w-full pb-5 flex items-center justify-between pt-5 px-5">
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

      {/* Chat divs */}
      <div className="relative overflow-y-auto h-svh pb-20 pt-12">
        <div className="flex flex-col gap-4 pt-5 px-5">
          <div className="bg-[#f5f5f5] p-5 rounded-b-2xl rounded-tr-2xl rounded-tl-lg max-w-[80%] relative">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              tempore molestiae maiores cumque, veritatis ullam?
            </p>
            <div className="flex items-center absolute right-5 bottom-3 gap-1">
              <div>
                <p className="text-[12px]">16:28</p>
              </div>
            </div>
          </div>

          <div className="bg-[#246bfd] text-white p-5 rounded-b-2xl rounded-tr-lg rounded-tl-2xl max-w-[80%] relative left-[20%]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              tempore molestiae maiores cumque, veritatis ullam?
            </p>
            <div className="flex items-center absolute right-5 bottom-3 gap-1">
              <div>
                <p className="text-[12px]">16:29</p>
              </div>
              <div>
                <IoCheckmarkDoneOutline />
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-5 rounded-b-2xl rounded-tr-2xl rounded-tl-lg max-w-[80%] relative">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              tempore molestiae maiores cumque, veritatis ullam?
            </p>
            <div className="flex items-center absolute right-5 bottom-3 gap-1">
              <div>
                <p className="text-[12px]">16:28</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f5] p-5 rounded-b-2xl rounded-tr-2xl rounded-tl-lg max-w-[80%] relative">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              tempore molestiae maiores cumque, veritatis ullam?
            </p>
            <div className="flex items-center absolute right-5 bottom-3 gap-1">
              <div>
                <p className="text-[12px]">16:28</p>
              </div>
            </div>
          </div>

          <div className="bg-[#246bfd] text-white p-5 rounded-b-2xl rounded-tr-lg rounded-tl-2xl max-w-[80%] relative left-[20%]">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              tempore molestiae maiores cumque, veritatis ullam?
            </p>
            <div className="flex items-center absolute right-5 bottom-3 gap-1">
              <div>
                <p className="text-[12px]">16:29</p>
              </div>
              <div>
                <IoCheckmarkDoneOutline />
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-5 rounded-b-2xl rounded-tr-2xl rounded-tl-lg max-w-[80%] relative">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              tempore molestiae maiores cumque, veritatis ullam?
            </p>
            <div className="flex items-center absolute right-5 bottom-3 gap-1">
              <div>
                <p className="text-[12px]">16:28</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* message send box */}
      <div className="absolute w-full px-5 right-0 pt-1 pb-3 bottom-0 bg-white">
        <div>
          <form
          // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between w-full gap-3">
              <div className='w-full relative'>
                <textarea
                  // {...register("Comment")}
                  onChange={handleChange}
                  ref={textAreaRef}
                  rows={-1}
                  value={value}
                  placeholder='Type something'
                  className='textareaScroll w-full outline-0 rounded-[10px] pl-[60px] py-3 max-h-[5lh]'
                  style={{
                    "boxShadow": "0px 4px 10px -2px rgba(0,0,0,0.1)"
                  }}
                />
                <div className="absolute left-5 bottom-5">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5936 3.63422C17.2259 3.88589 17.673 4.3395 18.0738 5.00453L18.2058 5.23404L18.6957 6.17345L18.7119 6.19969L18.7265 6.22252L18.7681 6.2794C18.9913 6.52261 19.3649 6.66954 19.6114 6.66954C21.8699 6.66954 23.7146 8.44324 23.8277 10.673L23.8332 10.8902V17.1681C23.8332 20.0628 21.5471 22.425 18.6825 22.5473L18.449 22.5523H7.55067C4.65529 22.5523 2.29376 20.2666 2.17148 17.4017L2.1665 17.1681V10.8902C2.1665 8.55952 4.0569 6.66954 6.38825 6.66954C6.63393 6.66954 7.00801 6.5224 7.23156 6.2794L7.23927 6.27032L7.24891 6.2577L7.30462 6.17224L7.79314 5.23434C8.22859 4.44294 8.70229 3.9139 9.40521 3.63412C10.6933 3.12194 15.3066 3.12194 16.5936 3.63422ZM10.0059 5.14403C9.76605 5.23949 9.5489 5.46045 9.31717 5.84351L9.21686 6.0177L8.79992 6.82381L8.69731 7.00953C8.61164 7.15201 8.52596 7.27229 8.42811 7.3789C7.92933 7.92106 7.21318 8.2342 6.57656 8.28666L6.38825 8.29454L6.21048 8.30053C4.91814 8.38792 3.8849 9.42091 3.7975 10.7125L3.7915 10.8902V17.1681C3.7915 19.1748 5.36422 20.8146 7.34442 20.9217L7.55067 20.9273H18.449C20.4553 20.9273 22.0955 19.3539 22.2026 17.3743L22.2082 17.1681V10.8902C22.2082 9.51678 21.1403 8.39189 19.7892 8.30053L19.6114 8.29454L19.4228 8.28666C18.7852 8.23419 18.0691 7.92097 17.5709 7.37818C17.4744 7.27299 17.3891 7.15356 17.304 7.01228L17.2835 6.97725L17.2591 6.93375L17.1334 6.69786L16.7825 6.018C16.5455 5.5878 16.3285 5.32489 16.0943 5.19275L15.9927 5.14403L15.8634 5.10106C14.7485 4.78593 10.8704 4.80025 10.0059 5.14403ZM12.9995 9.9658C15.3506 9.9658 17.2559 11.8712 17.2559 14.2222C17.2559 16.5733 15.3506 18.4786 12.9995 18.4786C10.6484 18.4786 8.7431 16.5733 8.7431 14.2222C8.7431 11.8712 10.6484 9.9658 12.9995 9.9658ZM12.9995 11.5908C11.5459 11.5908 10.3681 12.7686 10.3681 14.2222C10.3681 15.6758 11.5459 16.8536 12.9995 16.8536C14.4531 16.8536 15.6309 15.6758 15.6309 14.2222C15.6309 12.7686 14.4531 11.5908 12.9995 11.5908ZM18.9628 9.20855C19.5611 9.20855 20.0462 9.69357 20.0462 10.2919C20.0462 10.8475 19.628 11.3053 19.0892 11.3679L18.9628 11.3752C18.3548 11.3752 17.8697 10.8902 17.8697 10.2919C17.8697 9.73631 18.288 9.27842 18.8267 9.21584L18.9628 9.20855Z" fill="#A8A7B2" />
                  </svg>
                </div>
              </div>
              <div className="min-w-[50px] min-h-full relative">
                <div className="absolute bottom-2 left-0">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#7563F7" />
                    <path d="M28.8325 21.1746L23.109 26.9592L16.5994 22.8877C15.6668 22.3041 15.8608 20.8874 16.9157 20.5789L32.3712 16.0528C33.3373 15.7696 34.2326 16.6728 33.9456 17.642L29.3731 33.0868C29.0598 34.1432 27.6512 34.332 27.0732 33.3953L23.106 26.9602" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            {/* <input type="submit" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatCompo;
