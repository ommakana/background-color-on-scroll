import React, { useState } from 'react';
import { data, blend } from './data';
import { DisplayItemComponent } from "./components/DisplayItemComponent/DisplayItemComponent";
import './App.scss';

function App() {

  const isMobile = window.innerWidth < 500 ? true : false;

  const [color, setColor] = useState({
    r: 28,
    g: 27,
    b: 28
  });

  React.useEffect(() => {

    const handleScroll = () => {
      const range = 130;
      let midPoint = Math.floor((window.scrollY + (window.innerHeight / 2)));
      let active = 0;
      let fraction;

      for (let i = 0; i <= data.length - 1; i++) {
        if (i === data.length - 1 || ((midPoint >= data[i].top - range) && (midPoint <= data[i + 1].top - range))) {
          active = i;
          break;
        }
      }

      setColor(data[active].color);

      if (midPoint <= data[active].top + range) {
        let prev = Math.max(active - 1, 0);
        fraction = (midPoint - (data[active].top - range)) / (2 * range);
        setColor(
          blend(
            data[prev].color,
            data[active].color,
            fraction
          )
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [color]);


  React.useEffect(() => {

    data.map((item) => item.top = document.getElementById(item.name).offsetTop)
  }, []);

  return (
    <div className={isMobile ? 'mobile app' : 'app'}
      // style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
      style={{ boxShadow: `inset -10vw 5vw 30vw 5vw rgb(${color.r}, ${color.g}, ${color.b})` }}
    >
      {data.map((item, index) => <DisplayItemComponent key={index} data={item} />)}
    </div>
  );
}

export default App;
