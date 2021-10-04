import styled from 'styled-components';
import {
  device,
  getWindowDimensions,
  HIGHEST_Z_INDEX,
} from '../../utils/styles';
const { width } = getWindowDimensions();
const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: ${HIGHEST_Z_INDEX};
  min-height: 56px;
  margin: 0 auto;
  @media ${device.mobileS} {
    width: 100%;
    height: 56px;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 56px;
  }
  @media ${device.mobileM} {
    width: 100%;
    height: 56px;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 75px;
  }
  @media ${device.laptop} {
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
  @media ${device.laptopL} {
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
  @media ${device.desktop} {
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
  @media ${device.desktopL} {
    left: calc((${width}px - 768px) / 2);
    width: 768px;
    bottom: 20px;
    border-radius: 5px;
    height: 75px;
  }
`;

export default Wrapper;
