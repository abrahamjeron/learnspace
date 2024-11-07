import React, { useState } from "react";
import modules from "../../dummydatas/modules";
import cross from "../../assets/Multiply.svg";
import tick from "../../assets/tick.svg";
import Course from "../../dummydatas/courses";

function Content() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <div className="w-full bg-contentbg rounded-l-2xl p-6 h-screen">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between h-[10%] items-center">
                <h1 className="text-[1.5rem] font-semibold px-6 w-full sm:w-auto">
                    {Course[1].courseName}
                </h1>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#D9D9D9] h-10 w-full sm:w-60 rounded-3xl mt-4 sm:mt-0"
                />
            </div>

            {/* Module Info Section */}
            <div className="flex flex-wrap justify-between mt-4 h-[10%]">
                <div className="flex items-center">
                    <p className="px-6 font-medium">Module-1</p>
                    <p>{modules[0].title}</p>
                </div>
                <div className="flex space-x-2 mt-4 sm:mt-0">
                    <div className="bg-[#D9F6F9] px-8 py-4 rounded-3xl font-medium">24</div>
                    <div className="bg-[#C4FAC6] px-8 py-4 rounded-3xl font-medium">14</div>
                    <div className="bg-[#D9D9D9] px-8 py-4 rounded-3xl font-medium">8</div>
                </div>
            </div>

            {/* Scrollable Modules Section */}
            <div className="mt-8 ml-4 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4 h-[70%] overflow-y-scroll">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-3xl shadow-md max-w-[370px] min-w-[280px] min-h-[220px] relative"
                    >
                        <h2 className="text-[1.5rem] font-semibold mb-2">{module.title}</h2>
                        <p className="text-black text-[0.9rem] mb-4">{module.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <div className="bg-button1 text-[#5d5d5d] text-[0.8rem] w-24 flex justify-center py-2 rounded-2xl">
                                {module.status}
                            </div>
                            {/* Toggle Switch */}
                            <div
                                className="bg-[#EBEBEB] flex items-center w-14 h-8 rounded-2xl cursor-pointer p-1 transition-transform duration-300"
                                onClick={handleToggle}
                            >
                                <img
                                    src={cross}
                                    alt="cross"
                                    className={`h-6 ${isToggled ? "translate-x-8 opacity-0" : "translate-x-0 opacity-100"}`}
                                />
                                <img
                                    src={tick}
                                    alt="tick"
                                    className={`h-6 ${isToggled ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
