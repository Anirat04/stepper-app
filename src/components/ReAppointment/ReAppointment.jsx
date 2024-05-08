import { useState } from "react";
import Calendar from "react-calendar";
import { IoMdArrowBack } from "react-icons/io";
// import 'react-calendar/dist/Calendar.css';
import "./Calendar.css";

const ReAppointment = () => {
  const [value, onChange] = useState(new Date());

  console.log(value);

  return (
    <div className="bg-white h-svh pt-9 px-5 font-rubik flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4">
          <div>
            <IoMdArrowBack className="text-[22px]" />
          </div>
          <div>
            <h1 className="text-[20px] font-bold">Reschedule Appointment</h1>
          </div>
        </div>
        <div className="py-5">
          <h3 className="text-[18px] font-semibold mb-4">Select Date</h3>
          <div className="bg-[#eef4ff] h-fit w-full rounded-2xl p-5">
            <Calendar
              formatShortWeekday={(locale, date) => [ `Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa` ][date.getDay()]}
              next2Label={false}
              prev2Label={false}
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
        <div className="py-5">
          <h3 className="text-[18px] font-semibold mb-4">Select Hour</h3>
          <div className="grid grid-cols-3 text-center gap-3">
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
            <div className="border-2 border-[#246bfd] rounded-full  px-3 py-1 hover:bg-[#246bfd] hover:text-white">
              <p>09:00 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <button className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default ReAppointment;
