import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ref as pref,
    getDownloadURL,
    listAll,
    list,
    uploadBytes
  } from "firebase/storage";
  import { storage } from "../firebase"; 
  import { getDatabase, ref, onValue, push as firebasePush, set as firebaseSet, update as firebaseUpdate } from 'firebase/database';
   

export default function UploadPane(props) {

    const [chosenFile, setChosenFile] = useState(null);
    const [newTitle, setNewTitle] = useState(null);
    const [newMed, setNewMed] = useState(null);
    const [newYr, setNewYr] = useState(null);
    
    

    var uploadHandler = (e) => {
        console.log("Uploadhandler");
        const db = getDatabase();
        
        if([newTitle, newYr, newMed, chosenFile].every(e => e != null && e != "") ) {
            
            var imgUrl = "";

            const storageRef = pref(storage, "Paintings/" + chosenFile.name);
            console.log("Attempting upload");
            uploadBytes(storageRef, chosenFile).then((snapshot) => {
                console.log("uploaded file!");
            }).then(getDownloadURL(storageRef).then(url => {
                imgUrl = url;
                console.log(imgUrl);
                firebasePush(ref(db, "Artwork/Gallery"), 
                {
                    full_img_path : imgUrl,
                    img_path : chosenFile.name,
                    medium : newMed,
                    show : true,
                    thumbnail_path: imgUrl, 
                    title : newTitle,
                    year : newYr
                }
            );
            }))

            console.log(imgUrl);

            // uploadObj = {
            //     full_img_path : imgUrl,
            //     img_path : chosenFile.name,
            //     medium : newMed,
            //     show : true,
            //     thumbnail_path: imgUrl, 
            //     title : newTitle,
            //     year : newYr
            // }

            
        }
    }

    return (
         <div>
            <input type="file" onChange={ (e) => {setChosenFile(e.target.files[0])}} />
            <input type="text" onInput={(e) => {setNewTitle(e.target.value)}} placeholder={"Title"} />
            <input type="text" onInput={(e) => {setNewMed(e.target.value)}} placeholder={"Medium"}/>
            <input type="text" onInput={(e) => {setNewYr(e.target.value)}} placeholder={"Year"}/>

            <button onClick={uploadHandler}/>
         </div>   
    )
}