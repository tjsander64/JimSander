import { useState, useEffect } from 'react';
import {
  ref as pref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database';

import { storage } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// TODO: store 

// TODO: break out gallery into its own component, don't keep code on main app page

function App() {

  const db = getDatabase();
  const  galleryDataRef = ref(db, "artwork/gallery/");

  const imagesListRef = pref(storage, "thumbnails/");
  const [imageUrls, setImageUrls] = useState(new Map());


  // retains up-to-date state map (img filename -> download url)
  useEffect(() => {
    const fetchUrls = async () => {
      var replacementMap = new Map();
  
      const response = await listAll(imagesListRef);
      const urlPromises = response.items.map(async (item) => {
        const url = await getDownloadURL(item);
        const fileName = pref(storage, url).name;
        replacementMap.set(fileName, url);
      });
  
      // Wait for all the getDownloadURL promises to resolve
      await Promise.all(urlPromises);
  
      // Now update the state after the map is fully built
      // console.log(replacementMap);
      setImageUrls(new Map(replacementMap)); 
    };
  
    fetchUrls();
  }, []);

  const [allPiecesArray, setAllPiecesArray] = useState([]);

  // retains up-to-date metadata by piece
  useEffect(() => {
    console.log("useeffect for db in state");

    const galleryDataRef = ref(db, "Artwork/Gallery/");

    const diveTest = ref(db, "Artwork/Gallery/0");
    console.log("ref : " + diveTest);
    console.log("Gallery data ref:" + galleryDataRef);

    // const unregisterFunction = onValue(diveTest, (snapshot) => {
    //   const diveVal = snapshot.val();
    //   console.log(diveVal);
    // })

    const unregisterFunction = onValue(galleryDataRef, (snapshot) => {
      console.log("unregisterfunction");
      const allPiecesObj = snapshot.val();

      if (allPiecesObj) {

        console.log(allPiecesObj);

        const allPiecesKeys = Object.keys(allPiecesObj);

        const allPiecesArray = allPiecesKeys.map((key) => {
          const singlePieceCopy = {...allPiecesObj[key]};
          singlePieceCopy.key = key;
          return singlePieceCopy;
        });
        
        console.log("Updating pieces array in state");
        setAllPiecesArray(allPiecesArray);
        console.log(allPiecesArray);
      } else {
        console.log("Snapshot empty - no data");
        setAllPiecesArray([]);
      }
    });
    console.log(imageUrls);
    return () => {unregisterFunction();}
  }, []);
  

  return (
    <div>
      <div className="h1 mb-2"> Various Artworks </div>

      <div className="">
        {/* {Array.from(imageUrls.values()).map((url) => {
          // TEMPORARY: CHANGE 2 RENDER BASED ON RTDB
          return <img src={url} />;
        })} */}

        {allPiecesArray.map((piece) => {
          return <img src={imageUrls.get(piece.img_path)}/>
        })}
      </div>

    </div>

  )
}

export default App
