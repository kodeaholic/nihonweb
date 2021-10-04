/*
 * ProgramPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { device, getWindowDimensions } from '../../utils/styles';
// eslint-disable-next-line no-unused-vars
const { width } = getWindowDimensions();
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
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
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
  }
  @media ${device.laptopL} {
  }
  @media ${device.desktop} {
  }
  @media ${device.desktopL} {
  }
`;
const MenuItem = styled.div`
  & > img {
    margin: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fff;
  @media ${device.mobileS} {
    width: calc(${width - 10}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.mobileL} {
    width: calc(${width - 10}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.mobileM} {
    width: calc(${width - 10}px);
    margin: 10px;
    height: 80px;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 80px;
  }
  @media ${device.laptop} {
    left: calc((${width}px - 400px) / 2);
    width: 400px;
    bottom: 20px;
    border-radius: 5px;
    height: 80px;
  }
  @media ${device.laptopL} {
    left: calc((${width}px - 400px) / 2);
    width: 400px;
    bottom: 20px;
    border-radius: 5px;
    height: 80px;
  }
  @media ${device.desktop} {
    left: calc((${width}px - 400px) / 2);
    width: 400px;
    bottom: 20px;
    border-radius: 5px;
    height: 80px;
  }
  @media ${device.desktopL} {
    left: calc((${width}px - 400px) / 2);
    width: 400px;
    bottom: 20px;
    border-radius: 5px;
    height: 80px;
  }
`;
export default function ProgramPage() {
  return (
    <>
      <Helmet>
        <title>Học và thi</title>
        <meta
          name="description"
          content="Học tiếng Nhật Nihongo365 mỗi ngày và luyện thi JLPT N5, N4, N3, N2, N1. Nihongo365 giúp bạn học từ vựng, kanji, ngữ pháp, nghe, hội thoại, đọc hiểu. Bên cạnh đó luyện thi theo format đề thi JLPQ quốc tế"
        />
      </Helmet>
      <Menu>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/vocab-icon.png')}
            alt="Từ vựng tiếng Nhật Nihongo365"
            width="48"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Từ vựng</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/kanji.png')}
            alt="Kanji Nihongo365"
            width="48"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Kanji</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/grammar-icon.png')}
            alt="Ngữ pháp Nihongo365"
            width="auto"
            height="70"
            style={{ margin: 10 }}
          />
          <span>Ngữ pháp</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/listening-icon.png')}
            alt="Luyện nghe JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Luyện nghe</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/speaking.png')}
            alt="Luyện hội thoại JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Luyện hội thoại</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/reading.png')}
            alt="Luyện đọc JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Luyện đọc</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/test.png')}
            alt="Luyện thi JLPT"
            width="auto"
            height="70"
            style={{ margin: 10 }}
          />
          <span>Luyện thi</span>
        </MenuItem>
        <MenuItem>
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/jlpt.png')}
            alt="Thi thử JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Thi thử</span>
        </MenuItem>
        <BottomSeperator />
      </Menu>
    </>
  );
}
