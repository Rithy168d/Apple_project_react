import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container-width">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
