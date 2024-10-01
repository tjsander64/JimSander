import React from "react";
import { useState, useEffect } from 'react';
import {
  ref as pref,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { getDatabase, ref, onValue, push as firebasePush, set as firebaseSet, update as firebaseUpdate } from 'firebase/database';

import { storage } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "./card";

import "../stylesheets/GalleryPage.css"

import { AuthPanel } from "./AuthPanel";
import UploadPane from "./UploadPane";






export function GalleryPage(props) {
    
  const db = getDatabase();
  const galleryDataRef = ref(db, "artwork/gallery/");

  const imagesListRef = pref(storage, "thumbnails/");
  const [imageUrls, setImageUrls] = useState(new Map());


  // // retains up-to-date state map (img filename -> download url)
  // // POINTLESS NOW: DISREGARD

  // useEffect(() => {
  //   const fetchUrls = async () => {
  //     let replacementMap = new Map();
  
  //     const response = await listAll(imagesListRef);
  //     const urlPromises = response.items.map(async (item) => {
  //       const url = await getDownloadURL(item);
  //       const fileName = pref(storage, url).name;
  //       replacementMap.set(fileName, url);
  //     });
  
  //     // Wait for all the getDownloadURL promises to resolve
  //     await Promise.all(urlPromises);
  
  //     // Now update the state after the map is fully built
  //     console.log(replacementMap);
  //     setImageUrls(new Map(replacementMap)); 
  //   };
  
  //   fetchUrls();
  // }, []);

  const [allPiecesArray, setAllPiecesArray] = useState([]);

  // retains up-to-date metadata by piece
  useEffect(() => {
    console.log("useeffect for db in state");

    const galleryDataRef = ref(db, "Artwork/Gallery/");

    const unregisterFunction = onValue(galleryDataRef, (snapshot) => {
      console.log("unregisterfunction");
      const allPiecesObj = snapshot.val();

      if (allPiecesObj) {

        const allPiecesKeys = Object.keys(allPiecesObj);

        const allPiecesArray = allPiecesKeys.map((key) => {
          const singlePieceCopy = {...allPiecesObj[key]};
          singlePieceCopy.key = key;
          
        //   const storageRef = pref(storage, "Paintings/" + singlePieceCopy.img_path);

        //   const db = getDatabase();
        //   const fullPathRef = ref(db, "Artwork/Gallery/" + key + "/full_img_path");

        //   getDownloadURL(storageRef).then((url) => {
        //     firebaseSet(fullPathRef, url);
        //   })

          
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
    // console.log(imageUrls);
    return () => {unregisterFunction();}
  }, []);
  

  return (
    <div>
      <div className="h1 mb-2 text-light fw-bold"> Gallery </div>

      <div className="d-flex flex-wrap align-items-end justify-content-center">

        {allPiecesArray.map((piece) => {
            return (
                <div className="">
                    <Card className="" photo={piece.thumbnail_path} link={piece.full_img_path} skills={piece.title} desc={piece.medium + ", " + piece.year} ext={false} />
                </div>
            )
            // return <img src={piece.thumbnail_path}/>
        })}
      </div>

      <AuthPanel />
      <UploadPane />
    </div>

  )
}