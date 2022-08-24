import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [fNum,setfNum] = useState(0);
  const [sNum,setsNum] =useState(0);
  const [rslt,setRslt] = useState(0);

  const handleFChange=(e)=>{
    setfNum(e.target.value);
  }

  const handleSChange=(e)=>{
    setsNum(e.target.value);
  }

  const showAdd =  (e) =>{
    e.preventDefault();
    setRslt(parseInt(fNum) + parseInt(sNum));
  }
  const showSub =  (e) =>{
    e.preventDefault();
    setRslt(parseInt(fNum) - parseInt(sNum));
  }
  const showMul =  (e) =>{
    e.preventDefault();
    setRslt(parseInt(fNum) * parseInt(sNum));
  }
  const showDiv =  (e) =>{
    e.preventDefault();
    setRslt(parseInt(fNum) / parseInt(sNum));
  }


  return (
    <div className="App">
      <h1>Registration Form</h1>
    <form>
    <input type="number" value={fNum} onChange={handleFChange} /> &nbsp;
    <input type="number" value={sNum} onChange={handleSChange} /> &nbsp;
    <br />  <br />
   <button onClick={showAdd}>Add</button>&nbsp;
   <button onClick={showSub}>Subtract</button>&nbsp;
   <button onClick={showMul}>Multiply</button>&nbsp;
   <button onClick={showDiv}>Divide</button>&nbsp;
   <br />  <br />
    <div>Result: <span>{rslt}</span></div>
    </form>
    </div>
  );
}

export default App;
