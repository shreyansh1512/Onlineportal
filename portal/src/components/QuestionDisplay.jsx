// QuestionDisplay.jsx
import React, { useState } from "react";

const QuestionDisplay = ({ question, currentQuestion, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="question-display">
      <h2>{`Question ${currentQuestion + 1} of ${totalQuestions}`}</h2>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;
