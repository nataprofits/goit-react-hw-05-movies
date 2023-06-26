import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Title = styled.h1`
text-align: center;
`
export const List = styled.ul`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  padding-bottom: 20px;
  height: 100vh;
  max-width: calc(100vw - 48px);
  list-style: none;

`
export const MovieItem = styled.li`
  position: relative;
  width: calc((1214px - 90px) / 4);
  text-align: center;
  border: 1px solid #ffffff;
border-radius: 3px;
  box-shadow: 0px 10px 2px 2px var(--primary-color);
  background-color: antiquewhite;
  transition: transform var(--animation), box-shadow var(--animation);

  &:hover {
    transform: translateY(10px);
    box-shadow: none;
  }
`;
export const StyledLink = styled(Link)`
  font-weight: 500;
  transition: all 250ms linear;
  text-decoration: none;
color: black;
  &:hover {
    color: rgba(41, 123, 213, 0.71);
    text-decoration: underline;
  }
`;
export const StyledImg = styled.img`
width: 100%;
`