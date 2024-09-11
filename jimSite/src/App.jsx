import { useState, useEffect } from 'react';
import {
  ref as pref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { getDatabase, ref, push as firebasePush } from 'firebase/database';

import { storage } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// TODO: store 

// TODO: break out gallery into its own component, don't keep code on main app page

function App() {

  const db = getDatabase();
  const  galleryDataRef = ref(db, "Artwork/Gallery")

  const imagesListRef = pref(storage, "Paintings/");
  const [imageUrls, setImageUrls] = useState(new Map());

  // useEffect(() => {
  //   var replacementMap = new Map();
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         console.log(url);
  //         console.log(pref(storage, url).name);
  //         replacementMap.set((pref(storage,url).name), url);
              
  //         // {console.log("map here")}
  //         // {console.log(imageUrls)}
  //       })
  //     })
      
  //   console.log(replacementMap);
  //   setImageUrls(new Map(replacementMap));
  //   console.log(imageUrls);
  //   })
  // }, []);

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
      console.log(replacementMap);
      setImageUrls(new Map(replacementMap)); 
    };
  
    fetchUrls();
  }, []);
  

  return (
    <div>
      <div className="h1 mb-2"> Various Artworks </div>

      <div className="">
        {Array.from(imageUrls.values()).map((url) => {
          // TEMPORARY: CHANGE 2 RENDER BASED ON RTDB
          return <img src={url} />;
        })}
      </div>

    </div>

  )
}

export default App
