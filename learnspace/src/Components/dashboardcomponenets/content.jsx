import React from "react";
import Courses from "../../dummydatas/courses";
import Resume from "../../assets/resume.svg";

function Content() {
    return (
        <div className="w-full bg-[#F6F6F5] rounded-l-2xl p-6 overflow-y-scroll h-screen">
            <h1 className="text-[2rem] font-semibold px-6">Courses</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-10">
                <div className="bg-white p-5 mb-4 rounded-3xl shadow-md max-w-[370px] min-w-[330px] min-h-[220px]">
                    Start creating courses
                </div>
                {Courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 mb-4 rounded-3xl shadow-md max-w-[370px] min-w-[330px] min-h-[220px] relative"
                    >
                        {/* Button with Resume image */}
                        <button className="absolute top-0 right-0 mt-4 mr-4">
                            <img src={Resume} alt="Resume" className="w-10 h-10" />
                        </button>
                        
                        <img
                            src={course.image}
                            alt={course.courseName}
                            className="w-10 h-10 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-[1.2rem] w-[185px] font-semibold">{course.courseName}</h2>
                        <p className="mt-2 text-gray-600 text-[0.7rem]">{course.description}</p>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">{course.progress}%</p>
                            <div className="w-[300px] mt-1 bg-gray-200 rounded-full h-3.5">
                                <div
                                    className="bg-[#BAF9FF] h-3.5 rounded-full"
                                    style={{ width: `${course.progress}%` }}  
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
