import React from 'react';
import styled from 'styled-components';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

const DescripWrapper = styled.div`
  display: inline-block;
  width: 656px;
  margin-left: ${spacing.xl};
`;
const DescripTitle = styled.div`
  color: ${colors.black};
  font-size: 36px;
  margin-bottom: 36px;
  font-style: normal;
  line-height: 1.31;
`;

const DescripBody = styled.div`
  color: ${colors.warmGrey};
  font-size: ${fontSizes.large};
  margin-bottom: 18px;
  white-space: pre-wrap;
  font-style: normal;
  line-height: 1.33;
  margin-bottom: 32px;
`;

export const Divider = () => (
  <svg width="100%" height="4" style={{ marginBottom: `${spacing.l}` }}>
    <rect width="100%" height="1" fill={`${colors.black}`} opacity="0.1" />
  </svg>
);

interface BodyProps {
  title: string;
  text: string;
}

const Description = ({ title, text }: BodyProps) => {
  return (
    <DescripWrapper>
      <DescripTitle>{title}</DescripTitle>
      <DescripBody>{text}</DescripBody>
      <Divider />
    </DescripWrapper>
  );
};

export default Description;
