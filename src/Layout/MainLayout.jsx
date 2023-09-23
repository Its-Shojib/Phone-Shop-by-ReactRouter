import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen relative">
            <div className="max-w-screen-xl mx-auto my-5">
                <Header></Header>
            </div>
            <div className=" max-w-screen-xl mx-auto my-5">
                <Outlet></Outlet>
            </div>
            <div className="min-w-full absolute bottom-0">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;