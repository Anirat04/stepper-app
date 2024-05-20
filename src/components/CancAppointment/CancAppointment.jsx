import { IoMdArrowBack } from "react-icons/io";
import './CustomRadio.css'
import { useEffect, useState } from "react";

const CancAppointment = () => {
  const [showOtherReasonTextarea, setShowOtherReasonTextarea] = useState(false);
  const [selectedReason, setSelectedReason] = useState('')
  const [cancelReason, setCancelReason] = useState('')

  const handleRadioChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value === 'Others' || e.target.name === 'otherReason') {
      setShowOtherReasonTextarea(true);
      setSelectedReason('')
      if (e.target.name === 'otherReason') {
        setSelectedReason(e.target.value)
      }
    } else {
      setShowOtherReasonTextarea(false);
      setSelectedReason(e.target.value)
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setCancelReason(selectedReason)
  }

  // console.log(cancelReason);
  return (
    <form
      onSubmit={handleFormSubmit}
    // onChange={handleRadioChange}
    >
      <div className="bg-white h-svh pt-9 px-5 font-rubik flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4">
            <div>
              <IoMdArrowBack className="text-[22px]" />
            </div>
            <div>
              <h1 className="text-[20px] font-bold">Cancel Appointment</h1>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-[18px] font-semibold mb-4">Reason for Schedule Change</h3>
            <div className="flex flex-col gap-2">
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I want to change to another doctor'}
                  onChange={handleRadioChange}
                />
                <p>I want to change to another doctor</p>
              </label>
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I want to change package'}
                  onChange={handleRadioChange}
                />
                <p>I want to change package</p>
              </label>
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I don&apos;t want to consult'}
                  onChange={handleRadioChange}
                />
                <p>I don&apos;t want to consult</p>
              </label>
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I have recovered from the disease '}
                  onChange={handleRadioChange}
                />
                <p>I have recovered from the disease </p>
              </label>
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I have found a suitable medicine'}
                  onChange={handleRadioChange}
                />
                <p>I have found a suitable medicine</p>
              </label>
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I just want to cancel'}
                  onChange={handleRadioChange}
                />
                <p>I just want to cancel</p>
              </label>
              <label className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer">
                <input
                  name='reason'
                  type="radio"
                  value={'I don&apos;t want to tell'}
                  onChange={handleRadioChange}
                />
                <p>I don&apos;t want to tell</p>
              </label>
              <label
                className="flex gap-3 items-center cancApo-CustomRadio cursor-pointer"
              >
                <input
                  name='reason'
                  type="radio"
                  value={'Others'}
                  onChange={handleRadioChange}
                />
                <p>Others</p>
              </label>
            </div>
          </div>
          <div className="">
            {
              showOtherReasonTextarea &&
              <textarea
                name="otherReason"
                placeholder="Why do you want to cancel the appointment?"
                className="outline-0 border w-full rounded-xl h-[130px] p-3 mb-6 bg-[#f3f3f3]"
                onChange={handleRadioChange}
              >
              </textarea>
            }
          </div>
        </div>
        <div className="pb-8">
          <button type="submit" className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CancAppointment;
