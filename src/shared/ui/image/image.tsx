import { ComponentPropsWithoutRef, FC } from 'react';

import { ImageBox } from './image.styles';

export interface ImageProps extends ComponentPropsWithoutRef<'img'> {}

export const Image: FC<ImageProps> = ({ ...props }) => {
  return <ImageBox {...props} />;
};
