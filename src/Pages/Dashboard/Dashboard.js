import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile mt-10 bg-accent">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Order</Link></li>
                    <li><Link to='/dashboard/history'>History</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;