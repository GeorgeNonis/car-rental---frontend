import styled from "styled-components";
import tw from "twin.macro";

export const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};

  &:hover {
    ${tw`
      // Define your hover styles here
    `};
  }
`;

export const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
  `};

  &:hover {
    ${tw`
      bg-transparent
      text-red-500
      border-red-500
    `};
  }
`;

export const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
  `};

  &:hover {
    ${tw`
      bg-red-500
      text-white
      border-transparent
    `};
  }
`;
