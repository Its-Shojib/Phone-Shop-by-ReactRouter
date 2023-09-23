import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-5">
                <Header></Header>
            </div>
            <div className="min-h-screen max-w-screen-xl mx-auto my-5">
                <Outlet></Outlet>
            </div>
            <div className="max-w-full">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;