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

interface BodyProps {
  noDescrip?: boolean;
}

const DescripBody = styled.div<BodyProps>`
  color: ${colors.warmGrey};
  font-size: ${fontSizes.large};
  margin-bottom: 18px;
  white-space: pre-wrap;
  font-style: normal;
  line-height: 1.33;
  margin-bottom: 32px;
  opacity: ${props => (props.noDescrip ? '0.5' : '1')};
`;

export const Divider = () => (
  <svg width="100%" height="4" style={{ marginBottom: `${spacing.l}` }}>
    <rect width="100%" height="1" fill={`${colors.black}`} opacity="0.1" />
  </svg>
);

interface DescripProps {
  title: string;
  text: string;
}

const Description = ({ title, text }: DescripProps) => {
  return (
    <DescripWrapper>
      <DescripTitle>{title}</DescripTitle>
      {text !== null && text !== '' ? (
        <DescripBody>{text}</DescripBody>
      ) : (
        <DescripBody noDescrip>There's no description for this story yet.</DescripBody>
      )}

      <Divider />
    </DescripWrapper>
  );
};

export default Description;
