import styled from "styled-components";
import {
  COLORS,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_TRANSITION,
  MAIN_FONT,
} from "../../constants/styles";
import { ButtonStylesProps } from "./button";

const properties = {
  small: {
    padding: "8px 14px",
    gap: "8px",
    fontSize: "14px",
    lineHeight: "20px",
  },
  medium: {
    padding: "10px 18px",
    gap: "8px",
    fontSize: "16px",
    lineHeight: "24px",
  },
  large: {
    padding: "16px 28px",
    gap: "12px",
    fontSize: "18px",
    lineHeight: "28px",
  },
};

const scheme = {
  primary: {
    main: COLORS.primary600,
    hover: COLORS.primary700,
    disabled: COLORS.primary200,
  },
  secondary: {
    main: COLORS.secondary600,
    hover: COLORS.secondary700,
    disabled: COLORS.secondary200,
  },
  error: {
    main: COLORS.error600,
    hover: COLORS.error700,
    disabled: COLORS.error200,
  },
};

export const Button = styled.button<ButtonStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${MAIN_FONT};
  gap: ${({ size }) => properties[size].gap};
  background-color: ${({ colors }) => scheme[colors].main};
  padding: ${({ size }) => properties[size].padding};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  border: 1px solid ${({ colors }) => scheme[colors].main};
  color: ${COLORS.textWhite};
  cursor: pointer;
  font-size: ${({ size }) => properties[size].fontSize};
  font-weight: 400;
  transition: ${DEFAULT_TRANSITION};

  &:hover {
    background-color: ${({ colors }) => scheme[colors].hover};
    border-color: ${({ colors }) => scheme[colors].hover};
  }

  &:disabled {
    background-color: ${({ colors }) => scheme[colors].disabled};
    border-color: ${({ colors }) => scheme[colors].disabled};
    cursor: not-allowed;
  }
`;
