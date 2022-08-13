import './App.css';

import {initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import ContextMenu from './components/ContextMenu';
import Modal from './components/Modal';

const app = initializeApp({
  apiKey: "AIzaSyCfoqLb68UtJdXvHJeopFssSdVDLz32Viw",
  authDomain: "i-spy-game-775af.firebaseapp.com",
  projectId: "i-spy-game-775af",
  storageBucket: "i-spy-game-775af.appspot.com",
  messagingSenderId: "353153660741",
  appId: "1:353153660741:web:39aa5e4ee1ef044b26302c"
});
const db = getFirestore(app);

const App = () => {
  const [items, setItems] = useState([{
      name: 'Dog', 
      isFound: false
    },{
      name: 'Cat',
      isFound: false
    },{ 
      name: 'Rat',
      isFound: false
  }]);
  const [showMenu, setShowMenu] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [timer, setTimer] = useState(0);
  const [scores, setScores] = useState([]);
  
  useEffect(() => {
    const closeMenu = (e) => {
      if(e.target.className === 'image'){
        setClickPos({ x: e.pageX, y: e.pageY - e.target.offsetTop })
        setShowMenu(true);
      } else
        setShowMenu(false);
    }
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, [showMenu, clickPos]);

  const checkItemPos = async (name, x, y) => {
    const ref = collection(db, 'items');
    const snapshot = await getDocs(ref);
    const itemsData = snapshot.docs.map(doc => doc.data());
    const item = itemsData.find(x => x.name === name);
    
    if(item.x1 < x && item.y1 < y && item.x2 > x && item.y2 > y){
      let itemsCopy = [...items];
      itemsCopy[items.findIndex(x => x.name === name)].isFound = true;
      setItems(itemsCopy);
    }

    if(items.filter(x => !x.isFound).length === 0){
      setIsGamePlaying(false);
      setShowGameOver(true);
    }  
  };

  const startGame = () => {
    setIsGamePlaying(true);
  }

  const submitScore = async (e) => {
    e.preventDefault();
    const ref = collection(db, 'scoreboard');
    addDoc(ref, {
      name: e.target.form.name.value,
      time: timer
    });

    setScores(await getScores());
    setShowGameOver(false);
    setShowScoreboard(true);
  }
  const getScores = async () => {
    const ref = collection(db, 'scoreboard');
    const snapshot = await getDocs(ref);
    let scoresData = snapshot.docs.map(doc => doc.data());
    return scoresData.sort((x1, x2) => x1.time - x2.time);
  }

  return (
    <div className='container'>
      <NavBar items={items} isGamePlaying={isGamePlaying} timer={timer} setTimer={setTimer}/>
      <img className='image' src={require("./assets/iSpy image.png")} alt="" style={{ position: (!isGamePlaying) ? 'fixed' : 'absolute'}}/>
      {showMenu && <ContextMenu items={items} x={clickPos.x} y={clickPos.y} checkItemPos={checkItemPos}/>}
      {(!isGamePlaying) && <Modal showGameOver={showGameOver} showScoreboard={showScoreboard} timer={timer} scores={scores} startGame={startGame} submitScore={submitScore}/>}
    </div>
  );
}
export default App;

// TODO:
// drag to move
// info tab instead of item list