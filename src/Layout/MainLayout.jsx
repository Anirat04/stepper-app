import { Outlet } from "react-router-dom";
import BottomNav from "../components/Shared/BottomNav/BottomNav";

// TODO: Add skip badge
const MainLayout = () => {
  // const { sessionData } = useContext(AuthContext)
  // console.log("Getting session Data from anywhere", sessionData);


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
