import React from "react";
import * as S from "./button.styles";

export interface ButtonStylesProps {
  size: "small" | "medium" | "large";
  colors: "primary" | "secondary" | "error";
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonStylesProps["size"];
  colors?: ButtonStylesProps["colors"];
}

export default function Button({
  children,
  size = "medium",
  colors = "primary",

  ...props
}: ButtonProps) {
  return (
    <S.Button colors={colors} size={size} {...props}>
      {children}
    </S.Button>
  );
}
