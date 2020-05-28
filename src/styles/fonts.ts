import { css } from '@emotion/core';
import MontserratBold from '../assets/fonts/montserrat/Montserrat-Bold.woff';
import MontserratBoldItalic from '../assets/fonts/montserrat/Montserrat-BoldItalic.woff';
import MontserratItalic from '../assets/fonts/montserrat/Montserrat-Italic.woff';
import MontserratLight from '../assets/fonts/montserrat/Montserrat-Light.woff';
import MontserratLightItalic from '../assets/fonts/montserrat/Montserrat-LightItalic.woff';
import MontserratMedium from '../assets/fonts/montserrat/Montserrat-Medium.woff';
import MontserratMediumItalic from '../assets/fonts/montserrat/Montserrat-MediumItalic.woff';
import MontserratRegular from '../assets/fonts/montserrat/Montserrat-Regular.woff';


export const globalFonts = css`
/** =================== MONTSERRAT =================== **/

/** Montserrat Light **/
@font-face {
  font-family: "Montserrat";
  font-weight: 300;
  font-style: normal;
  src: url(${MontserratLight}) format("woff");
}

/** Montserrat Light-Italic **/
@font-face {
  font-family: "Montserrat";
  font-weight: 300;
  font-style: italic;
  src: url(${MontserratLightItalic}) format("woff");
}

/** Montserrat Regular **/
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  src: url(${MontserratRegular}) format("woff");
}

/** Montserrat Regular-Italic **/
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: italic;
  src: url(${MontserratItalic}) format("woff");
}

/** Montserrat Medium **/
@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  font-style: normal;
  src: url(${MontserratMedium}) format("woff");
}

/** Montserrat Medium-Italic **/
@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  font-style: italic;
  src: url(${MontserratMediumItalic}) format("woff");
}

/** Montserrat Bold **/
@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  font-style: normal;
  src: url(${MontserratBold}) format("woff");
}

/** Montserrat Bold-Italic **/
@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  font-style: italic;
  src: url(${MontserratBoldItalic}) format("woff");
}
`
