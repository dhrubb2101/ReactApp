// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';
import MyCounterComp from './components/MyCounterComp';
import MyCSSComp from './components/MyCSSComp';
import MyEventComp from './components/MyEventComp';
import MyEventTwoComp from './components/MyEventTwoComp';
import MyInfoComp from './components/MyInfoComp';
import MyStateComp from './components/MyStateComp';
import MyImagesComp from './components/MyImagesComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome You All in React Sessions</h1>
      {/* <FunctionComp empName="Praveen" post="FullStack developer"/> */}
      {/* <ClassComp empName="Rajeev" post="MERN developer"/> */}
      {/* <MyEventComp /> */}
      {/* <MyEventTwoComp/> */}
      {/* <MyStateComp/> */}
      {/* <MyInfoComp empName="Dhrubb" post="MERN developer" company ="xAI" address="Noida" contact="nada" gender="male"/> */}
      {/* <MyCounterComp/> */}
      <MyCSSComp />
      <MyImagesComp/>
    </div>);
}

export default App;
