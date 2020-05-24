import React, { useState } from 'react';
import { data, blend } from './data';
import { DisplayItemComponent } from "./components/DisplayItemComponent/DisplayItemComponent";
import './App.scss';

function App() {

  const isMobile = window.innerWidth < 500 ? true : false;

  const [color, setColor] = useState({
    r: 149,
    g: 161,
    b: 165
  });

  // const [midPoints, setMidPoint] = useState(0);
  React.useEffect(() => {

    const handleScroll = () => {
      const range = 120;
      let midPoint = Math.floor((window.scrollY + (window.innerHeight / 2)));
      let active = 0;
      let fraction;
      // setMidPoint(midPoint);

      for (let i = 0; i < data.length; i++) {
        if ((midPoint - range) <= data[i].top && (midPoint + range) >= data[i].top) {
          active = i;
          break;
        }
      }

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
      style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}>
      {/* <div style={{border: '2px solid red', position: 'absolute', top : `${midPoints}px`}}>am at midPoint</div> */}
      {data.map((item, index) => <DisplayItemComponent key={index} data={item} />)}
    </div>
  );
}

export default App;
