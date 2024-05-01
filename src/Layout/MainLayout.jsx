import { Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

// TODO: Add skip badge
const MainLayout = () => {
    // const { sessionData } = useContext(AuthContext)
    // console.log("Getting session Data from anywhere", sessionData);

    return (
        <div className="max-w-[600px]">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;