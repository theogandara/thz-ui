import React from 'react';
import * as S from './content.styles';

export interface ContentStylesProps {}
interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Content({ ...props }: ContentProps) {
  return <S.Content {...props} />;
}
