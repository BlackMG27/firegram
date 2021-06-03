import React, {useState} from 'react';
import ImageGrid from './components/image-grid';
import Modal from './components/modal';
import Title from './components/Title';
import UploadForm from './components/upload-file';

function App() {
  const [selectImage, setImage] = useState(null)
  const [selectName, setName] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid 
      setImage={setImage}
      setName={setName}
      />
      {selectImage &&
      <Modal 
      selectImage={selectImage}
      selectName={selectName}
      setImage={setImage}
      setName={setName}
      />
      }
    </div>
  );
}

export default App;
