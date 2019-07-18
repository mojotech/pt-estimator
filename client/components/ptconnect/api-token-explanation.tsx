import React from 'react';
import styled from 'styled-components';

const TokenExplanationText = styled.div`
  font-family: neue-haas-unica, sans-serif;
  font-size: 16px;
  margin: 24px;
  text-align: left;
`;

const APITokenBox = styled.div`
  flex-direction: column;
  width: 400px;
  display: flex;
  width: 450px;
  height: 250px;
  border: solid 1px #d3d2d2;
  background-color: #f7f6f6;
  align-self: center;
  top: 535px;
`;

const LargeGrayRectangle = styled.div`
  width: 400px;
  height: 46px;
  opacity: 0.5;
  background-color: #32353c;
  align-self: center;
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 16px;
`;

const GrayRectangleText = styled.div`
  opacity: 0.5;
  font-family: neue-haas-unica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 1px;
  color: #ffffff;
  margin-right: 122px;
`;

const WhiteRectangleText = styled.div`
  opacity: 0.5;
  font-family: neue-haas-unica, sans-serif;
  font-size: 13px;
  line-height: 1.62;
  color: #000000;
`;

const ExampleKeyText = styled.div`
  font-family: neue-haas-unica, sans-serif;
  font-size: 13px;
  line-height: 1.62;
  color: #000000;
  margin-right: 32px;
`;

const WhiteRectangle = styled.div`
  align-self: center;
  width: 400px;
  height: 46px;
  opacity: 0.5;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`;

const GrayMidBar = styled.div`
  width: 368px;
  height: 17px;
  opacity: 0.15;
  border-radius: 4px;
  background-color: #c4c4c4;
  margin: 16px;
`;

const LittleGrayRectangle = styled.div`
  width: 68px;
  height: 17px;
  opacity: 0.15;
  border-radius: 4px;
  background-color: #c4c4c4;
`;

const APIExplanation = () => {
  return (
    <APITokenBox>
      <TokenExplanationText>
        Your API token is listed with your account information. It’s the long string of numbers that
        looks like this:
      </TokenExplanationText>
      <LargeGrayRectangle>
        <Row>
          <GrayRectangleText>API TOKEN</GrayRectangleText>
          <LittleGrayRectangle />
          <LittleGrayRectangle />
        </Row>
      </LargeGrayRectangle>
      <WhiteRectangle>
        <GrayMidBar />
      </WhiteRectangle>
      <WhiteRectangle>
        <Row>
          <WhiteRectangleText>API token</WhiteRectangleText>
          <ExampleKeyText>0cb7ce8b800f34f72fb80a6618fb00a8</ExampleKeyText>
        </Row>
      </WhiteRectangle>
    </APITokenBox>
  );
};

export default APIExplanation;
