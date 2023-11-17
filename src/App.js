import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword = "sunrise"/>
      </main>
      <footer className="App-footer">
        <small>
        Coded by <a href="https://nimble-scone-366298.netlify.app/" target="_blank" rel="noreferrer"> Bukky</a> 
        and it is  Open-source on <a href="https://github.com/atinsbukol/dictionary-project" target="_blank" rel="noreferrer">Github</a> 
        and <a href="https://bukky-dictionary-project.netlify.app/" translate="_blank" rel="noreferrer"> netlify </a>
        </small>
        </footer>

      </div>
      
    </div>
  );
}


