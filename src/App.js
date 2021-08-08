import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Output from "./Components/Output";
import Select from "./Components/Select";
import Text from "./Components/Text";

function App() {
  const [loremText, setLoremText] = useState(null);

  useEffect(()=> {

  },[]);

  if (!loremText) return null;

  return (
    <div className="App container">
        <h1 className="text-center">ReactJS Text Generator</h1>
        <hr/>
        <form className="form-inline">
            <div className="form-group">
                <label>Paragraphs</label>
                <Text/>
            </div>
             <div className="form-group">
                <label>Paragraphs</label>
                <Select/>
            </div>
        </form>
        <br/>
        <Output props = {loremText}/>
    </div>
  );
}

export default App;
