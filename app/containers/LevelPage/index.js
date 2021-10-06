/* eslint-disable no-unused-vars */
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
    /* height: 80px; */
  }
  @media ${device.mobileL} {
    width: calc(${width - 20}px);
    margin: 10px;
    /* height: 80px; */
  }
  @media ${device.mobileM} {
    width: calc(${width - 20}px);
    margin: 10px;
    /* height: 80px; */
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
export default function LevelPage(props) {
  const { pathname } = window.location;
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
        <LinkItem to={`${pathname}/N5`} onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/N5.png')}
            alt="Từ vựng tiếng Nhật Nihongo365"
            width="auto"
            // height="70"
            style={{ margin: 10, height: '32px' }}
          />
          <span
            style={{
              borderRadius: '50%',
              border: '2px solid',
              borderColor: 'rgba(241, 130, 141,1)',
              width: 30,
              height: 30,
              display: 'flex' /* or inline-flex */,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            N5
          </span>
        </LinkItem>
        <LinkItem to={`${pathname}/N4`} onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/N4.png')}
            alt="Kanji Nihongo365"
            width="auto"
            // height="70"
            style={{ margin: 10, height: '48px' }}
          />
          <span
            style={{
              borderRadius: '50%',
              border: '2px solid',
              borderColor: 'rgba(165, 55, 253, 1)',
              width: 30,
              height: 30,
              display: 'flex' /* or inline-flex */,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            N4
          </span>
        </LinkItem>
        <LinkItem to={`${pathname}/N3`} onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/N3.png')}
            alt="Ngữ pháp Nihongo365"
            width="auto"
            // height="70"
            style={{ margin: 10, height: '48px' }}
          />
          <span
            style={{
              borderRadius: '50%',
              border: '2px solid',
              borderColor: 'rgba(0, 181, 204, 1)',
              width: 30,
              height: 30,
              display: 'flex' /* or inline-flex */,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            N3
          </span>
        </LinkItem>
        <LinkItem to={`${pathname}/N2`} onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/N2.png')}
            alt="Luyện nghe JLPT"
            width="auto"
            // height="70"
            style={{ margin: 10, height: '48px' }}
          />
          <span
            style={{
              borderRadius: '50%',
              border: '2px solid',
              borderColor: 'rgba(63, 195, 128, 1)',
              width: 30,
              height: 30,
              display: 'flex' /* or inline-flex */,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            N2
          </span>
        </LinkItem>
        <LinkItem to={`${pathname}/N1`} onClick={() => alert('Clicked')}>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/N1.png')}
            alt="Luyện hội thoại JLPT"
            width="auto"
            // height="70"
            style={{ margin: 10, height: '48px' }}
          />
          <span
            style={{
              borderRadius: '50%',
              border: '2px solid',
              borderColor: 'rgba(241, 90, 34, 1)',
              width: 30,
              height: 30,
              display: 'flex' /* or inline-flex */,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            N1
          </span>
        </LinkItem>
        <BottomSeperator />
      </Menu>
    </>
  );
}
