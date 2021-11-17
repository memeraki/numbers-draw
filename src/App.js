import './App.css';

function App() {

  const numbers = [1, 2,  3,  4,  5,  6,  7,  8,  9,  10, 
                  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                  41, 42, 43, 44, 45, 46, 47, 48, 49];

  const getNumbersCheckboxes = numbers => numbers.map(number => (
    <div key={number}>
      <input name={numbers} type="checkbox" id={number} />
      <label for={number}>{number}</label>
    </div>
  ));

  return (
    <div className="App">
      <header>
        <h1>simple lotto simulator</h1>
        <nav>
          histogram
          combinations
        </nav>
      </header>
      <main>
        <div className="lotto-buttons">
          <button>draw</button>
          <button>clear</button>
        </div>
        <div className="lotto-checkboxes">
          {getNumbersCheckboxes(numbers)}
        </div>
        <div className="results">results</div>
      </main>
    </div>
  );
}

export default App;