import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Error from './Pages/Error.tsx'
import SignupPage from './Pages/Signup.tsx';
import LoginPage from './Pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
  },
  {
    path: "/cadastrar",
    Component: SignupPage,
    errorElement: <Error />,
  },
  {
    path: "/entrar",
    Component: LoginPage,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
