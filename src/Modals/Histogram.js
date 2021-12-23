import { useState, useEffect, useCallback } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export function Histogram({ data, isUp, close }) {

  const [histogramData, setHistogramData] = useState([]);
  const [counter, setCounter] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [displaySorted, setDisplaySorted] = useState(false);

  const colors = ["#1E90FF", "#187DE9", "#126AD2", "#0C56BC", "#0643A5", "#00308F"];

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
      setCounter([]);
      setSorted([]);
      for(let i=1; i<50; i++) {
        setCounter(prev => [...prev, {number: i, value: count(i)}]);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [histogramData]); 

  useEffect(() => {
    if(isUp) {
      setSorted([...counter].sort(( a, b ) => b.value - a.value));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  const count = (a) => {
      let count = 0;
      for(let i=0; i<histogramData.length; i++)
          if (histogramData[i]===a)
              count++;
      return count;
  };

  const handleSwitch = (event) => {
    setDisplaySorted(!displaySorted);
  };

  const checkSwitch = () => {
    return displaySorted === false ? counter : sorted;
  };

//   function getRandomColor() {
//     // R G B
//     let letters = '0123456789ABCDEF'.split('');
//     let color = '#';
//     for (let i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color; // '#FFFF' +
// }

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`number ${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

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
        <div className="switch-container">
          <label className="switch"><input type="checkbox" onChange={handleSwitch}/><div></div></label>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={checkSwitch()}>
            <XAxis dataKey="number" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={index} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p>...</p>
      </div>
    </div>
  ) : null;
}

export default Histogram;