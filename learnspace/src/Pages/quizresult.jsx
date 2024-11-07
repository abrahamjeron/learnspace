import React  from "react";
import Navbar from "../Components/quizcomponents/quizresultComponents/quizresultnav";
import Content from "../Components/quizcomponents/quizresultComponents/quizresultcontent";

function QuizResult(){
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
export default QuizResult;