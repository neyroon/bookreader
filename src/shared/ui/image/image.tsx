import { ComponentPropsWithoutRef } from 'react';

import { ImageBox } from './image.styles';

export interface ImageProps extends ComponentPropsWithoutRef<'img'> {}

export const Image = ({ ...props }: ImageProps) => {
  return <ImageBox {...props} />;
};
