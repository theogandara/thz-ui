import styled from 'styled-components';
import { ContainerStylesProps } from './container';

export const Container = styled.div<ContainerStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
  box-sizing: border-box;
`;
