/*
 * LevelPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  device,
  getInnerHeight,
  getWindowDimensions,
} from '../../utils/styles';
// eslint-disable-next-line no-unused-vars
const { width } = getWindowDimensions();
const innerHeight = getInnerHeight();
const BottomSeperator = styled.br`
  display: block;
  height: 10px;
  width: 100%;
  margin: 0;
  /* line-height: 22px; */
  content: ' ';
`;
const Menu = styled.div`
  width: calc(100%);
  height: calc(100%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: 'center';
  justify-content: 'center';
  padding-top: 10px;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 768px;
    margin-left: calc(50vw - ${786 / 2 - 10}px);
    height: calc(${innerHeight - 20 - 70 - 56}px);
  }
  @media ${device.laptopL} {
    width: 768px;
    margin-left: calc(50vw - ${786 / 2 - 10}px);
    height: calc(${innerHeight - 20 - 70 - 56}px);
  }
  @media ${device.desktop} {
    width: 768px;
    margin-left: calc(50vw - ${786 / 2 - 10}px);
    height: calc(${innerHeight - 20 - 70 - 56}px);
  }
  @media ${device.desktopL} {
    width: 768px;
    margin-left: calc(50vw - ${786 / 2 - 10}px);
    height: calc(${innerHeight - 20 - 70 - 56}px);
  }
`;
const LinkItem = styled(Link)`
  & > img {
    margin: 0;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
  }
  & > span {
    color: #000;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fff;
  flex: 1;
  @media ${device.mobileS} {
    width: calc(${width - 20}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.mobileL} {
    width: calc(${width - 20}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.mobileM} {
    width: calc(${width - 20}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.tablet} {
    width: calc(${width - 20}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.laptop} {
    width: calc(${768 - 20}px);
    height: 80px;
  }
  @media ${device.laptopL} {
    width: calc(${768 - 20}px);
    height: 80px;
  }
  @media ${device.desktop} {
    width: calc(${768 - 20}px);
    height: 80px;
  }
  @media ${device.desktopL} {
    width: calc(${768 - 20}px);
    height: 80px;
  }
`;
export default function LevelPage() {
  return (
    <>
      <Helmet>
        <title>Lựa chọn trình độ</title>
        <meta
          name="description"
          content="Học tiếng Nhật Nihongo365 mỗi ngày và luyện thi JLPT N5, N4, N3, N2, N1. Nihongo365 giúp bạn học từ vựng, kanji, ngữ pháp, nghe, hội thoại, đọc hiểu. Bên cạnh đó luyện thi theo format đề thi JLPQ quốc tế"
        />
      </Helmet>
      <Menu>
        <LinkItem to="/hoc/trinh-do-N5" onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/vocab-icon.png')}
            alt="Từ vựng tiếng Nhật Nihongo365"
            width="48"
            height="48"
            style={{ margin: 10 }}
          />
          <span>N5</span>
        </LinkItem>
        <LinkItem to="/hoc/trinh-do-N4" onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/kanji.png')}
            alt="Kanji Nihongo365"
            width="48"
            height="48"
            style={{ margin: 10 }}
          />
          <span>N4</span>
        </LinkItem>
        <LinkItem to="/hoc/trinh-do-N3" onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/grammar-icon.png')}
            alt="Ngữ pháp Nihongo365"
            width="auto"
            height="70"
            style={{ margin: 10 }}
          />
          <span>N3</span>
        </LinkItem>
        <LinkItem to="/hoc/trinh-do-N2" onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/listening-icon.png')}
            alt="Luyện nghe JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>N2</span>
        </LinkItem>
        <LinkItem to="/hoc/trinh-do-N1" onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/speaking.png')}
            alt="Luyện hội thoại JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>N1</span>
        </LinkItem>
        <BottomSeperator />
      </Menu>
    </>
  );
}
