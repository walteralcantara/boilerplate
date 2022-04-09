import styled, { css } from "styled-components";

import { MainProps } from ".";

type WrapperProps = Pick<MainProps, "backgroundColor" | "fontColor">;

export const Wrapper = styled.main<WrapperProps>`
  ${(props) =>
    props &&
    css`
      background-color: ${props.backgroundColor};
      color: ${props.fontColor};
    `}

  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
  animation: spin 6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;
