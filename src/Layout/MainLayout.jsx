import { Outlet } from "react-router-dom";
import BottomNav from "../components/Shared/BottomNav/BottomNav";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import StepOne from "./Pages/GettingStartSteppers/StepOne/StepOne"

// TODO: Add skip badge
const MainLayout = () => {
  const { user } = useContext(AuthContext)
  const getWelcomeData = JSON.parse(localStorage.getItem('Welcome page'))
  console.log(getWelcomeData);
  // console.log("Getting session Data from anywhere", sessionData);

  if (user === null && getWelcomeData !== false) {
    return <StepOne></StepOne>
  }
  return (
    <>
      <div className="max-w-[600px] relative">
        <Outlet></Outlet>
        <BottomNav></BottomNav>
      </div>
    </>
  );
};

export default MainLayout;
