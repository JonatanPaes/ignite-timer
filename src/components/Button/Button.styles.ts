import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secundary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secundary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`;
