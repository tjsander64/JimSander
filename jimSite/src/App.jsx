import { useState, useEffect } from 'react';
import {
  ref as pref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import { getDatabase, ref, onValue, push as firebasePush, set as firebaseSet, update as firebaseUpdate } from 'firebase/database';

import { GalleryPage } from './components/galleryPage';
import { AuthPanel } from './components/AuthPanel';
import UploadPane from './components/UploadPane';
import { LinksPage } from './components/LinksPage';
import { AboutPage } from './components/AboutPage';
import { NavBar } from './components/NavBar';
import { ChronicYardSale } from './components/CYS';
import { MilkOfAmnesia } from './components/MOA';
import { MiscPage } from './components/MiscPage';

import { getAuth, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { storage } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';


function App() {

  useEffect (() => {
    document.title = "Jim's Website";
  }, []);


  return (
    <div className="height: 100% px-0">
      <NavBar/>
      <Routes>
        <Route index element={<LinksPage />}/>
        <Route path="links" element={<LinksPage />}/>
        <Route path="Gallery" element={<GalleryPage/>}/>
        <Route path="About" element={<AboutPage/>} />
        <Route path="MiscPage/ChronicYardSale" element={<ChronicYardSale/>} />
        <Route path="MiscPage/MilkOfAmnesia" element={<MilkOfAmnesia />} />
        <Route path="MiscPage" element = {<MiscPage />} />

      </Routes>
      {/* <GalleryPage /> */}
    </div>
  )
}

export default App
