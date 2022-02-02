import { theme } from './theme';

type Theme = typeof theme;

// Aqui estamos unindo o tema do styled-components com o nosso proprio tema.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
