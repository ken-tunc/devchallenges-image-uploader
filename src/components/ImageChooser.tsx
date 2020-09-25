import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Image } from '../assets/image.svg';

type Props = {
  handleChosenFile: (file: File) => Promise<void>
}

const ImageChooser: React.FC<Props> = (props) => {

  // to prevent open dropped file in browser
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const onFileDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length < 1) return;

    const file = event.dataTransfer.files[0];
    await props.handleChosenFile(file);
  }

  const onButtonChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null || event.target.files.length < 1) return;

    const file = event.target.files[0];
    await props.handleChosenFile(file);
  }

  return (
    <Wrapper>
      <Title>Upload your image</Title>
      <Description>File should be Jpeg, Png,...</Description>
      <DragDropBox onDragOver={onDragOver} onDrop={onFileDrop}>
        <ImageWrapper />
        <DragDropText>Drag & Drop your image here</DragDropText>
      </DragDropBox>
      <OrText>Or</OrText>
      <ChooseButtonLabel>
        <HiddenButton type="file" onChange={onButtonChange} />
        Choose a file
      </ChooseButtonLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 402px;
  text-align: center;
  background: #FAFAFB;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 36px 32px;
  letter-spacing: -0.035em;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: #4F4F4F;
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-size: 10px;
  line-height: 15px;
  color: #828282;
  margin-bottom: 30px;
`;

const DragDropBox = styled.div`
  background: #F6F8FB;
  border: 1px dashed #97BEF4;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 36px 0 40px 0;
  margin-bottom: 19px;
`;

const ImageWrapper = styled(Image)`
  margin-bottom: 37px;
`

const DragDropText = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #BDBDBD;
`;

const OrText = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #BDBDBD;
  margin-bottom: 22px;
`;

const HiddenButton = styled.input`
  display: none;
`;

const ChooseButtonLabel = styled.label`
  background: #2F80ED;
  border-radius: 8px;
  color: white;
  padding: 8px 16px;
  border-style: none;
`

export default ImageChooser;
