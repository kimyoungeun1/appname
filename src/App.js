import { useState, useRef } from 'react';
import './App.css';


function App() {
  const [snumber, setsnumber] = useState(0);
  const rnumber = useRef(0);

  const snumberup = () =>{
    setsnumber(snumber+1);
  }
  
  const rnumberup = () =>{
    rnumber.current = rnumber.current + 1;
    console.log('rnumber', rnumber.current);
  }
  
  return (
    <div className="App">

      <button onClick = {snumberup}>useState로 변수를 +1</button>
      <h1>useState로 관리되는 변수는 {snumber}입니다.</h1>
      <p>상태 증가와 함게 렌더링도 된다.</p>
      <hr></hr>

      <button onClick = {rnumberup}>useRef로 변수를 + 1</button>
      <h1>useRef로 관리되는 변수는 {rnumber.current}입니다.</h1>
      <p>변수 변화는 되지만, 렌더링은 안됩니다.</p>
      <p>즉, 계산은 하지만, 레더링 시키고 싶지 않을 경우에 사용</p>
    </div>
  );
}

export default App;