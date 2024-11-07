import React  from "react";
import Navbar from "../Components/quizcomponents/quiznav";
import Content from "../Components/quizcomponents/quizContent";
import SideNav from "../Components/quizcomponents/quizsidenav";

function Quiz(){
    return (
        <div className="flex flex-col w-full h-screen ">
            {/* Navbar */}
            <Navbar />
            
            {/* Remaining space below the navbar */}
            <div className="overflow-y-hidden">
                <Content />
            </div>
        </div>
    )
}
export default Quiz;