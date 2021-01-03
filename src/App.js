import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";

function App() {
  return (    
      <div>
        <Header />
        <MainContent />
        <Footer />
        {/* <ul>
          <li>
            <input type="checkbox" id="label1"></input>
            <label for="label1">Label 1</label>
          </li>
          
          <li>
            <input type="checkbox" id="label2"></input>
            <label for="label2">Label 2</label>
          </li>
          
          <li>
            <input type="checkbox" id="label3"></input>
            <label for="label3">Label 3</label>
          </li>
        </ul> */}
      </div>
    );
}

export default App;
