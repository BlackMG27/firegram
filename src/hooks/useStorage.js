import {useState, useEffect} from 'react';
import {projectStorage} from '../firebase/config';

const useStorage = file => {
    //set up the variables 
    const [progress, setProgress] = useState(0),
    [error, setError] = useState(null),
    [url, setUrl] = useState(null);

    //uses the three arguments 
    useEffect(() => {
        //references 
        const storageRef = projectStorage.ref(file.name);
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
            setUrl(url)
        }
        )
    }, [file])
    //return the values
    return {progress, url, error}
}

export default useStorage;
