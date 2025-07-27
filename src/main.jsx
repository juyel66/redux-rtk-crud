import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { Provider } from 'react-redux';
import store from './store.js';
import Home from './Components/Home.jsx';
import Register from './Components/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/register",
    element: <Register></Register>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
      <RouterProvider router={router} />,
  </Provider>
  </StrictMode>,
)
