import React from 'react';
import { data } from './data';
import { DisplayItemComponent } from "./components/DisplayItemComponent/DisplayItemComponent";
import './App.scss';

function App() {
  return (
    <div className="app">
      {data.map((item, index) => <DisplayItemComponent key={index} data={item}/>)}
    </div>
  );
}

export default App;
