import React from 'react';
import styled from 'styled-components';

const Loader: React.FC = () => {
  return (
    <Wrapper>
      <Text>
        Uploading...
      </Text>
      <LoaderWrapper>
        <LoaderAnimation />
      </LoaderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  background: #FAFAFB;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 36px 32px;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  margin-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  height: 6px;
  background: #F2F2F2;
  border-radius: 8px;
  overflow: hidden;
`;

const LoaderAnimation = styled.div`
  width: 100px;
  height: 100%;
  background: #2F80ED;
  border-radius: 8px;
  overflow: hidden;
  animation-name: loading;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  
  @keyframes loading {
    from {
      transform: translate(-100%);
    }
    to {
      transform: translate(400%);
    }
  }
`;

export default Loader;
