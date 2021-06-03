import React , {useEffect}from 'react';
import{ motion} from 'framer-motion';
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
        <motion.div 
        className="progress-bar" 
        initial={{width: 0}}
        animate={{width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;