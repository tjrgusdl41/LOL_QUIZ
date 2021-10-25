import React, { useState } from "react";
import "./App.css";
function App() {
  const [currentNo, setcurrentNo] = useState(0);
  const [showResult, setshowResult] = useState(false);
  const [score, setscore] = useState(0);
  const handleclick = (isCorrect) => {
    // const answer = e.target.value;
    console.log(isCorrect);
    if (isCorrect) {
      setscore((score) => score + 1);
    }
    if (currentNo === quiz.length - 1) {
      setshowResult(true);
    } else {
      setcurrentNo((currentNo) => currentNo + 1);
    }
  };
  const quiz = [
    {
      id: 1,
      question: "다음중 리그오브레전드 챔피언이 아닌것은?",
      answer: [
        { text: "솔저", isCorrect: true },
        { text: "벡스", isCorrect: false },
        { text: "카사딘", isCorrect: false },
        { text: "룰루", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "다음중 리그오브레전드 프로게이머가 아닌사람은",
      answer: [
        { text: "페이커", isCorrect: false },
        { text: "쇼메이커", isCorrect: false },
        { text: "감스트", isCorrect: true },
        { text: "트할", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "다음중 리그오브레전드 아이템이 아닌것은?",
      answer: [
        { text: "절정의화살", isCorrect: false },
        { text: "란두인의 예언", isCorrect: false },
        { text: "도란의 검", isCorrect: false },
        { text: "전사의 심장", isCorrect: true },
      ],
    },
  ];
  const convertedscore = Math.floor((score / quiz.length) * 100);
  return (
    <div className="container">
      {showResult ? (
        <div className="app">
          <h1 className="result-header">당신의 점수는?</h1>
          <p className="result-score">{convertedscore}</p>
        </div>
      ) : (
        <div className="app">
          <div className="question">
            <h1 className="question-header">
              <span>{quiz[currentNo].id}</span>/{quiz.length}
            </h1>
            <div className="question-text">{quiz[currentNo].question}</div>
            <div className="answer-section">
              {quiz[currentNo].answer.map((answer) => (
                <button
                  value={answer.text}
                  onClick={() => handleclick(answer.isCorrect)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
