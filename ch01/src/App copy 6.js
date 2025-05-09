import './App.css';
import React, {useState} from 'react';

// 1. 버튼 클릭 이벤트 추가하기
const MyComponent = () => {
  const[count, setCount]=useState(0);
  //let count = 0; // useState를 사용하지 않음

  const increment = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount(count-1);
  };
  const reset = () => {
    setCount(0);
  };
  const setHundred = () => {
    setCount(100);
  };

  return (
      <div>
          <p>Count: {count}</p> {/* UI가 업데이트되지 않음 */}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
          <button onClick={setHundred}>100</button>
      </div>
  );
};


function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;

// 자식 컴포넌트의 클릭이벤트를 다르게 실행하고 싶을 때 