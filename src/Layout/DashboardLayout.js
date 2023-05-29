import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard'>Order list</Link></li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/alluser'>All Users</Link></li>
                                <li><Link to='/dashboard/addservices'>Add a Service</Link></li>


                                <li><Link to='/dashboard/manageservices'>Manage Services</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;