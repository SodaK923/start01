import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import utils from './utils';
import { helper1, helper2 } from './utils';
import Button from './Button';
import Counter from './Counter';

function Greeting(){
  return <h1>hello, world</h1>
}

function GreetingProp(props){
  return <h1>{props.name}</h1>
}

function GreetingProps(props){
  return <h1>{props.name}의 나이는 {props.age}입니다.</h1>
}

function Greeting2(props){
  if(props.isLoggedIn){
    return <h1>Welcome back!</h1>;
  }else{
    return <h1>Please Sign up.</h1>;
  }
}

function NumberList(props){
  const numbers=props.numbers;
  const listItems=numbers.map((number)=>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return(
    <ul>{listItems}</ul>
  );
}

function Fruits(props){
  const fruitList=props.fruits.map((fruit)=>
    // 문자열이면 toString() 안 써도 됨
    <li key={fruit.toString()}>
      {fruit}
    </li>
  );
  return(
    <ul>{fruitList}</ul>
  );
}

function App() {
  const name="john";
  const element=<h1>Hello, {name}!</h1>
  const userIsLoggedIn=true;
  const numbers=[1,2,3,4,5];
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];

  return (
    <div className="App">
      Hello React!<br/>
      <Button /><Button /><Button /><br/>
      <Counter /><br/>
      {element}{element}<br/>
      <Greeting /><Greeting />
      <GreetingProp name="Tom" /><GreetingProp name="Alice" /><br/>
      <GreetingProps name="Tom" age={15} />
      <Greeting2 isLoggedIn={userIsLoggedIn} />
      <NumberList numbers={numbers} />
      <Fruits fruits={fruits} />
      <div className={styles.container}>Hello, World</div>
      <div className="container">Hello, World</div>
      <img src={logo} className="App-logo" alt="logo" />


    </div>
  );
}

export default App;
