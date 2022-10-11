import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Icon from './Icon.js';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickTime, setClickTime] = useState(0);
  const [times, setTimes] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleClick = (e) => {
    if (clickTime === 0) {
      setClickTime(new Date().getTime());
    } else if (new Date().getTime() - clickTime < 800) {
      createIcon(e);
      setClickTime(0);
    } else {
      setClickTime(new Date().getTime());
    }
  };

  const createIcon = (e) => {
    setIsClicked(true);

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    setLeft(xInside);
    setTop(yInside);

    setTimes((prev) => prev + 1);

    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div className="App">
      <h3>
        Double click on the image to{' '}
        <Icon icon={<FaHeart />} className="icon" /> it.
      </h3>
      <small>
        You liked it
        <span> {times} </span>
        times
      </small>
      <div className="loveMe" onClick={(e) => handleClick(e)}>
        {isClicked && (
          <Icon icon={<FaHeart />} className="icon" style={{ top, left }} />
        )}
      </div>
    </div>
  );
}

export default App;