import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import "./fonts";
export const theme = extendTheme({
  fonts: {
    heading: "intelo-bold",
    body: "intelo-medium",
  },

  config: {
    cssVarPrefix: "ck",
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  colors: {
    gray: {
      "010": "#FCFFF5",
      "015": "#F9FAFB",
      "020": "#F8F8F8",
      "025": "#F2F2F2",
      "050": "#f4f4f4",
      "100": "#E6E6E6",
      "150": "#DEDEDF",
      "200": "#d4d4d5",
      "300": "#DADADB",
      "400": "#B5B5B5",
      "450": "#A7A8A8",
      "500": "#A4A6A6",
      "525": "#707070",
      "550": "#666666",
      "575": "#505253",
      "600": "#767676",
      "650": "#707070",
      "750": "#333333",
      "800": "#242526",
      "900": "#1B1C1D",
    },
    green: {
      "300": "#A8C599",
      "800": "#1E561F",
      "900": "#21BA45",
    },
    yellow: {
      "300": "#FBBD08",
      "800": "#735b15",
    },
    orange: {
      "300": "#FE5000",
    },
    blue: {
      "500": "#2185D0",
    },
    wine: {
      "500": "#973937",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
        fontSize: "16px",
      },
      input: {
        _disabled: {
          color: "back",
          opacity: ".8 !important",
          background: "#f3f3f3",
        },
      },
      select: {
        _disabled: {
          color: "back",
          opacity: ".8 !important",
          background: "#f3f3f3",
        },
      },
      textarea: {
        _disabled: {
          color: "back",
          opacity: ".8 !important",
          background: "#f3f3f3",
        },
      },
    },
  },
  components: {
    Steps,
  },
});
