import { IBaseTheme, Themes } from '@/entities/theme/model/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends IBaseTheme {
    type: Themes;
  }
}
