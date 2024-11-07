import React, { useState } from "react"
import modules from "../../../dummydatas/modules"
import { ChevronDown, ChevronUp } from "lucide-react"

// Sample quiz data - replace with your actual data
const quizData = [
  {
    question: "How is Computer Science Different from IT?",
    options: [
      "Computer Science focuses on programming and algorithms, while IT focuses on managing and supporting technology systems.",
      "IT deals with creating hardware, and Computer Science is about software development.",
      "Computer Science is focused on theoretical aspects of computing, while IT handles practical applications in businesses.",
      "IT professionals create operating systems, whereas Computer Science professionals focus on cybersecurity."
    ],
    correctAnswer: 0,
    userAnswer: 2,
    explanation: "Computer Science primarily deals with the theoretical foundations of computing, focusing on programming, algorithms, data structures, and computational theory. CS is about understanding how computers process information and involves designing software, developing new technology, and solving complex computational problems. It covers areas like artificial intelligence, machine learning, software development, and computer security."
  },
  {
    question: "How is Computer Science Different from IT?",
    options: [
      "Computer Science focuses on programming and algorithms, while IT focuses on managing and supporting technology systems.",
      "IT deals with creating hardware, and Computer Science is about software development.",
      "Computer Science is focused on theoretical aspects of computing, while IT handles practical applications in businesses.",
      "IT professionals create operating systems, whereas Computer Science professionals focus on cybersecurity."
    ],
    correctAnswer: 0,
    userAnswer: 2,
    explanation: "Computer Science primarily deals with the theoretical foundations of computing, focusing on programming, algorithms, data structures, and computational theory. CS is about understanding how computers process information and involves designing software, developing new technology, and solving complex computational problems. It covers areas like artificial intelligence, machine learning, software development, and computer security."
  },
  {
    question: "How is Computer Science Different from IT?",
    options: [
      "Computer Science focuses on programming and algorithms, while IT focuses on managing and supporting technology systems.",
      "IT deals with creating hardware, and Computer Science is about software development.",
      "Computer Science is focused on theoretical aspects of computing, while IT handles practical applications in businesses.",
      "IT professionals create operating systems, whereas Computer Science professionals focus on cybersecurity."
    ],
    correctAnswer: 0,
    userAnswer: 2,
    explanation: "Computer Science primarily deals with the theoretical foundations of computing, focusing on programming, algorithms, data structures, and computational theory. CS is about understanding how computers process information and involves designing software, developing new technology, and solving complex computational problems. It covers areas like artificial intelligence, machine learning, software development, and computer security."
  },
  {
    question: "How is Computer Science Different from IT?",
    options: [
      "Computer Science focuses on programming and algorithms, while IT focuses on managing and supporting technology systems.",
      "IT deals with creating hardware, and Computer Science is about software development.",
      "Computer Science is focused on theoretical aspects of computing, while IT handles practical applications in businesses.",
      "IT professionals create operating systems, whereas Computer Science professionals focus on cybersecurity."
    ],
    correctAnswer: 0,
    userAnswer: 2,
    explanation: "Computer Science primarily deals with the theoretical foundations of computing, focusing on programming, algorithms, data structures, and computational theory. CS is about understanding how computers process information and involves designing software, developing new technology, and solving complex computational problems. It covers areas like artificial intelligence, machine learning, software development, and computer security."
  },
  {
    question: "How is Computer Science Different from IT?",
    options: [
      "Computer Science focuses on programming and algorithms, while IT focuses on managing and supporting technology systems.",
      "IT deals with creating hardware, and Computer Science is about software development.",
      "Computer Science is focused on theoretical aspects of computing, while IT handles practical applications in businesses.",
      "IT professionals create operating systems, whereas Computer Science professionals focus on cybersecurity."
    ],
    correctAnswer: 0,
    userAnswer: 2,
    explanation: "Computer Science primarily deals with the theoretical foundations of computing, focusing on programming, algorithms, data structures, and computational theory. CS is about understanding how computers process information and involves designing software, developing new technology, and solving complex computational problems. It covers areas like artificial intelligence, machine learning, software development, and computer security."
  },
  // Add more questions as needed
]

function QuestionCard({ question, index, totalQuestions, showExplanation, toggleExplanation }) {
  const isCorrect = question.userAnswer === question.correctAnswer
  
  return (
    <div className="flex gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex-grow">
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <span>Question {index + 1} of {totalQuestions}</span>
          <span>Mark {isCorrect ? "1" : "0"}/1</span>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">{question.question}</h3>
          
          <div className="space-y-3">
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`p-3 rounded-lg flex items-center gap-3
                  ${optionIndex === question.correctAnswer ? 'bg-[#C4FAC6]' : ''}
                  ${optionIndex === question.userAnswer && optionIndex !== question.correctAnswer ? 'bg-red-200' : ''}
                  ${optionIndex !== question.correctAnswer && optionIndex !== question.userAnswer ? 'bg-white' : ''}
                `}
              >
                <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-sm">
                  {optionIndex + 1}
                </span>
                <p>{option}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-72 flex flex-col">
        <button
          onClick={() => toggleExplanation(index)}
          className="bg-white rounded-xl shadow-md p-4 text-left flex items-center justify-between hover:bg-gray-50"
        >
          <span className="font-medium">Show Explanation</span>
          {showExplanation ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {showExplanation && (
          <div className="mt-4 p-4 bg-white rounded-xl shadow-md">
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Content() {
  const score = 3
  const [expandedExplanations, setExpandedExplanations] = useState({})

  const toggleExplanation = (index) => {
    setExpandedExplanations(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="w-full bg-[#F6F6F5] rounded-l-2xl p-6 overflow-y-scroll h-screen">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-[2rem] text-[#D44120] font-semibold px-6">Report</h1>
          <h2 className="text-[1.5rem] font-semibold px-6">{modules[0].title}</h2>
        </div>
        <div className="text-center px-6">
          <h3 className="text-lg font-medium">Score</h3>
          <p className="text-2xl font-semibold">{score}/5</p>
        </div>
      </div>
      
      <div className="px-6">
        {quizData.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
            totalQuestions={quizData.length}
            showExplanation={expandedExplanations[index]}
            toggleExplanation={toggleExplanation}
          />
        ))}
      </div>
    </div>
  )
}