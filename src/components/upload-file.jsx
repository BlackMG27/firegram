import React, {useState} from 'react';
import ProgressBar from './progressBar';

const UploadForm = () => {
    //set up the useState hooks
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    //set up the file types
    const types = ['image/png', 'image/jpeg', 'image/jpg']
   //gets and checks for image files 
    const changeHandler = e => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }else{
            setFile(null);
            setError('Please select an image file (png, jpg, jpeg)')
        }

    }
    
    return(
        <form>
            <label>
            <input 
                type="file" 
                name="file"
                onChange={changeHandler}
            />
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}
export default UploadForm;