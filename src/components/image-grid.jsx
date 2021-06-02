import React from 'react';
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log(docs);
    return(
        <section className="img-grid">
            {
                docs && docs.map( doc => (
                    <div 
                    className="img-wrap"
                    key= {doc.id}
                    >
                      <img src={doc.url} alt= {doc.name}/>  
                    </div>
                ))
            }
        </section>
    )
}

export default ImageGrid;