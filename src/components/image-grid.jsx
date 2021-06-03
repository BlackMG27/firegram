import React from 'react';
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion';

const ImageGrid = ({setImage, setName}) => {
    const {docs} = useFirestore('images');
    console.log(docs);
    return(
        <section className="img-grid">
            {
                docs && docs.map( (doc, index) => (
                    <motion.div 
                    className="img-wrap"
                    tabIndex = {index}
                    key= {doc.id}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: .9}}
                    layout
                    onClick = {
                        () => { 
                            setImage(doc.url)
                            setName(doc.name)
                    }}
                    >
                      <motion.img 
                      src={doc.url} 
                      alt= {doc.name}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{
                          delay: .9,
                          duration: .9
                        }}
                      />  
                    </motion.div>
                ))
            }
        </section>
    )
}

export default ImageGrid;