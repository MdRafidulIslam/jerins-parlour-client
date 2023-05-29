import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import OrderList from "../../Pages/Dashboard/OrderList/OrderList";
import AllUsers from "../../Pages/Dashboard/AllUser/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddServices from "../../Pages/Dashboard/AddServices/AddServices";
import ManageServices from "../../Pages/Dashboard/ManageServices/ManageServices";
import AddReview from "../../Pages/Dashboard/AddReview/AddReview";
import ManageReview from "../../Pages/Dashboard/ManageReview/ManageReview";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>

            },
            {
                path: '/review',
                element: <ManageReview></ManageReview>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <OrderList></OrderList>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addservices',
                element: <AdminRoute><AddServices></AddServices> </AdminRoute>
            },
            {
                path: '/dashboard/manageservices',
                element: <AdminRoute><ManageServices></ManageServices></AdminRoute>
            },
            {
                path: '/dashboard/addreview',
                element: <AddReview></AddReview>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://jerins-parlour-server-topaz.vercel.app/bookings/${params.id}`)
            }

        ]
    }
])

export default router;