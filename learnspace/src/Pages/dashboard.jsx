import React from "react";
import Navbar from "../Components/dashboardcomponenets/navbar";
import SideNav from "../Components/dashboardcomponenets/sideNav";
import Content from "../Components/dashboardcomponenets/content";

function Dashboard() {
    return (
        <div className="flex flex-col w-full h-screen">
            {/* Navbar */}
            <Navbar />
            
            {/* Remaining space below the navbar */}
            <div className="flex w-full h-full">
                <Content />
                <SideNav />
            </div>
        </div>
    );
}

export default Dashboard;
