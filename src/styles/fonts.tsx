import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
    {
        //Intelo ExtrBold
        @font-face {
            font-family: intelo-extra-bold;
            src: url("/assets/fonts/intelo/Intelo-ExtraBold.ttf");
        }
        //Intelo Italic
        @font-face {
            font-family: intelo-italic;
            src: url("/assets/fonts/intelo/Intelo-Italic.ttf");
        }
        //Intelo Medium
        @font-face {
            font-family: intelo-medium;
            src: url("/assets/fonts/intelo/Intelo-Medium.ttf");
        }
        //Intelo Light
        @font-face {
            font-family: intelo-light;
            src: url("/assets/fonts/intelo/Intelo-Light.ttf");
        }
        //Intelo Bold
        @font-face {
            font-family: intelo-bold;
            src: url("/assets/fonts/intelo/Intelo-Bold.ttf");
        }
        //Intelo Thin
        @font-face {
            font-family: intelo-thin;
            src: url("/assets/fonts/intelo/Intelo-Thin.ttf");
        }
    }
  `}
  />
);
