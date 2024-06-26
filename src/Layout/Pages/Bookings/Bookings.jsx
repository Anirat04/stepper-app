import { Link } from "react-router-dom";
import BookingTab from "../../../components/BookingComponents/BookingTab/BookingTab";
import { useEffect, useState } from "react";


const Bookings = () => {
    const [bookingData, setBookingData] = useState()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData.sessionid);
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-doctors24.duckdns.org/accounts/bookings', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userData?.sessionid}`
                    },
                    body: JSON.stringify({ email: userData?.email })
                })
                // console.log(response);
                const responseData = await response.json()
                if (responseData.status === 200) {
                    setBookingData(responseData?.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    console.log(bookingData);
    return (
        <div className="MainDiv pb-24">
            <div className="absolute top-9 left-0 flex text-center w-full px-5">
                <div>
                    <Link to={'/'}>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="25" height="25" fill="url(#pattern0_149_75)" />
                            <defs>
                                <pattern id="pattern0_149_75" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_149_75" transform="scale(0.0111111)" />
                                </pattern>
                                <image id="image0_149_75" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR4nO3cvUrEQBiF4W8t/IGZdGGmEGxSnRvVQmRbGy/CYvGOrARRwVKJWtho5c6Yk/eB7QQ/Xg5Zi2AEAAAAAAAAFmY6GlK5zKk85FRfci7XEacnva9yjLwbcn37/vmMjb1G/gid6tNf/ZaVm36M/BX6sfeF9pGH+ZPKVe8r1xB5N/9c70sXTIdDqre/Rc6p3EWcHfe+dMFE5P0jMpE9iMcFkS2IJRPZglgykS2IJRPZglgykS2IJRPZglgykS2IJRPZglgykS2IJRPZwsTLLS3kXC94g6iBIdd73iAitI+c6zmPjiYmvgzbEX9DE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWDaxLYllE9uSWHY7xG6Il3T+Wey6bXnRmv9l5nNEbHpfuYLY5TUiDnpf6B871Zvel5nGrtv5cTEveY48jmPqfZWzDc9lAAAAAADC2TsHapabz52pEgAAAABJRU5ErkJggg==" />
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-bold text-[20px]">My Bookings</h1>
            </div>
            {/* Tab Components */}
            <div>
                <BookingTab bookingData={bookingData}></BookingTab>
            </div>
        </div>
    );
};

export default Bookings;