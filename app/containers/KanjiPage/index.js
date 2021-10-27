/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import { apiConfig } from '../../config/apiConfig';
import {
  device,
  getInnerHeight,
  getWindowDimensions,
} from '../../utils/styles';
import { PROGRAM_API_ENDPOINTS, PROGRAM_SLUGS } from '../ProgramPage/constants';
import { authHeader } from '../../utils/authHeader';
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
const ContentWrapper = styled.div`
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
function KanjiPage(props) {
  const { pathname } = window.location;
  // eslint-disable-next-line react/prop-types
  const { slug, level } = props.match.params;

  // state
  const [item, setItem] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  /**
   * Fetch data, loadmore, refresh & hooks
   */

  const fetchItem = async itmSlug => {
    let itm = {};
    const headers = await authHeader();
    const requestOptions = {
      method: 'GET',
      headers,
    };
    const url = `${apiConfig.baseUrl}${
      apiConfig.apiEndpoint
    }/boards/find/${itmSlug}`;
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      if (data.code) {
      } else {
        itm = data;
        if (_.isEmpty(itm)) {
          const msg =
            'Dữ liệu không tồn tại hoặc đã bị xóa. Vui lòng quay lại sau';
        } else {
        }
      }
    } catch (error) {}
    return itm;
  };

  // load data for the first time
  useEffect(() => {
    const loadData = async () => {
      const itm = await fetchItem(slug);
      console.log(itm);
      setItem(itm);
    };
    loadData();
  }, [level, slug]);

  useEffect(() => {
    if (!_.isEmpty(item) && item.cards.length > 0) {
      setSelectedCard(item.cards[0]);
    }
  }, [item]);

  return (
    <>
      <Helmet>
        <title>{`Chữ Hán ${level} | ${item.title || ''}`}</title>
        <meta
          name="description"
          content="Học tiếng Nhật Nihongo365 mỗi ngày và luyện thi JLPT N5, N4, N3, N2, N1. Nihongo365 giúp bạn học từ vựng, kanji, ngữ pháp, nghe, hội thoại, đọc hiểu. Bên cạnh đó luyện thi theo format đề thi JLPQ quốc tế"
        />
      </Helmet>
      <ContentWrapper>
        <h1 style={{ textAlign: 'center' }}>{item.title}</h1>
        {item.cards && item.cards.length > 0 && (
          <div
            style={{
              width: 'calc(100%)',
              overflowX: 'scroll',
              height: '56px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {item.cards.map(card => (
              <div
                style={{
                  height: 56,
                  width: 56,
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  fontSize: 22,
                }}
                key={card.letter}
              >
                {card.letter}
              </div>
            ))}
          </div>
        )}
      </ContentWrapper>
    </>
  );
}

export default withRouter(KanjiPage);
