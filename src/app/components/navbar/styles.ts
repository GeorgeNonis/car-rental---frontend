import styled, { css } from "styled-components";
import tw from "twin.macro";

export const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    `}
`;

export const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    text-black
    md:text-base
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
  `}
  &:hover {
    ${tw`
      text-gray-700
      `}
  }
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;
export const BurgerStyle = {
  bmBurgerButton: {
    position: "absolute",
    width: "20px",
    height: "20px",
    right: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    width: "60%",
    height: "100%",
    top: "0px",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
