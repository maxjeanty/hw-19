import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Table from './components/Table'



function App() {
  return (
    <>
    <Header/>

        <div className="App"> <h1>app</h1>
        
         <Table/>
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
    </div>
    </>
  );
}

export default App;
