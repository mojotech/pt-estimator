import React from 'react';
import styled from 'styled-components';
import RightUp from '~assets/images/right-arrow-full.svg';
import { colors, fonts, fontSizes } from '~lib/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const Input = styled.input`
  type: text;
  width: 391px;
  height: 60px;
  font-family: ${fonts.neueHass};
  opacity: 0.5;
  font-size: ${fontSizes.medium};
  line-height: 1.31;
  color: ${colors.black};
`;

const AcceptBox = styled.button`
  width: 60px;
  height: 60px;
  border: solid 1px #d3d2d2;
  background-color: #efefef;
`;

const LinkArrow = styled(RightUp)``;

const PivotalInputField = () => {
  const value = 'API token';
  return (
    <Wrapper>
      <Input placeholder={value} />
      <AcceptBox>
        <LinkArrow />
      </AcceptBox>
    </Wrapper>
  );
};

export default PivotalInputField;
