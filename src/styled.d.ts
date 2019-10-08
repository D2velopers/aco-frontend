import 'styled-components';
import Theme from './styles/Theme';

type Style = typeof Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Style {}
}
