import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StepOne from './components/StepOne/StepOne.jsx';
import StepTwo from './components/StepTwo/StepTwo.jsx';
import StepThree from './components/StepThree/StepThree.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
