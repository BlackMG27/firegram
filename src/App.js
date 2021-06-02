import React from 'react';
import ImageGrid from './components/image-grid';
import Modal from './components/modal';
import Title from './components/Title';
import UploadForm from './components/upload-file';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
      <Modal/>
    </div>
  );
}

export default App;
