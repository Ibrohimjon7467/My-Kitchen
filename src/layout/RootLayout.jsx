import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className='w-full'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
