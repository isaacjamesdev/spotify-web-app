import styled from 'styled-components';

import SearchIcon from '../../Assets/images/search.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;
  background: #FFF url(${SearchIcon}) no-repeat 7px center;

  input{
      flex: 1;
      font-size: 13px;
      color: #121212;
      border: 0;
      background: transparent;
  }
`;
export const User = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;

    img{
        flex: 1;
        height: 27px;
        width: 27px;
        border-radius: 50%
    }
`;
