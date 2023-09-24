import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Login/Login";
import ViewDetails from "../Pages/View Details/ViewDetails";
import ErrorPage from "../Pages/Error Page/ErrorPage";


let myCreatedRoute = createBrowserRouter(
    [
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('phones.json'),
            },
            {
                path:'/phones/:id',
                element: <ViewDetails> </ViewDetails>,
                loader: () => fetch('phones.json')
            },
            {
                path:'/favorite',
                element: <Favorite></Favorite>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
        ]
    }
]);



export default myCreatedRoute;