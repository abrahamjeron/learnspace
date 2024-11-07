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
        <div className="w-full bg-[#F6F6F5] rounded-l-2xl p-6 h-screen">
            <div className="flex justify-between h-[10%] items-center">
                <h1 className="text-[1.5rem] w-[350px] font-semibold px-6">{Course[1].courseName}</h1>
                <input type="text" placeholder="search" className="bg-[#D9D9D9] h-10 w-60 rounded-3xl" />
            </div>
            <div className="flex justify-between mt-4 h-[10%]  ">
                <div className="flex items-end">
                    <p className="px-6 font-medium">Module-1</p>
                    <p>{modules[0].title}</p>
                </div>

                <div className="flex space-x-2">
                    <div className="bg-[#D9F6F9] px-10 py-4 rounded-3xl font-medium flex-col text-center ">
                        <h1 className=" text-[1.5rem] font-extrabold " >24</h1>
                        <p className="text-[#404040] font-normal ">Total</p>
                    </div>
                    <div className="bg-[#C4FAC6] px-4 py-4 rounded-3xl font-medium flex-col text-center ">
                        <h1 className=" text-[1.5rem] font-extrabold " >20</h1>
                        <p className="text-[#404040]  font-normal">Completed</p>
                    </div>
                    <div className="bg-[#D9D9D9] px-10 py-4 rounded-3xl font-medium flex-col text-center ">
                        <h1 className=" text-[1.5rem] font-extrabold " >4</h1>
                        <p className="text-[#404040]  font-normal">Left</p>
                    </div>
                </div>
            </div>

            {/* Scrollable div for mapped data */}
            <div className="mt-8 ml-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 w-full px-10 mb-10 h-[70%] overflow-y-scroll">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className={`bg-white p-5 mb-4 rounded-3xl shadow-md max-w-[370px] min-w-[330px] min-h-[220px] relative ${
                            index % 2 === 0 ? "top-[-20px]" : "top-[90px]"
                        }`}
                    >
                        <h2 className="text-[1.5rem] w-[185px] font-semibold">{module.title}</h2>
                        <p className="mt-2 text-black text-[0.9rem]">{module.description}</p>
                        <div className="flex justify-between items-center mt-5">
                            <div className="bg-button1 text-[#5d5d5d] text-[0.8rem] w-24 flex justify-center py-2 rounded-2xl">
                                {module.status}
                            </div>
                            <div
                                className="bg-[#EBEBEB] flex items-center w-14 h-8 rounded-2xl cursor-pointer ml-4 p-1"
                                onClick={handleToggle}
                            >
                                <img
                                    src={cross}
                                    alt="cross"
                                    className={`h-6 transition-transform duration-300 ${
                                        isToggled ? "translate-x-8 opacity-0" : "translate-x-0 opacity-100"
                                    }`}
                                />
                                <img
                                    src={tick}
                                    alt="tick"
                                    className={`h-6 transition-transform duration-300 ${
                                        isToggled ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                                    }`}
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
