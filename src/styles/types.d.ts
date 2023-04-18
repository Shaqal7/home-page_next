// src/types.d.ts or styles/types.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    primaryAccent: string;
    backgroundColor: string;
    textColor: string;
    // Other theme values here...
  }
}
