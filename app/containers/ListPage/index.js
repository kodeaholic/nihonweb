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
  color: #000;
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
function ListPage(props) {
  const { pathname } = window.location;
  // eslint-disable-next-line react/prop-types
  const { programSlug, level } = props.match.params;

  // state
  const [items, setItems] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  /**
   * Fetch data, loadmore, refresh & hooks
   */

  const fetchItems = async (filter, more = false) => {
    let list = [];
    const headers = await authHeader();
    const requestOptions = {
      method: 'GET',
      headers,
    };
    let url = `${apiConfig.baseUrl}${apiConfig.apiEndpoint}/${
      PROGRAM_API_ENDPOINTS[programSlug]
    }`;
    if (_.get(filter, 'page')) {
      url += `&page=${_.get(filter, 'page')}`;
    }
    if (_.get(filter, 'limit')) {
      url += `&limit=${_.get(filter, 'limit')}`;
    }
    if (_.get(filter, 'level')) {
      url += `&level=${_.get(filter, 'level')}`;
    }
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      if (data.code) {
      } else {
        list = data.results;
        console.log(data);
        setHasMore(data.page < data.totalPages);
        if (_.isEmpty(list)) {
          const msg = 'Chưa có mục nào được tạo. Vui lòng quay lại sau';
        } else {
        }
      }
    } catch (error) {}
    return list;
  };

  const loadMore = () => {
    console.log('Loading more...');
    const load = async () => {
      setLoadingMore(true);
      const filter = { limit: 20, page: page + 1, level };
      const more = true;
      const results = await fetchItems(filter, more);
      const currentItems = [...items];
      if (!_.isEmpty(results)) {
        const newList = _.concat(currentItems, results);
        setItems(newList);
        setPage(page + 1);
      }
      setTimeout(() => {
        setLoadingMore(false);
      }, 2000);
    };
    load();
  };

  // refresh
  const refresh = () => {
    const load = async () => {
      setRefreshing(true);
      const filter = { limit: 20, page: 1, level };
      const more = true;
      const results = await fetchItems(filter, more);
      if (!_.isEmpty(results)) {
        setItems(results);
        setPage(1);
        setScrolled(false); // re-init the list
      }
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    };
    load();
  };

  // load data for the first time
  useEffect(() => {
    setPage(prev => 1);
    const loadData = async () => {
      const filter = { limit: 20, level, page: 1 };
      const results = await fetchItems(filter);
      setItems(results);
    };
    loadData();
  }, [level]);

  return (
    <>
      <Helmet>
        <title>{`${PROGRAM_SLUGS[programSlug]} ${level}`}</title>
        <meta
          name="description"
          content="Học tiếng Nhật Nihongo365 mỗi ngày và luyện thi JLPT N5, N4, N3, N2, N1. Nihongo365 giúp bạn học từ vựng, kanji, ngữ pháp, nghe, hội thoại, đọc hiểu. Bên cạnh đó luyện thi theo format đề thi JLPQ quốc tế"
        />
      </Helmet>
      <InfiniteScroll
        dataLength={items.length} // This is important field to render the next data
        next={loadMore}
        hasMore={hasMore}
        loader={
          <h4
            style={{
              textAlign: 'center',
              width: 'calc(100vw - 10px)',
              marginLeft: '5px',
            }}
          >
            Đang tải...
          </h4>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Tất cả bài trong chuyên mục đã được hiển thị</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={100}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Vuốt xuống để tải lại</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Vuốt xuống để tải lại</h3>
        }
      >
        <Menu>
          {items.map(item => (
            <LinkItem>{item.title}</LinkItem>
          ))}
          <BottomSeperator />
        </Menu>
      </InfiniteScroll>
    </>
  );
}

export default withRouter(ListPage);
