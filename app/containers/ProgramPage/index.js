/*
 * ProgramPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { getWindowDimensions } from '../../utils/styles';
// eslint-disable-next-line no-unused-vars
const { width } = getWindowDimensions();
const Menu = styled.div`
  width: calc(100%);
  height: calc(100%);
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
      <Menu />
    </>
  );
}
