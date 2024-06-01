import { useForm } from "react-hook-form"
import RandomGirlImage from "../../../assets/images/RandomGirl-image.png"
import LiveSlider from "../../../components/HomeComponents/LiveSlider/LiveSlider";
import IconsSlider from "../../../components/HomeComponents/IconsSlider/IconsSlider";
import PopularDoctors from "../../../components/HomeComponents/PopularDoctors/PopularDoctors";
import FeatureDoctor from "../../../components/HomeComponents/FeatureDoctor/FeatureDoctor";
import HomeBG1 from "../../../assets/images/Home-bg/Ellipse 142.png"
import HomeBG2 from "../../../assets/images/Home-bg/Ellipse 143.png"
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loader from "../../../components/Shared/Loader/Loader";

// TODO: Homepage Background color effect should be applied **Properly**
// TODO: Homepage NavBar must be in separate component
// TODO: Header section have to  move to separate component
const Home = () => {
    const { user } = useContext(AuthContext)
    // console.log("user", user);
    const [sessionData, setSessionData] = useState(null);
    const PopularDoctorsData = sessionData?.PopularDoctors
    const FeatureDoctorsData = sessionData?.FeatureDoctors
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    // console.log(loading);
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors }
    } = useForm()
    const onSubmit = data => console.log(data);
    // console.log(errors);

    // const getSearchText = watch('SearchText')


    // Code for getting session data starts here ---- by POST request via passing the parameters as user email and session id
    const getSessionData = useCallback(async () => {
        const getSessionId = user?.sessionid
        try {
            const sessionDataFromStorage = JSON.parse(localStorage.getItem('sessionData'));
            // console.log('SessionStorage data =', sessionDataFromStorage);
            if (loading === true && sessionDataFromStorage !== null) {
                setSessionData(sessionDataFromStorage);
                setLoading(false);
                // console.log('Checking');
                return;
            }

            if (user !== null) {
                // console.log('going next line');
                const sessionResponse = await fetch(
                    "https://api-doctors24.duckdns.org/accounts/dashboard",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${getSessionId}`,
                        },
                        body: JSON.stringify({ email: user?.email }),
                    }
                );
                const sessionResponseData = await sessionResponse.json();

                if (sessionResponseData.status === 200) {
                    setSessionData(sessionResponseData.data);
                    localStorage.setItem('sessionData', JSON.stringify(sessionResponseData.data));
                    console.log('API called', sessionResponseData);
                    setLoading(false)
                }
                else {
                    setLoading(true)
                }

                if (sessionResponseData.status === "401") {
                    navigate('/login')
                }
                if (sessionResponseData.status === "406" && sessionDataFromStorage === null) {
                    navigate('/login')
                    console.log(sessionDataFromStorage);
                }
                console.log(sessionResponseData);
                if (sessionResponseData.status !== 200) {
                    setLoading(true)
                }
            }
        } catch (error) {
            navigate('/login')
            console.error("Error fetching session data:", error);
        }
    }, [user, loading, navigate]);

    useEffect(() => {
        getSessionData();
    }, [getSessionData]);
    // console.log(sessionData);
    // Code for getting session data ends here

    if (loading === true && sessionData === null) {
        return <Loader></Loader>
    }

    return (
        <>
            <div className="bg-[#fafafa] min-h-full relative w-full pb-20">
                <div className="fixed top-[60px]">
                    <img className="h-[516px] max-w-[375px]" src={HomeBG1} alt="" />
                </div>
                <div className="fixed bottom-0 right-0">
                    <img className="w-full relative" src={HomeBG2} alt="" />
                </div>
                <div className="relative">
                    {/* Heading div */}
                    <div className="bg-gradient-to-br from-[#0EBE7E] to-[#07D9AD] pt-9 px-5 rounded-b-[20px] pb-[48px] relative">
                        <div className="flex justify-between">
                            <div className="mt-2">
                                <h3 className="font-rubik text-[#FAFAFA] font-light text-[20px]">Hi Abdullah!</h3>
                                <h2 className="font-rubik font-bold text-[25px] text-white">Find Your Doctor</h2>
                            </div>
                            <div className="">
                                <img className="w-[60px] h-[60px] rounded-full" src={RandomGirlImage} alt="" />
                            </div>
                            <div className="absolute -bottom-[27px] w-full left-0 px-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full relative z-[99999]">
                                    <input
                                        type="search"
                                        placeholder="Search..."
                                        {...register("SearchText")}
                                        className="bg-white py-[18px] pl-[45px] pr-5 text-[15px] text-[#677294] w-full rounded-md outline-0 border border-[#ffffff] focus-within:border-gray-200"
                                        style={{ boxShadow: "0 0 20px 0 #00000014" }}
                                    />
                                    <span className="absolute top-1/2 -translate-y-1/2 left-5">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7248 0C2.56823 0 0 2.56826 0 5.72487C0 8.88165 2.56823 11.4497 5.7248 11.4497C8.88154 11.4497 11.4496 8.88165 11.4496 5.72487C11.4496 2.56826 8.88154 0 5.7248 0ZM5.7248 10.3929C3.15093 10.3929 1.05689 8.29879 1.05689 5.72489C1.05689 3.15099 3.15093 1.0569 5.7248 1.0569C8.29866 1.0569 10.3927 3.15097 10.3927 5.72487C10.3927 8.29876 8.29866 10.3929 5.7248 10.3929Z" fill="#677294" />
                                            <path d="M12.845 12.0979L9.81527 9.06817C9.60882 8.86172 9.27449 8.86172 9.06804 9.06817C8.8616 9.27444 8.8616 9.60913 9.06804 9.81541L12.0978 12.8452C12.201 12.9484 12.3361 13 12.4714 13C12.6065 13 12.7418 12.9484 12.845 12.8452C13.0514 12.6389 13.0514 12.3042 12.845 12.0979Z" fill="#677294" />
                                        </svg>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[54px] pl-5">
                        <LiveSlider></LiveSlider>
                    </div>
                    <div className="h-[150px]">
                        <IconsSlider></IconsSlider>
                    </div>
                    <div className="">
                        <PopularDoctors doctorData={PopularDoctorsData}></PopularDoctors>
                    </div>
                    <div className="py-[30px] relative">
                        <FeatureDoctor doctorData={FeatureDoctorsData}></FeatureDoctor>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;