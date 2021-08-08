import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Output from "./Components/Output";
import Select from "./Components/Select";
import Text from "./Components/Text";

function App() {
  const [paras, setParas] = useState("3");
  const [format, setFormat] = useState('html');
  const [text, setText] = useState('');

  useEffect(()=> {
      axios.get('https://baconipsum.com/api/?type=all-meat&paras=' + paras + '&start-with-lorem=1'+ '&format=' + format)
          .then((response) => {
              setText(response.data);
          }).catch(function (error) {
          console.error(error);
      });
  },[paras,format]);

    function changeParas(number) {
        setParas(number);
    }

    function showHtml(choice) {
        setFormat(choice);
    }

    return (
    <div className="App container">
        <h1 className="text-center">ReactJS Text Generator</h1>
        <hr/>
        <form className="form-inline">
            <div className="form-group">
                <label>Paragraphs</label>
                <Text
                    paras={paras}
                    changingParas={changeParas}
                />
            </div>
             <div className="form-group">
                <label>Paragraphs</label>
                <Select
                    format={format}
                    changingFormat={showHtml}
                />
            </div>
        </form>
        <br/>
        <Output text = {text}/>
    </div>
  );
}

export default App;
