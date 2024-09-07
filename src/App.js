import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './router/index.tsx'
  import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
    <RouterProvider router={router} /> 
    <ToastContainer />
    </>
  );
}

export default App;
