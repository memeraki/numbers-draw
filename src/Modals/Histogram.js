import { useState, useEffect, useCallback } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export function Histogram({ data, isUp, close }) {

  const [histogramData, setHistogramData] = useState([]);
  const [counter, setCounter] = useState([]);

  const handleEscape = useCallback(e => {
    if (e.keyCode === 27) close()
  }, [close]);

  useEffect(() => {
    if (isUp) {
      document.addEventListener('keydown', handleEscape, false);
      setHistogramData(data.flat());
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleEscape, isUp]); 

  useEffect(() => {
    if(isUp) {
      setCounter([])
      for(let i=1; i<50; i++) {
        setCounter(prev => [...prev, {number: i, value: count(i)}]);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [histogramData]); 

  const count = (a) => {
      let count = 0;
      for(let i=0; i<histogramData.length; i++)
          if (histogramData[i]===a)
              count++;
      return count;
  };

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
        <h1>Histogram</h1>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={counter}>
            <XAxis dataKey="number" />
            <YAxis />
              <Tooltip />
              <Bar dataKey="value" >
                {data.map((entry, index) => (
                  <Cell key={index} fill={getRandomColor()}/>
                ))}
              </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  ) : null;
}

export default Histogram;