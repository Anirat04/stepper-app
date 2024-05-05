import { IoMdArrowBack } from "react-icons/io";

const CancAppointment = () => {
  return (
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
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I want to change to another doctor</p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I want to change package</p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I don&apos;t want to consult</p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I have recovered from the disease </p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I have found a suitable medicine</p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I just want to cancel</p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>I don&apos;t want to tell</p>
            </div>
            <div className="flex gap-3 items-center">
                <input name='reason' type="radio" />
                <p>Others</p>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] p-4 rounded-lg mb-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, itaque. Culpa quo earum quidem sit beatae soluta architecto at? Dolores cupiditate fuga illum, dicta quia aperiam nobis quaerat reiciendis consequatur?</p>
        </div>
      </div>
      <div className="pb-8">
        <button className="btn btn-primary w-full rounded-full bg-[#246bfd] border-none text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CancAppointment;
