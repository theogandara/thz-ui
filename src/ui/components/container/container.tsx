import React from 'react';
import * as S from './container.styles';

export interface ContainerStylesProps {}
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ ...props }: ContainerProps) {
  return <S.Container {...props} />;
}
