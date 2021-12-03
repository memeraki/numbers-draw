import { useState, useEffect, useRef } from "react";
import Combinations from './Modals/Combinations';
import Histogram from './Modals/Histogram';

import './App.css';

function App() {

  const numbers = [1, 2,  3,  4,  5,  6,  7,  8,  9,  10, 
                  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                  41, 42, 43, 44, 45, 46, 47, 48, 49];

  const [selected, setSelected] = useState([]);
  const [drawn, setDrawn] = useState([]);
  const [compared, setCompared] = useState({same: [], sum: -1});
  const isMounted = useRef(false);
  
  const [histogramModal, toggleHistogramModal] = useState(false);
  const [combinationsModal, toggleCombinationsModal] = useState(false);

  const [data, setData] = useState([]);
  
  useEffect(() => {
    // https://justcors.com
    let cors = "https://justcors.com/tl_bc01f9c/";
    let file = "http://www.mbnet.com.pl/dl.txt";
    fetch(cors + file)
    .then((response) => response.text())
    .then((result) => {
      setData(result.split('\r\n').map(cur => cur.split(/ |,/).slice(2).map(el => Number(el))));
    }).catch(error => {
      setData("error");
      console.log(error);
    });
  }, [])

  useEffect(() => {
    disableUnchecked(); // think about this ;-)
  }, [selected])

  useEffect(() => {
    if (isMounted.current) {
      drawn.length > 0 ? setCompared(compareArrays(selected, drawn)) : setCompared({same: [], sum: -1});
    } else {
      isMounted.current = true;
    }
  }, [drawn])

  const getNumbersCheckboxes = numbers => numbers.map(number => (
    <div key={number}>
      <input 
        name={number} 
        type="checkbox" 
        id={number} 
        onChange={handleChange}/>
      <label htmlFor={number}>{number}</label>
    </div>
  ));

  const openModal = (e) => {
    e.target.value === "histogram" ? toggleHistogramModal(!histogramModal) : toggleCombinationsModal(!combinationsModal);
  }

  const addToSelected = (number) => {
    setSelected(prevSelected => [...prevSelected, Number(number)]);
  }

  const removeFromSelected = (number) => {
    setSelected(prevSelected => [...prevSelected.filter(n => n!== Number(number))]);
  }

  const doNotAddToSelected = (e) => {
    e.target.checked = false;
  }

  const handleChange = (e) => {
    !e.target.checked ? removeFromSelected(e.target.id) : (selected.length < 6 ? addToSelected(e.target.id) : doNotAddToSelected(e));
  }

  const disableUnchecked = () => {
    Array.from(document.querySelectorAll("input[type=checkbox]"))
       .forEach((checkbox) => {
        !checkbox.checked && selected.length === 6 ? checkbox.disabled = true : checkbox.disabled = false;
       });
  }

  const handleClear = (e) => {
    setSelected([]);
    setDrawn([]);
    Array.from(document.querySelectorAll("input[type=checkbox]"))
       .forEach((checkbox) => {
        checkbox.checked = false;
       });
  }

  const handleDraw = () => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array.push(getRandomNumber(array));
    }
    setDrawn(array);
  }

  const getRandomNumber = (excluded = []) => {
    let num = 0;
    do 
      num = Math.floor(Math.random() * (49 - 1 + 1) + 1);
    while ( excluded.includes(num) )
    return num;
  };

  const compareArrays = (a, b) => {
    let same = [];
    let sum = 0;
    a.forEach(num => {
      if(b.includes(num)) {
        same.push(num);
        sum++;
      }
    });
    return {same: same, sum: sum};
  }

  return (
    <div className="App">
      <header>
        <h1>simple lotto simulator</h1>
        <div>
        <button onClick={openModal} value="histogram">histogram</button>
        <button onClick={openModal} value="combinations">combinations</button>
        </div>
      </header>
      <main>
        <div className="lotto-buttons">
          {selected.length === 6 && <button onClick={handleDraw}>draw</button>}
          <button onClick={handleClear}>clear</button>
        </div>
        <div className="lotto-checkboxes">
          {getNumbersCheckboxes(numbers)}
        </div>
        {selected.length > 0 && <p>Yours: {selected.sort((a,b) => a - b).map(number => number+" ")}</p>}
        {drawn.length > 0 && <p>Last drawn: {drawn.sort((a,b) => a - b).map(number => number+" ")}</p>}
        {compared.sum !== -1 && <div className="results">
          <p>you hit {compared.sum} numbers!</p>
          {compared.sum > 0  && <p>Same: {compared.same.sort((a,b) => a - b).map(number => number+" ")}</p>}
        </div>}
      </main>
      <Histogram
        data={data}
        isUp={histogramModal}
        close={() => {
        toggleHistogramModal(false);
        }}
      />
      {data.length > 0 ? <Combinations
        data={data}
        isUp={combinationsModal}
        close={() => {
        toggleCombinationsModal(false);
        }}
      /> : <p>"Loading..."</p>}
    </div>
  );
}

export default App;
