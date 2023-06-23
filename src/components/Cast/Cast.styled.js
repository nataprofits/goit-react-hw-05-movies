import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  padding: 0;
  row-gap: 25px;
  column-gap: 110px;
  li {
    display: flex;
    flex-direction: column;

    width: 200px;
  }
  img {
    border: 2px solid black;
    border-radius: 10px;
    height: auto;
    max-height: 350px;
  }
  p {
    margin: 5px 0px;
    font-size: 16px;
  }
`;
