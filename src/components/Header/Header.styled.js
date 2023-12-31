import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: black;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: start;
  gap: 20px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
font-weight: 500;
  color: white;
  text-shadow: -1px tomato;
  transition: all 250ms linear;
  text-decoration: none;

  &.active,
  &:hover,
  &:focus {
    color: #bc8f8f;
    text-decoration: underline;
  }

`;