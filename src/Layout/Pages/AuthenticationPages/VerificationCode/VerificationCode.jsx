import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import VerificationImage from "../../../../assets/images/CodeVerification-Image.png"
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const VerificationCode = () => {
    // Input values getting from codes state
    const [codes, setCodes] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);
    const navigate = useNavigate()

    // This useState and useEffect is using to set the border color of each code input field dynamically
    const [hasCode, setHasCode] = useState([false, false, false, false, false]);
    useEffect(() => {
        const newHasCode = codes.map(code => code !== "");
        setHasCode(newHasCode);
    }, [codes]);

    // Capturing the value of verification code functions starts here
    const handleChange = (index, e) => {
        const { value } = e.target;
        if (value.length <= 1 && !isNaN(value)) {
            const newCodes = [...codes];
            newCodes[index] = value;
            setCodes(newCodes);
            if (value.length === 1 && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && codes[index] === '') {
            const newCodes = [...codes];
            newCodes[index - 1] = '';
            setCodes(newCodes);
            inputRefs.current[index - 1].focus();
        }
    };
    // Capturing the value of verification code functions ends here 



    // Form operations
    const { handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (
        <div className="px-5 bg-white h-full pt-[80px]">
            <div>
                <Link to={"/login/forgot-pass"}>
                    <IoIosArrowBack className='text-black text-[24px] absolute top-[40px]' />
                </Link>
            </div>
            <div>
                <div className='text-center'>
                    <h2 className='text-black text-[26px] font-bold mb-2' >Enter Verification Code</h2>
                    <p className='text-[14px]'>We have send the code verification <br /> to your mobile number</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-5 justify-items-center mt-7">
                        {codes.map((code, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                value={code}
                                onChange={e => {
                                    handleChange(index, e); // Call the first onChange function
                                    // handleCodeOnchange(e);   // Call the second onChange function
                                }}
                                onKeyDown={e => handleKeyDown(index, e)}
                                maxLength={1}
                                className={`bg-white border outline-0 w-14 h-14 rounded-xl text-center text-black text-[26px] focus-within:border-[#7563f7] ${hasCode[index] ? 'border-[#7563f7]' : ''}`}
                            />
                        ))}
                    </div>

                    <div className="my-[75px]">
                        <img src={VerificationImage} alt="" />
                    </div>

                    <button className="btn btn-primary bg-[#7563f7] border-none w-full text-white font-normal">
                        <input
                            className='w-full h-full'
                            type="button"
                            value={'Continue'}
                            onClick={() => {
                                setValue("Code", codes)
                                navigate("resetPass")
                            }} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerificationCode;