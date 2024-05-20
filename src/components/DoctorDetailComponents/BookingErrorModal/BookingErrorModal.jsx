import { RxCross2 } from 'react-icons/rx';

const BookingErrorModal = ({ showModal, setShowModal }) => {
    return (
        <div className={`h-svh w-full absolute top-0 left-0 z-[99999] ${showModal === false ? 'hidden' : 'flex'}`}>
            <div className='h-full w-full relative'>
                <div className='w-[330px] rounded-2xl bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col px-4 pt-8 pb-5 justify-center shadow-lg z-10'>
                    <div className='flex justify-center'>
                        <div className="bg-red-200 w-[130px] h-[130px] rounded-full p-5">
                            <div className="bg-red-400 w-full h-full rounded-full flex justify-center items-center">
                                <div className="bg-white w-fit h-fit rounded-full p-1">
                                    <RxCross2 className="text-red-400 text-[22px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-6">
                        <h3 className="text-[20px] font-bold text-black pb-2">Booking Failed</h3>
                        <p>Your appointment booking is failed please select date and time</p>
                    </div>
                    <div className=''>
                        <button
                            onClick={() => setShowModal(false)}
                            className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal rounded-xl"                                            >
                            Close
                        </button>
                    </div>
                </div>
                <div
                    className='h-full'
                    style={{
                        // background: 'rgba(255, 255, 255, 0)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        WebkitBackdropFilter: 'blur(12.7px)',
                        backdropFilter: 'blur(12.7px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                >
                </div>
            </div>
        </div>
    );
};

export default BookingErrorModal;