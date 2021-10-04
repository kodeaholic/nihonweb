import styled from 'styled-components';
const height = window.innerHeight;
const Wrapper = styled.div`
  margin: 0;
  width: 40px;
  height: 40px;
  position: fixed;
  top: calc(${height / 2}px - 20px);
  left: calc(50vw - 20px);
`;

export default Wrapper;
