import { IoMdArrowBack } from "react-icons/io";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { HiClock } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import "./style.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const SelectPackage = () => {
  const params_bookingID = useParams().booking_id
  const { user } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    const packageData = {
      email: user?.email,
      bookingID: params_bookingID,
      durationID: data?.durationID,
      packageID: 1,
    }
    console.log(packageData);
    try {
      const postPackageData = await fetch('https://api-doctors24.duckdns.org/accounts/select-package', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.sessionid}`
        },
        body: JSON.stringify(packageData)
      })
      const response = await postPackageData.json()
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(errors);

  return (
    <div className="bg-[#f8f8f8] h-svh pt-9 px-5 font-rubik flex flex-col justify-between">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex items-center gap-4">
            <div>
              <IoMdArrowBack className="text-[22px]" />
            </div>
            <div>
              <h1 className="text-[20px] font-bold">Select Package</h1>
            </div>
          </div>
          <div>
            {/* Time Select container */}
            <div className="py-5">
              <h3 className="text-[18px] font-semibold">Select Duration</h3>
              <div className="pt-5">
                <div className="relative">
                  <select
                    {...register("durationID")}
                    id="duration"
                    className="bg-[#f0f0f0] w-full outline-0 pl-14 pr-5 py-5 rounded-xl"
                  >
                    <option value="30" className="bg-[#f0f0f0] h-[40px]">
                      30 minutes
                    </option>
                    <option value="45" className="bg-[#f0f0f0] h-[40px]">
                      45 minutes
                    </option>
                    <option value="60" className="bg-[#f0f0f0] h-[40px]">
                      60 minutes
                    </option>
                  </select>
                  <div className="absolute top-1/2 -translate-y-1/2 left-5">
                    <HiClock className="text-[22px]" />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-5">
                    <IoMdArrowDropdown className="text-[22px]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Package Select Container */}
            <div className="">
              <h3 className="text-[18px] font-semibold">Select Package</h3>
              <div>
                <div>
                  {/* Chat */}
                  <label className="bg-white rounded-xl py-5 px-5 flex justify-between my-5 custom-select-package-radio">
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
                        <input {...register("packageID")} value={1} type="radio" />
                      </div>
                    </div>
                  </label>
                  {/* Voice call */}
                  <label className="bg-white rounded-xl py-5 px-5 flex justify-between my-5 custom-select-package-radio">
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
                        <input {...register("packageID")} value={1} type="radio" />
                      </div>
                    </div>
                  </label>
                  {/* Video Call */}
                  <label className="bg-white rounded-xl py-5 px-5 flex justify-between my-5 custom-select-package-radio">
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
                        <input {...register("packageID")} value={1} type="radio" />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <button type="submit" className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectPackage;
