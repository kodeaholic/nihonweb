/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  device,
  getWindowDimensions,
  HIGHEST_Z_INDEX,
} from '../../utils/styles';
const { width } = getWindowDimensions();
const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: fixed;
  background-color: #5cdb5e;
  color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: ${HIGHEST_Z_INDEX};
  min-height: 56px;
  margin: 0 auto;
  @media ${device.mobileS} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.mobileL} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.mobileM} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.tablet} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.laptop} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.laptopL} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.desktop} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
  @media ${device.desktopL} {
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 56px;
  }
`;

export default Wrapper;
