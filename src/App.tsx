import React from 'react';
import { Body } from "./AppStyles"
import Navbar from './Components/Navbar';
import InfoCard from './Components/InfoCard';

function App() {
  return (
      <div className="App">
        <Body/>
        <Navbar />
        <InfoCard data={dataInfo} />
      </div>
  );
}

export default App;

const dataInfo = [
  {
    image: "texto01",
    imageDescription: "texto01",
    description: ["texto", "texto", "texto", "texto"]
  },
  {
    image: "texto02",
    imageDescription: "texto02",
    description: ["texto", "texto", "texto", "texto"]
  },
  {
    image: "texto03",
    imageDescription: "texto03",
    description: ["texto", "texto", "texto", "texto"]
  },
]