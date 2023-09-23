import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="relative">
            <div className="max-w-screen-xl mx-auto">
                <Header></Header>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="min-w-full absolute -bottom-[39px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;