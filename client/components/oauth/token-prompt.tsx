import { History } from 'history';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'urql';

import { colors, fonts, fontSizes } from '~lib/theme';

const validateToken = `query validateToken($token: String!){
  isApiTokenValid(token: $token)
}`;

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

const AcceptBox = styled.input`
  width: 60px;
  height: 60px;
  border: solid 1px #d3d2d2;
  background-color: #efefef;
`;

interface Props {
  history: History;
}

const TokenPrompt = ({ history }: Props) => {
  const [token, setToken] = useState();
  const tokenRef = useRef<HTMLInputElement>(null);

  const placeholder = 'API token';

  useEffect(() => {
    if (res.data && res.data.isApiTokenValid) {
      history.push('/home');
    }
  });

  const onSubmit = event => {
    event.preventDefault();
    setToken(tokenRef.current.value);
  };

  const [res] = useQuery({
    query: validateToken,
    variables: {
      token,
    },
  });

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input placeholder={placeholder} required ref={tokenRef} />
        <AcceptBox type="submit" />
      </form>
    </Wrapper>
  );
};

export default TokenPrompt;
