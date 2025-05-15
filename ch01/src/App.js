import { useReducer } from "react";

// 리듀서 함수 정의
// const reducer=(state: 현재상태, action: 상태를 어떻게 바꿀 지에 대한 지시)
// action.type: 보내는 명령
const reducer=(state, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state, count: state.count+1
      };
    case 'CHANGE_TEXT':
      return{
        ...state, text: action.payload
      };
    case 'TOGGLE':
      return{
        ...state, isOn: !state.isOn
      }
    case 'RESET':
      return{
        count: 0,
        text: "안녕",
        isOn: false
      };
    default:
      return state;
  }
};


// 2. 초기 상태
// 초기값
const initialState={count: 0, text: "안녕", isOn: true};

const Counter=()=>{
  // const [현재 상태값, 상태를 바꾸라고 명령하는 함수]=useReducer(reducer함수, 초기값);
  const [state, dispatch]=useReducer(reducer, initialState);

  return (
    <div>
      {/* 4. 변경된 데이터를 그때그때 보여줄 state변수 기술*/}
      {/* state.count: 현재 상태의 카운트 */}
      <p>Count: {state.count}</p>
      <p>Name: {state.text}</p>
      <p>Toggle: {state.isOn}</p>
      {/* 5. 디스패치 함수를 사용하여 액션을 보냄 */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'CHANGE_TEXT', payload: '소다?' })}>Change</button>
      <button onClick={()=>dispatch({type: 'TOGGLE'})}>Toggle</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};


export default Counter;