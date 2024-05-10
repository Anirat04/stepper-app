import { useForm } from "react-hook-form"
import RandomGirlImage from "../../../assets/images/RandomGirl-image.png"
import LiveSlider from "../../../components/HomeComponents/LiveSlider/LiveSlider";
import IconsSlider from "../../../components/HomeComponents/IconsSlider/IconsSlider";
import PopularDoctors from "../../../components/HomeComponents/PopularDoctors/PopularDoctors";
import FeatureDoctor from "../../../components/HomeComponents/FeatureDoctor/FeatureDoctor";
import HomeBG1 from "../../../assets/images/Home-bg/Ellipse 142.png"
import HomeBG2 from "../../../assets/images/Home-bg/Ellipse 143.png"
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loader from "../../../components/Loader/Loader";

// TODO: Homepage Background color effect should be applied **Properly**
// TODO: Homepage NavBar must be in separate component
// TODO: Header section have to  move to separate component
const Home = () => {
    const { user } = useContext(AuthContext)
    const [sessionData, setSessionData] = useState(null);
    const PopularDoctorsData = sessionData?.PopularDoctors
    const FeatureDoctorsData = sessionData?.FeatureDoctors
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    console.log(loading);
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
                console.log(sessionResponseData);
                setLoading(false)
            }
            
            if (sessionResponseData.status !== 200) {
                setLoading(true)
            }
            // else {
            //     navigate('/')
            // }
        } catch (error) {
            navigate('/login')
            console.error("Error fetching session data:", error);
        }
    }, [user?.sessionid, user?.email, navigate]);

    useEffect(() => {
        getSessionData();
    }, [getSessionData]);
    // Code for getting session data ends here

    const navlinks =
        <>
            <li>
                <NavLink>
                    <div className="flex flex-col items-center justify-center gap-[2px]">
                        <div className="active-circle bg-[#0165FC] w-[18px] h-[9px] rounded-b-full absolute top-0"></div>
                        <div>
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M17.9391 5.90142C17.6052 5.59475 17.2252 5.24783 16.7726 4.81179C16.5674 4.63929 16.3429 4.44187 16.1047 4.23296C14.7615 3.05325 12.9215 1.4375 11.2443 1.4375C9.58646 1.4375 7.86511 2.96317 6.48235 4.18887C6.22659 4.41504 5.98739 4.62779 5.74359 4.83383C5.31487 5.24783 4.93491 5.59571 4.60003 5.90333C2.40399 7.91679 1.99091 8.44483 1.99091 13.1416C1.99091 21.5625 4.32863 21.5625 11.2701 21.5625C18.2105 21.5625 20.5492 21.5625 20.5492 13.1416C20.5492 8.44388 20.1361 7.91583 17.9391 5.90142Z" fill="#99C1FE" />
                                <path d="M8.59533 16.1812H13.9452C14.326 16.1812 14.6352 15.8592 14.6352 15.4624C14.6352 15.0657 14.326 14.7437 13.9452 14.7437H8.59533C8.21445 14.7437 7.90533 15.0657 7.90533 15.4624C7.90533 15.8592 8.21445 16.1812 8.59533 16.1812Z" fill="#0165FC" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-[#0165FC]">Home</p>
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <div className="flex flex-col items-center justify-center gap-[2px]">
                        <div className="active-circle  bg-[#0165FC] w-[18px] h-[9px] rounded-b-full absolute top-0 hidden"></div>
                        <div>
                            <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M8.25 0.604248C3.839 0.604248 0.25 4.38862 0.25 9.04071C0.25 14.674 4.904 20.3959 8.25 20.3959C11.595 20.3959 16.25 14.674 16.25 9.04071C16.25 4.38862 12.661 0.604248 8.25 0.604248Z" fill="#7F7F7F" />
                                <path d="M5.39697 9.1564C5.39697 10.8012 6.681 12.1387 8.26 12.1387C9.839 12.1387 11.124 10.8012 11.124 9.1564C11.124 7.51157 9.839 6.17407 8.26 6.17407C6.681 6.17407 5.39697 7.51157 5.39697 9.1564Z" fill="#7F7F7F" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-[#868686] hover:text-[#0165FC]">Explore</p>
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink to={'bookings'}>
                    <div className="flex flex-col items-center justify-center gap-[2px]">
                        <div className="active-circle bg-[#0165FC] w-[18px] h-[9px] rounded-b-full absolute top-0 hidden"></div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0505 18.0901C15.596 18.0801 15.2305 17.7001 15.2305 17.2401C15.2206 16.7801 15.5862 16.4011 16.0406 16.3911H16.0505C16.5148 16.3911 16.8902 16.7711 16.8902 17.2401C16.8902 17.7101 16.5148 18.0901 16.0505 18.0901ZM12.0198 14.4101C11.5653 14.4311 11.1899 14.0701 11.1701 13.6111C11.1701 13.1511 11.5258 12.7711 11.9802 12.7501C12.4248 12.7501 12.7903 13.1011 12.8002 13.5501C12.82 14.0111 12.4643 14.3911 12.0198 14.4101ZM12.0198 18.0401C11.5653 18.0611 11.1899 17.7001 11.1701 17.2401C11.1701 16.7801 11.5258 16.4011 11.9802 16.3801C12.4248 16.3801 12.7903 16.7311 12.8002 17.1811C12.82 17.6411 12.4643 18.0211 12.0198 18.0401ZM7.95939 14.4101C7.50494 14.4311 7.12953 14.0701 7.10977 13.6111C7.10977 13.1511 7.46542 12.7711 7.91987 12.7501C8.36443 12.7501 8.72997 13.1011 8.73985 13.5501C8.7596 14.0111 8.40395 14.3911 7.95939 14.4101ZM7.94951 18.0401C7.49506 18.0611 7.11965 17.7001 7.09989 17.2401C7.09989 16.7801 7.45554 16.4011 7.90999 16.3801C8.35456 16.3801 8.72009 16.7311 8.72997 17.1811C8.74973 17.6411 8.39407 18.0211 7.94951 18.0401ZM15.2404 13.6011C15.2404 13.1411 15.596 12.7711 16.0505 12.7611C16.4951 12.7611 16.8507 13.1201 16.8705 13.5611C16.8804 14.0211 16.5247 14.4011 16.0801 14.4101C15.6257 14.4201 15.2503 14.0701 15.2404 13.6111V13.6011ZM3 9.25708V16.8701C3 20.0301 4.99561 22.0001 8.12733 22.0001H15.8628C19.0241 22.0001 21 20.0701 21 16.9311V9.25708H3Z" fill="#CCCCCC" />
                                <path opacity="0.4" d="M3.00336 9.25699C3.0162 8.66999 3.0656 7.50499 3.15846 7.12999C3.63267 5.02099 5.24298 3.68099 7.54485 3.48999H16.4559C18.738 3.69099 20.3681 5.03999 20.8423 7.12999C20.9342 7.49499 20.9836 8.66899 20.9964 9.25699H3.00336Z" fill="black" />
                                <path d="M8.30489 6.59C8.73958 6.59 9.06559 6.261 9.06559 5.82V2.771C9.06559 2.33 8.73958 2 8.30489 2C7.8702 2 7.54419 2.33 7.54419 2.771V5.82C7.54419 6.261 7.8702 6.59 8.30489 6.59Z" fill="black" />
                                <path d="M15.695 6.59C16.1198 6.59 16.4557 6.261 16.4557 5.82V2.771C16.4557 2.33 16.1198 2 15.695 2C15.2603 2 14.9343 2.33 14.9343 2.771V5.82C14.9343 6.261 15.2603 6.59 15.695 6.59Z" fill="black" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-[#868686] hover:text-[#0165FC]">Bookings</p>
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <div className="flex flex-col items-center justify-center gap-[2px]">
                        <div className="active-circle bg-[#0165FC] w-[18px] h-[9px] rounded-b-full absolute top-0 hidden"></div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="url(#pattern0_165_184)" />
                                <defs>
                                    <pattern id="pattern0_165_184" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_165_184" transform="scale(0.01)" />
                                    </pattern>
                                    <image id="image0_165_184" width="100" height="100" xlinkHref="https://i.ibb.co/8dySBf3/Telegram-App.png" />
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-[#868686] hover:text-[#0165FC]">Chats</p>
                        </div>
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <div className="flex flex-col items-center justify-center gap-[2px]">
                        <div className="active-circle bg-[#0165FC] w-[18px] h-[9px] rounded-b-full absolute top-0 hidden"></div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7231 11.6422H11.7528C14.34 11.6422 16.4443 9.45014 16.4443 6.75514C16.4443 4.06114 14.34 1.86914 11.7528 1.86914C9.16563 1.86914 7.06131 4.06114 7.06131 6.75314C7.05267 9.43914 9.14259 11.6322 11.7231 11.6422Z" fill="#7F7F7F" />
                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M11.7603 13.8308C8.00377 13.8308 4.70905 16.1328 4.70905 18.7558C4.70905 22.1308 10.0169 22.1308 11.7603 22.1308C13.5036 22.1308 18.8105 22.1308 18.8105 18.7338C18.8105 16.1218 15.5158 13.8308 11.7603 13.8308Z" fill="#CCCCCC" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-[#868686] hover:text-[#0165FC]">Profile</p>
                        </div>
                    </div>
                </NavLink>
            </li>
        </>;

    if(loading === true && sessionData === null){
        return <Loader></Loader>
    }

    return (
        <div className="bg-[#fafafa] min-h-full relative w-full">
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
            {/* Bottom nav */}
            <div className="sticky w-full bottom-0 left-0 z-[999]">
                <div
                    className=" bg-white rounded-t-[15px] pb-5 pt-4 overflow-y-hidden"
                    style={{ boxShadow: "0px 1px 15px 0px #00000040" }}
                >
                    <ul className="flex justify-evenly">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Home;