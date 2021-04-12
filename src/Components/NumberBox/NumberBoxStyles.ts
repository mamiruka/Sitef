import styled from "styled-components";
const Container = styled.div`
  width: ${({isLong}: {isLong: boolean}) => isLong? "200px" :"45px"};
  height: 27px;
  border: 1px solid #ececec;
  input{
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0
  }
`;
export default Container;