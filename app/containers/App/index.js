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
  min-height: 56px;
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
    height: 75px;
  }
  @media ${device.laptop} {
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
  @media ${device.laptopL} {
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
  @media ${device.desktop} {
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
  @media ${device.desktopL} {
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
`;

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const mobile = isMobile();
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
