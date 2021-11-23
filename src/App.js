import { useState, useEffect } from "react";
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
  
  const [histogramModal, toggleHistogramModal] = useState(false);
  const [combinationsModal, toggleCombinationsModal] = useState(false);

  useEffect(() => {
    if(selected.length === 6) {
      //disable checkboxes ??
    }
  }, [selected])

  const getNumbersCheckboxes = numbers => numbers.map(number => (
    <div key={number}>
      <input 
        name={number} 
        type="checkbox" 
        id={number} 
        onChange={handleChange}/>
      <label for={number}>{number}</label>
    </div>
  ));

  const openModal = (e) => {
    e.target.value === "histogram" ? toggleHistogramModal(!histogramModal) : toggleCombinationsModal(!combinationsModal);
  }

  const addToSelected = (number) => {
    setSelected(prevSelected => [...prevSelected, number]);
  }

  const removeFromSelected = (number) => {
    setSelected(prevSelected => [...prevSelected.filter(n => n!== number)]);
  }

  const handleChange = (e) => {
    !e.target.checked ? removeFromSelected(e.target.id) : (selected.length < 6 ? addToSelected(e.target.id) : doNotAddToSelected(e));
  }

  const doNotAddToSelected = (e) => {
    console.log("Selected 6 numbers. It is enought.");
    e.target.checked = false;
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
          <button>draw</button>
          <button>clear</button>
        </div>
        <div className="lotto-checkboxes">
          {getNumbersCheckboxes(numbers)}
        </div>
        <p>Wybrane: {selected.map(number => number+" ")}</p>
        <div className="results">results</div>
      </main>
      <Histogram
        isUp={histogramModal}
        close={() => {
        toggleHistogramModal(false);
        }}
      />
      <Combinations
        isUp={combinationsModal}
        close={() => {
        toggleCombinationsModal(false);
        }}
      />
    </div>
  );
}

export default App;
