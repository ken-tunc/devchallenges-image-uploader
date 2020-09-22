import React from 'react';
import styled from 'styled-components';
import ImageChooser from './ImageChooser';
import Loader from './Loader';
import UploadResult from './UploadResult';

type State = 'choosing' | 'uploading' | 'success' | 'error'

function App() {

  const [state, setState] = React.useState<State>('choosing');
  const [imageUrl, setImageUrl] = React.useState<string>('');

  const handleChosenFile = async (file: File) => {
    setState('uploading');
    // TODO: call backend
    const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));
    await sleep(3000);
    setImageUrl('https://avatars2.githubusercontent.com/u/13360431?s=460&u=3e8bdb1615c10068494cea679cf83d89d035e851&v=4')
    setState('success');
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
