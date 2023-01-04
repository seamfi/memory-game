import logo from './logo.svg';
import './App.css';
import CardContainer from './components/card-container.js'
import Header from './components/Header.js'
import { getByTestId } from '@testing-library/react';
import React, {useState} from "react"
import {useEffect} from "react"
import Sheen from "./pics/sheen.jpg"
import Carl from "./pics/carl.png"
import Cindy from "./pics/cindy.png"
import Hugh from "./pics/hugh.png"
import Jimmy from "./pics/jimmy.png"
import './Lobster-Regular.ttf'
function App() {
  const [score,setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [imgArray, setImgArray] = useState([Carl,Sheen,Hugh,Jimmy,Cindy])
  const [clickedImages, setClickedImages] = useState([])
  const [hasHappenedOnce, setHasHappenedOnce] = useState(false)
  const [hasResetGame, setHasResetGame] = useState(false)

  const addClickedImage = (e) => {
    setHasHappenedOnce(true)
    setClickedImages(clickedImages => [...clickedImages, e.target.src])
    
  }
  
  useEffect(() => {


  function randomizeImageArray() {
    setImgArray((i) => i.sort((a,b) => 0.5 - Math.random()))
}
    
  
  const findDuplicateClickedImages = clickedImages.filter((image, index) => clickedImages.indexOf(image) !== index )

  if (findDuplicateClickedImages.length !== 0){
    if (score > best){
    setBest(score)
    }
    setScore(-1)
    setClickedImages([])
  }

  else {

  
  randomizeImageArray()
  
  if (hasHappenedOnce) {
    
    setScore(score + 1)
    setHasHappenedOnce(false)
  }

  }

  }, [clickedImages,best,score,hasHappenedOnce])


  return (
    <div>
      <div>
      <Header score={score} best={best}/>
      </div>
      <div>
      <CardContainer imgArray={imgArray} addClickedImage={addClickedImage} />
      </div>
      
    </div>
  );
}

export default App;
