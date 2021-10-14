/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import messages from './messages';
import { getWindowDimensions, isMobile } from '../../utils/styles';

const mobile = isMobile();
const { width } = getWindowDimensions();
const Title = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  width: calc(${width - 48 * 2}px);
`;
const BackButton = styled.div`
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 48px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-left: 12px;
  /* margin-top: calc(${(56 - 30) / 2}px); */
`;
const RightButton = styled.div`
  color: #5cdb5e;
  font-size: 24px;
  height: 48px;
  width: 48px;
`;
function Header(props) {
  const { history } = props;
  const { pathname } = window.location;
  return (
    <Wrapper>
      <BackButton
        className="material-icons"
        onClick={() => {
          // if (history.action !== 'POP') history.goBack();
          history.goBack();
        }}
        style={{
          color: pathname === '/' || pathname === '/hoc' ? '#5cdb5e' : '#fff',
        }}
      >
        <span>arrow_back_ios</span>
      </BackButton>
      <Title>Nihongo365</Title>
      <RightButton className="material-icons">arrow_forward_ios</RightButton>
    </Wrapper>
  );
}

Header.propTypes = {
  history: PropTypes.any,
};

export default withRouter(Header);
