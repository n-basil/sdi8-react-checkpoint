import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ProductCardList from './components/ProductCardList';

const url = "http://52.26.193.201:3000/products/list"

function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then(formatData);
}

function formatData(data) {
  //console.log("DATA LOG: ", data[0])
  return data
}
// Array of Objects:
  // Object
    // category: "Jackets"
    // default_price: "140"
    // description: "The So Fatigues will wake you up and fit..."
    // id: 1
    // name: "Camo Onesie"
    // slogan: "Blend in to your crowd"

function App() {
  const [searchedData, setSearchedData] = useState( [] );
  const [selectedState, setSelectedState] = useState( false ) ;

  useEffect(() => {
    // setSearchedData(getData(url));
    getData(url).then((pokeData) => setSearchedData(pokeData));
  }, []);
  //console.log("SEARCHED DATA: ", searchedData)

  function selectCardToggle(index) {
    //setSelectedState(!selectedState)
    let isAlreadyActive = index === selectedState
    setSelectedState(isAlreadyActive ? false : index)
  }
  

  return (
    <div className="App">
      <h1> Product Cards: </h1>
      <ProductCardList 
        arrayOfData={searchedData} 
        selectedState={selectedState}
        selectCardToggle={selectCardToggle}
      />
    </div>
  );
}

export default App;
