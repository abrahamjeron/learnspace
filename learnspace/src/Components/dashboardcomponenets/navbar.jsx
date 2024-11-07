import React from "react";
import logo from "../../assets/logo.svg";
import profileDummy from "../../assets/profileDummy.svg";

function Navbar() {
    const UserName = 'Abraham Jeron';
    const UserEmail = 'abrahamjeron40@gmail.com';

    return (
        <div className="bg-black text-white fixed min-w-full h-[10vh] flex items-center justify-center">
            <nav className="flex items-center justify-between w-full max-w-7xl px-10">
                {/* logo */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="max-w-[40px]" />
                    <p className="text-[1.2rem]">Learn Space</p>
                </div>

                {/* navigation name */}
                <div className="flex items-center">
                    <p>Dashboard</p>
                </div>

                {/* user profile info */}
                <div className="flex items-center space-x-2">
                    <img src={profileDummy} className="max-h-[37px]" alt="Profile" />
                    <div>
                        <p className="text-[1rem]">{UserName}</p>
                        <p className="text-[0.7rem]">{UserEmail}</p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
