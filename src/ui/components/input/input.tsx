import React from 'react';
import * as S from './input.styles';

export interface InputStylesProps {}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export function InputElement({ ...props }: InputProps) {
  return <S.Input {...props} />;
}

export interface InputBoxProps {}
export function InputBox({ ...props }: InputBoxProps) {
  return <S.InputBox {...props} />;
}

export interface LabelStylesProps {}
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export function Label({ ...props }: LabelProps) {
  return <S.Label {...props} />;
}

export interface MessageStylesProps {}
interface MessageProps extends React.ComponentPropsWithoutRef<'p'> {}
export function Message({ ...props }: MessageProps) {
  return <S.Message {...props} />;
}

const Input = {
  Element: InputElement,
  Label,
  Message,
  Box: InputBox,
};

export default Input;
