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
    height: 75px;
  }
  @media ${device.laptop} {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: 20px;
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    height: 75px;
  }
  @media ${device.laptopL} {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: 20px;
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    height: 75px;
  }
  @media ${device.desktop} {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: 20px;
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    height: 75px;
  }
  @media ${device.desktopL} {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: 20px;
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    height: 75px;
  }
`;

export default Wrapper;
