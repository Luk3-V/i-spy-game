import './App.css';

import {initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import { ContextMenu } from './components/ContextMenu';

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
  
  useEffect(() => {
    
    const closeMenu = (e) => {
      if(e.target.className == 'image'){
        setClickPos({ x: e.pageX, y: e.pageY - e.target.offsetTop })
        setShowMenu(true);
      } else
        setShowMenu(false);
    }
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, [showMenu, clickPos]);

  const checkItemPos = async (name, x, y) => {
    console.log(name, x, y);
    const ref = collection(db, 'items');
    const snapshot = await getDocs(ref);
    const itemsData = snapshot.docs.map(doc => doc.data());
    const item = itemsData.find(x => x.name == name);
    
    if(item.x1 < x && item.y1 < y && item.x2 > x && item.y2 > y){
      let itemsCopy = [...items];
      itemsCopy[items.findIndex(x => x.name == name)].isFound = true;
      setItems(itemsCopy);
    }
  };

  return (
    <div className='container'>
      <NavBar items={items}/>
      <img className='image' src={require("./assets/iSpy image.png")} alt=""/>
      {showMenu && <ContextMenu items={items} x={clickPos.x} y={clickPos.y} checkItemPos={checkItemPos}/>}
    </div>
  );
}
export default App;

// DONE:
// Display image & timer at top
// Display items
// Click event 
// click list popup menu
// DB w/ locations
// check pos w/ DB if correct
// update items if found

// TODO:
// drag to move
// win screen w/ restart
// highscore DB
// start screen
// info tab instead of item list