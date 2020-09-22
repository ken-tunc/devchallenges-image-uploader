import React from 'react';
import styled from 'styled-components';

type Props = {
  imageUrl: string
};

const UploadResult: React.FC<Props> = (props) => {

  const onClick = async () => {
    await navigator.clipboard.writeText(props.imageUrl);
  };

  return (
    <Wrapper>
      <CheckIcon className="material-icons">check_circle</CheckIcon>
      <Title>Uploaded Successfully!</Title>
      <Image src={props.imageUrl} />
      <PlaceHolder>
        <ImageUrl>{props.imageUrl}</ImageUrl>
        <CopyButton onClick={onClick}>Copy Link</CopyButton>
      </PlaceHolder>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  background: #FAFAFB;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  padding: 40px 31px 33px 31px;
`;

const CheckIcon = styled.i`
  color: #219653;
  font-size: 36px;
  margin-bottom: 11px;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  margin-bottom: 25px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 25px;
`;

const PlaceHolder = styled.div`
  background: #F6F8FB;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImageUrl = styled.div`
  font-size: 8px;
  line-height: 12px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  padding: 0 13px;
`;

const CopyButton = styled.button`
  background: #2F80ED;
  border-radius: 8px;
  border-style: none;
  color: white;
  padding: 9px 20px;
  white-space: nowrap;
`;

export default UploadResult;
