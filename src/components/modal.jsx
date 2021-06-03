import React, {Fragment} from 'react';
import {motion} from 'framer-motion'

const Modal = ({selectImage, selectName, setImage, setName}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setImage(null)
            setName(null)
        } 
    }

    return(
        <Fragment>
            <motion.div 
                className="backdrop"
                onClick={handleClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .6}}
            >
                <motion.img 
                src={selectImage} 
                alt={selectName}
                animate={{scale: [0,1.5, 1]}}
                transition= {{
                    duration: 1.1,
                    delay: .7
                }}
                />
                <motion.h4 className="modal__title"
                animate={{
                    scale: [0,1.5, 1],
                    opacity: [0,.5, 1]
                }}
                transition= {{
                    duration: 1.1,
                    delay: .6
                }}
                >{selectName}</motion.h4>
            </motion.div>    
        </Fragment>
    )
}

export default Modal;