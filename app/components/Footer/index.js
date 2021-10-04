/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
// import messages from './messages';
import { isMobile } from '../../utils/styles';

const mobile = isMobile();

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* cursor: pointer; */
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.span`
  color: #95a5a6;
  font-size: ${mobile ? '26' : '26'}px;
`;
const ItemLabel = styled.span`
  color: #95a5a6;
  font-size: ${mobile ? '14' : '14'}px;
  text-align: center;
`;
function Footer() {
  const { pathname } = window.location;
  return (
    <Wrapper>
      <ItemWrapper>
        <IconWrapper
          className="material-icons"
          style={{ color: pathname.includes('learn') ? '#5cdb5e' : '#95a5a6' }}
        >
          assignment
        </IconWrapper>
        <ItemLabel
          style={{ color: pathname.includes('learn') ? '#5cdb5e' : '#95a5a6' }}
        >
          Học
        </ItemLabel>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper className="material-icons">g_translate</IconWrapper>
        <ItemLabel>Từ điển</ItemLabel>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper className="material-icons">chrome_reader_mode</IconWrapper>
        <ItemLabel>Bài viết</ItemLabel>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper
          className="material-icons"
          style={{ fontSize: 20, marginBottom: 2 }}
        >
          あア
        </IconWrapper>
        <ItemLabel>Bảng chữ</ItemLabel>
      </ItemWrapper>
      <ItemWrapper>
        <IconWrapper className="material-icons">face</IconWrapper>
        <ItemLabel>Tài khoản</ItemLabel>
      </ItemWrapper>
    </Wrapper>
  );
}

export default withRouter(Footer);
