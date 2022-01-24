import { DefaultTheme, CustomTheme } from 'styled-components';
import { dark } from './dark';
import { light } from './ligth';

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
  xxl: string;
};

export const spacing: SpacingList = {
  none: '0px',
  xxs: '2px',
  xs: '4px',
  sm: '8px',
  default: '16px',
  base: '18px',
  md: '32px',
  lg: '48px',
  xl: '60px',
  xxl: '72px',
};

export const breakpoints = {
  mobile: 480,
  tablet: 576,
  medium: 768,
  laptop: 992,
  desktop: 1280,
  wide: 1440,
};

export const styleBreakpoints = {
  xs: `${breakpoints.mobile}px`,
  sm: `${breakpoints.tablet}px`,
  md: `${breakpoints.medium}px`,
  lg: `${breakpoints.laptop}px`,
  xl: `${breakpoints.desktop}px`,
  xxl: `${breakpoints.wide}px`,
};

const defaultTheme = {
  name: 'default',
  spacing,
  breakpoints: styleBreakpoints,
  font: {
    family: {
      inter: '"Inter", sans-serif',
      rajdhani: '"Rajdhani", sans-serif',
    },
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
};

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };
