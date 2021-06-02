import React , {useEffect}from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {
    //sets the progress and url to the file for the useStorage function
    const {url, progress} = useStorage(file);
    //checks to see if the url has been created
    useEffect(() => {
       if(url){
           //removes the progress bar 
           setFile(null)
       }
    }, [url, setFile])
    return(
        <div 
        className="progress-bar" 
        style={{
            //sets the progress bar width to upload percentage
            width: progress + '%'
        }}
        ></div>
    )
}

export default ProgressBar;