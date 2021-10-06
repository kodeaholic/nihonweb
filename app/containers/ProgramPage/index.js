/*
 * ProgramPage
 *
 * List all the features
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  device,
  getInnerHeight,
  getWindowDimensions,
} from '../../utils/styles';
import { makeSelectProgramId } from './selectors';
import { programSelected } from './actions';
import { PROGRAM_IDS } from './constants';
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
  flex-direction: row;
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
    text-decoration: none;
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
    width: calc(${(768 - 40) / 2}px);
    height: 80px;
  }
  @media ${device.laptopL} {
    width: calc(${(768 - 40) / 2}px);
    height: 80px;
  }
  @media ${device.desktop} {
    width: calc(${(768 - 40) / 2}px);
    height: 80px;
  }
  @media ${device.desktopL} {
    width: calc(${(768 - 40) / 2}px);
    height: 80px;
  }
`;
export function ProgramPage(props) {
  const { onProgramSelected } = props;
  console.log(props);
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
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.TUVUNG)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/vocab-icon.png')}
            alt="Từ vựng tiếng Nhật Nihongo365"
            width="48"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Từ vựng</span>
        </LinkItem>

        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.CHUHAN)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/kanji.png')}
            alt="Kanji Nihongo365"
            width="48"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Kanji</span>
        </LinkItem>
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.GRAMMAR)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/grammar-icon.png')}
            alt="Ngữ pháp Nihongo365"
            width="auto"
            height="70"
            style={{ margin: 10 }}
          />
          <span>Ngữ pháp</span>
        </LinkItem>
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.NGHE)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/listening-icon.png')}
            alt="Luyện nghe JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Luyện nghe</span>
        </LinkItem>
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.HOITHOAI)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/speaking.png')}
            alt="Luyện hội thoại JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Luyện hội thoại</span>
        </LinkItem>
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.READING)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/reading.png')}
            alt="Luyện đọc JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Luyện đọc</span>
        </LinkItem>
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.LUYENTHI)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/test.png')}
            alt="Luyện thi JLPT"
            width="auto"
            height="70"
            style={{ margin: 10 }}
          />
          <span>Luyện thi</span>
        </LinkItem>
        <LinkItem
          to="/hoc/trinh-do"
          onClick={() => onProgramSelected(PROGRAM_IDS.THITHU)}
        >
          <img
            // eslint-disable-next-line global-require
            src={require('../../images/jlpt.png')}
            alt="Thi thử JLPT"
            width="auto"
            height="48"
            style={{ margin: 10 }}
          />
          <span>Thi thử</span>
        </LinkItem>
        <BottomSeperator />
      </Menu>
    </>
  );
}

ProgramPage.propTypes = {
  onProgramSelected: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  programId: makeSelectProgramId(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onProgramSelected: id => dispatch(programSelected(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProgramPage);
