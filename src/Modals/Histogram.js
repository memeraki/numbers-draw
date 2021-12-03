import { useEffect, useCallback } from "react";

export function Histogram({ data, isUp, close }) {

  const handleEscape = useCallback(e => {
    if (e.keyCode === 27) close()
  }, [close]);

  useEffect(() => {
    if (isUp) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isUp]);

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
        <p>...</p>
      </div>
    </div>
  ) : null;
}

export default Histogram;