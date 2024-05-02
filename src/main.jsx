import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StepOne from './components/StepOne/StepOne.jsx';
import StepTwo from './components/StepTwo/StepTwo.jsx';
import StepThree from './components/StepThree/StepThree.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import ForgotPass from './components/ForgotPass/ForgotPass.jsx';
import VerificationCode from './components/VerificationCode/VerificationCode.jsx';
import ResetPass from './components/ResetPass/ResetPass.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Layout/Pages/Home/Home.jsx';
import LiveViewer from './Layout/Pages/LiveViewer/LiveViewer.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import DoctorDetails from './Layout/Pages/DoctorDetails/DoctorDetails.jsx';
import Bookings from './Layout/Pages/Bookings/Bookings.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/step1",
        element: <StepOne></StepOne>
      },
      {
        path: "/step2",
        element: <StepTwo></StepTwo>
      },
      {
        path: "/step3",
        element: <StepThree></StepThree>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "login/forgot-pass",
        element: <ForgotPass></ForgotPass>
      },
      {
        path: "login/forgot-pass/verificationCode",
        element: <VerificationCode></VerificationCode>
      },
      {
        path: "login/forgot-pass/verificationCode/resetPass",
        element: <ResetPass></ResetPass>
      },
      {
        path: "/live-viewer",
        element: <LiveViewer></LiveViewer>
      },
      {
        path: "doctor-details",
        element: <DoctorDetails></DoctorDetails>
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
