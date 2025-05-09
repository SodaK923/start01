import './App.css';
import { useState } from 'react';

const quizData = [
  { question: "지구는 태양을 돈다.", answer: "O" },
  { question: "1 + 1 = 3 이다.", answer: "X" },
  { question: "코끼리는 날 수 있다.", answer: "X" },
  { question: "물은 얼면 부피가 줄어든다.", answer: "X" },
];

function App(){
  const [currentIndex, setCurrentIndex]=useState(0);
  const [score, setScore]=useState(0);
  const [showResult, setShowResult]=useState(false);

  const handleAnswer=(userAnswer)=>{
    if(userAnswer===quizData[currentIndex].answer){
      setScore(score+1);
      alert("정답");
    }else{
      alert("오답");
    }

    if(currentIndex+1 < quizData.length){
      setCurrentIndex(currentIndex+1);
    }else{
      setShowResult(true);
    }
  }


  return(
    <div style={{textAlign: "center", padding: "20px"}}>
      {!showResult ? (
        <div>
          <h2>{quizData[currentIndex].question}</h2>
          <button onClick={()=>handleAnswer("O")}>O</button>
          <button onClick={()=>handleAnswer("X")}>X</button>
      </div>) : (
        <div>
          <h2>결과화면</h2>
          <p>점수: {score}/{quizData.length}</p>
          {/* onClick={()=>{setCurrentIndex()...}} 왜 이렇게 쓰는 건지 모르겠음*/}
          <button onClick={()=>{setCurrentIndex(0); setScore(0); setShowResult(false)} }>다시하기</button>
        </div>)}
    </div>
  );
}

export default App;