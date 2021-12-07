import { useState, useEffect, useCallback } from "react";

const initialValues = {
  n0: "",
  n1: "",
  n2: "",
  n3: "",
  n4: "",
  n5: "",
  unique: []
};

export function Combinations({ data, isUp, close }) {

  const [counter, setCounter] = useState(null);
  const [values, setValues] = useState(initialValues);

  const handleEscape = useCallback(e => {
    if (e.keyCode === 27) close()
  }, [close]);

  useEffect(() => {
    if (isUp) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
      setValues(initialValues);
    } 
  }, [handleEscape, isUp]);

  useEffect(() => {
    if(isUp) {
      let count = 0;
      data.forEach(element => {
        if(checker(element, values.unique)) {
          count++;
        }
      });
      setCounter(count);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.unique]); 
  const handleInputChange = (event) => {
    if(event.target.value > 49) event.target.value = 49;
    if(event.target.value < 1 && event.target.value!=="") event.target.value = 1;
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: Number(value) > 0 ? Number(value) : "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { unique, duplicate } = checkUniqueNumbers(Object.values(values).slice(0,-1));
    const clear = {};
    if(unique.length >= 0) {
      duplicate.forEach(index => {
        clear["n"+index] = "";
      });
      setValues({
        ...values,
        ...clear,
        unique: unique,
      });
    }
  }

  const checkUniqueNumbers = (array) => {
    let uniqueNumbers = [];
    let duplicateIndexs = [];
    array.forEach((element, index) => {
      if (!uniqueNumbers.includes(element) && element!=="") {
        uniqueNumbers.push(element);
      } else {
        duplicateIndexs.push(index);
      }
    });
    return { unique: uniqueNumbers, duplicate: duplicateIndexs };
  }
  
  const checker = (a, b) => {
    return b.every(i => a.includes(i));
  }

  return isUp ? (
    <div
    className="modal-backdrop"
    onClick={() => {
      close();
    }}
    >
      <div
        className="modal-content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>
        <h1>Combinations</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={values.n0}
            onChange={handleInputChange}
            name="n0"
            min={1} max={49}
          />
          <input
            type="number"
            value={values.n1}
            onChange={handleInputChange}
            name="n1"
            min={1} max={49}
          />
          <input
            type="number"
            value={values.n2}
            onChange={handleInputChange}
            name="n2"
            min={1} max={49}
          />
          <input
            type="number"
            value={values.n3}
            onChange={handleInputChange}
            name="n3"
            min={1} max={49}
          />
          <input
            type="number"
            value={values.n4}
            onChange={handleInputChange}
            name="n4"
            min={1} max={49}
          />
          <input
            type="number"
            value={values.n5}
            onChange={handleInputChange}
            name="n5"
            min={1} max={49}
          />
          <button type="submit"> Check </button>
        </form>
        {values.unique.length > 0 ? <p>your number(s) have been drawn {counter} time(s)</p> : <p>there were {data.length} draws</p>}
      </div>
    </div>
  ) : null;
}

export default Combinations;