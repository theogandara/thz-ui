import styled from 'styled-components';
import { ContentStylesProps } from './content';

export const Content = styled.div<ContentStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 16px;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
`;
