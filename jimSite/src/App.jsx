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
import { getAuth, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { storage } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <GalleryPage />
      <AuthPanel />
      <UploadPane />
    </div>
  )
}

export default App
