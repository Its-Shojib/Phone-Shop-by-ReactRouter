import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-5 flex justify-between items-center">
            <h2 className="text-3xl font-bold">Phone Shop</h2>
            <div className="flex gap-5 justify-center items-center">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-600 text-white px-2 rounded-md py-1" : ""}> 
                    Home
                </NavLink>
                <NavLink to='/favorite' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-600 text-white px-2 rounded-md py-1" : ""}> 
                    Favorite
                </NavLink>
                <NavLink to='/login' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-600 text-white px-2 rounded-md py-1" : ""}> 
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Header;