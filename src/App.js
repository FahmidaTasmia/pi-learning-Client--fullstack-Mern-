
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
function App() {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <div className="max-w-screen-xl mx-auto  ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
