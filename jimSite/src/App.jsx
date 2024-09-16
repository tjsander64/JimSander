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

import { storage } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// TODO: store 

// TODO: break out gallery into its own component, don't keep code on main app page

function App() {
  return (
    <div>
      <GalleryPage />
      <AuthPanel />
    </div>
  )
}

export default App
