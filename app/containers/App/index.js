/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import { device, getWindowDimensions, isMobile } from '../../utils/styles';
import Header from '../../components/Header';

// eslint-disable-next-line no-unused-vars
const { width, height } = getWindowDimensions();

const AppWrapper = styled.div`
  width: calc(100vw);
  margin: 0 auto;
  display: flex;
  height: calc(100vh);
  padding: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 3px 0px;
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  @media ${device.mobileS} {
    margin-top: 0;
    width: 100%;
    height: calc(100vh);
  }
  @media ${device.mobileL} {
    margin-top: 0;
    width: 100%;
    height: calc(100vh);
  }
  @media ${device.mobileM} {
    margin-top: 0;
    width: 100%;
    height: calc(100vh);
  }
  @media ${device.tablet} {
    margin-top: 0;
    width: 100%;
    height: calc(100vh);
  }
  @media ${device.laptop} {
    width: 100%;
    height: calc(100vh);
  }
  @media ${device.laptopL} {
    width: 100%;
    height: calc(100vh);
  }
  @media ${device.desktop} {
    width: 1024px;
    height: calc(100vh);
  }
  @media ${device.desktopL} {
    width: 1024px;
    height: calc(100vh);
  }
`;
// eslint-disable-next-line no-unused-vars
const LeftSideAd = styled.div`
  height: calc(100vh - 40px);
  max-width: calc(${(width - 768) / 2}px - 20px);
  width: calc(${width / 5}px);
  position: fixed;
  left: 0;
  top: 20px;
  border: 1px solid gray;
  text-align: center;
  vertical-align: middle;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

// eslint-disable-next-line no-unused-vars
const RightSideAd = styled.div`
  height: calc(100vh - 40px);
  max-width: calc(${(width - 768) / 2}px - 20px);
  width: calc(${width / 5}px);
  position: fixed;
  right: 0;
  top: 20px;
  border: 1px solid gray;
  text-align: center;
  vertical-align: middle;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const mobile = isMobile();
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s | Nihongo365"
        defaultTitle="Nihongo365 | Học và luyện thi tiếng Nhật JLPT N5, N4, N3, N2, N1"
      >
        <meta
          name="description"
          content="Nihongo365 hướng tới trở thành nền tảng học tiếng Nhật số 1 Việt Nam và luyện thi JLPT N5, N4, N3, N2, N1. Bạn và tôi, chúng ta sẽ cùng nhau chinh phục Nhật Bản."
        />
        <link
          href="https://www.facebook.com/Nihongo365.tiengnhatonline"
          rel="me"
        />
        <link
          href="https://www.facebook.com/Nihongo365.tiengnhatonline"
          rel="author"
        />
        <link
          href="https://www.facebook.com/Nihongo365.tiengnhatonline"
          rel="publisher"
        />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      {/* {!mobile && <LeftSideAd>Ads here</LeftSideAd>} */}
      {/* {!mobile && <RightSideAd>Ads here</RightSideAd>} */}
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
