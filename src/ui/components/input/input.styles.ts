import styled from "styled-components";
import {
  InputStylesProps,
  LabelStylesProps,
  MessageStylesProps,
} from "./input";
import { MAIN_FONT } from "../../constants/styles";

export const Label = styled.label<LabelStylesProps>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  line-height: 20px;
  font-family: ${MAIN_FONT};
  font-weight: 500;
  color: #344054;
`;

export const Input = styled.input<InputStylesProps>`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 24px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #98a2b3;
  padding: 0 12px;
  border-radius: 8px;
  height: 40px;
  max-height: 40px;
  cursor: text;
  box-sizing: border-box;
`;

export const Message = styled.p<MessageStylesProps>`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #344054;
  margin: 0;
`;
