import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    spacing: SpacingList;
    colors: {
      background: string;
      backgroundOverlay: string;
      backgroundHeader: string;
      colorHeader: string;
      backgroundBox: string;
      backgroundIndex: string;
      inputBackground: string;
      backgroundLogo: string;

      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
    };
    boxShadow: string;
    font: {
      family: {
        inter: string;
        rajdhani: string;
      };
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };
  }
  export interface CustomTheme {
    title: string;
    colors: {
      background: string;
      backgroundOverlay: string;
      backgroundHeader: string;
      colorHeader: string;
      backgroundBox: string;
      backgroundIndex: string;
      inputBackground: string;
      backgroundLogo: string;

      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
    };
    boxShadow: string;
  }

  export type SpacingList = {
    /**
     * 0px
     */
    none: string;
    /**
     * 2px
     */
    xxs: string;
    /**
     * 4px
     */
    xs: string;
    /**
     * 8px
     */
    sm: string;
    /**
     * 16px
     */
    default: string;
    /**
     * 18px
     */
    base: string;
    /**
     * 32px
     */
    md: string;
    /**
     * 48px
     */
    lg: string;
    /**
     * 60px
     */
    xl: string;
    /**
     * 72px
     */
  };
}
