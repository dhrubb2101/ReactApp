// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';
import MyEventComp from './components/MyEventComp';

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
      <FunctionComp empName="Praveen" post="FullStack developer"/>
      <ClassComp empName="Rajeev" post="MERN developer"/>
      <MyEventComp />
    </div>
  );
}

export default App;
