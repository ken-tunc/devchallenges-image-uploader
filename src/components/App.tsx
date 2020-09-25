import React from 'react';
import styled from 'styled-components';
import { uploadImageFileAndRetrieveUrl } from '../common/storage';
import ImageChooser from './ImageChooser';
import Loader from './Loader';
import UploadResult from './UploadResult';

type State = 'choosing' | 'uploading' | 'success' | 'error'

function App() {

  const [state, setState] = React.useState<State>('choosing');
  const [imageUrl, setImageUrl] = React.useState<string>('');

  const handleChosenFile = async (file: File) => {
    setState('uploading');
    try {
      const imageUrl = await uploadImageFileAndRetrieveUrl(file);
      setImageUrl(imageUrl);
      setState('success');
    } catch (e) {
      console.error(e);
      setImageUrl('');
      setState('choosing');
    }
  }

  const renderComponent = (): JSX.Element => {
    switch (state) {
      case 'choosing':
        return <ImageChooser handleChosenFile={handleChosenFile} />
      case 'uploading':
        return <Loader />
      case 'success':
        return <UploadResult imageUrl={imageUrl} />
      case 'error':
        // TODO: error page
        return <p>Error.</p>
    }
  }

  return (
    <div className="App">
      <Container>
        { renderComponent() }
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
