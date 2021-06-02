import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = file => {
    //set up the variables 
    const [progress, setProgress] = useState(0),
    [error, setError] = useState(null),
    [url, setUrl] = useState(null);

    //uses the three arguments 
    useEffect(() => {
        //references 
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')
        //gets the file once the arguments have passed
        storageRef.put(file).on('state_changed', (snap) => {
            //gets the percentage progress 
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage) 
        }, (err) => {
            //gets the error if there is one 
            setError(err) 
        }, async () => {
            //gets the file download url
            const url = await storageRef.getDownloadURL()
            //ties the file to timestamp
            const createdAt = timestamp()
            setUrl(url)
            //stores the image url and timestamp into firestore database
            collectionRef.add({url, createdAt, name: file.name})
        }
        )
    }, [file])
    //return the values
    return {progress, url, error}
}

export default useStorage;
