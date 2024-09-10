import { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import './App.css';

function App() {
  const imagesListRef = ref(storage, "Paintings/");
  const [imageUrls, setImageUrls] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        })
      })
    })
  }, []);

  return (
    <div>
      <div> Jim Sanders Gallery </div>

      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>

  )
}

export default App
