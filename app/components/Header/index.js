/* eslint-disable no-unused-vars */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { getWindowDimensions, isMobile } from '../../utils/styles';

const mobile = isMobile();
const { width } = getWindowDimensions();
const Title = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  width: 100%;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Nihongo365</Title>
    </Wrapper>
  );
}

export default Header;
