import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import StepOne from "./components/StepOne/StepOne.jsx";
import StepTwo from "./components/StepTwo/StepTwo.jsx";
import StepThree from "./components/StepThree/StepThree.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import ForgotPass from "./components/ForgotPass/ForgotPass.jsx";
import VerificationCode from "./components/VerificationCode/VerificationCode.jsx";
import ResetPass from "./components/ResetPass/ResetPass.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Layout/Pages/Home/Home.jsx";
import LiveViewer from "./Layout/Pages/LiveViewer/LiveViewer.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import DoctorDetails from "./Layout/Pages/DoctorDetails/DoctorDetails.jsx";
import Bookings from "./Layout/Pages/Bookings/Bookings.jsx";
import SelectPackage from "./components/SelectPackage/SelectPackage.jsx";
import ReAppointment from "./components/ReAppointment/ReAppointment.jsx";
import CancAppointment from "./components/CancAppointment/CancAppointment.jsx";
import ChatCompo from "./components/ChatCompo/ChatCompo.jsx";
import VideoConsulting from "./Layout/Pages/VideoConsulting/VideoConsulting.jsx";
import DoctorReview from "./Layout/Pages/DoctorReview/DoctorReview.jsx";
import TermsConditions from "./components/Terms&Conditions/TermsConditions.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Profile from "./Layout/Pages/Profile/Profile.jsx";
import YourProfile from "./Layout/Pages/Profile/YourProfile/YourProfile.jsx";
import Settings from "./Layout/Pages/Profile/Settings/Settings.jsx";
import NotificationSettings from "./Layout/Pages/Profile/Settings/NotificationSettings/NotificationSettings.jsx";
import PasswordManager from "./Layout/Pages/Profile/Settings/PasswordManager/PasswordManager.jsx";
import ChatsLayout from "./Layout/Pages/ChatsPage/ChatsLayout.jsx";
import PopularDoctorsList from "./Layout/Pages/PopularDoctorsList/PopularDoctorsList.jsx";
import MyProfile from "./components/MyProfile/MyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "chats",
        element: <ChatsLayout></ChatsLayout>,
      },

    ],
  },
  //==============
  {
    path: "/step1",
    element: <StepOne></StepOne>,
  },
  {
    path: "/step2",
    element: <StepTwo></StepTwo>,
  },
  {
    path: "/step3",
    element: <StepThree></StepThree>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "login/forgot-pass",
    element: <ForgotPass></ForgotPass>,
  },
  {
    path: "login/forgot-pass/verificationCode",
    element: <VerificationCode></VerificationCode>,
  },
  {
    path: "login/forgot-pass/verificationCode/resetPass",
    element: <ResetPass></ResetPass>,
  },
  {
    path: "/live-viewer",
    element: <LiveViewer></LiveViewer>,
  },
  {
    path: "doctor-details/:id",
    element: <DoctorDetails></DoctorDetails>,
    // loader: ({ params }) => params.id,
  },
  {
    path: "slp",
    element: <SelectPackage></SelectPackage>,
  },
  {
    path: "reApo",
    element: <ReAppointment></ReAppointment>,
  },
  {
    path: "cancApo",
    element: <CancAppointment></CancAppointment>,
  },
  {
    path: "chat",
    element: <ChatCompo></ChatCompo>,
  },
  {
    path: "vdo-con",
    element: <VideoConsulting></VideoConsulting>,
  },
  {
    path: "/vdo-con/doc-review",
    element: <DoctorReview></DoctorReview>,
  },
  {
    path: "terms",
    element: <TermsConditions></TermsConditions>,
  },

  //==============
  {
    path: "profile/your-profile",
    element: <YourProfile></YourProfile>,
  },
  {
    path: "profile/settings",
    element: <Settings></Settings>,
  },
  {
    path: "profile/settings/notification-settings",
    element: <NotificationSettings></NotificationSettings>,
  },
  {
    path: "profile/settings/password-manager",
    element: <PasswordManager></PasswordManager>,
  },
  {
    path: "profile/privacyPolicy",
    element: <PrivacyPolicy></PrivacyPolicy>,
  },




  {
    path: "/popularDoctors",
    element: <PopularDoctorsList></PopularDoctorsList>,
  },
  {
    path: "/myProfile",
    element: <MyProfile></MyProfile>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
