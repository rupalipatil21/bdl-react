"use client";
import { createTheme, ThemeOptions } from "@mui/material";
const Theme = createTheme();

interface CustomPalette {
    [key: string]: string;
    white: string,
    grey: string,
    green: string,
    black: string,
    black2: string
    orange: string
    blue: string
    overlay1: string
    overlay2: string
    lightGreen: string,
    overlay3: string
    overlay4: string
    overlay5: string
    overlay6: string
    overlay7: string
    orange2: string
    darkGreen:string
    darkOrange: string
    lightOrange: string
    grey1: string
    grey2: string
    grey3: string
    captiongrey: string
    lightblue: string
    lightblue1: string
    greybg: string
    green1: string
    green2: string
    disabledColor: string
    seachbtn1: string
    seachbtn2: string
    hoverBlack: string
    dottedBorder: string
}

declare module "@mui/material/styles" {
    interface Palette {
        custom?: CustomPalette;
    }
    interface PaletteOptions {
        custom?: CustomPalette;
    }
    interface TypographyVariants {
        font_12: React.CSSProperties
        menuLink: React.CSSProperties
        tagLine: React.CSSProperties
        logoText: React.CSSProperties
        body_h4: React.CSSProperties
        body_h2: React.CSSProperties
        body_h3: React.CSSProperties
        subTitle1: React.CSSProperties
        font_30: React.CSSProperties
        footer_h3: React.CSSProperties
        font_22: React.CSSProperties
        font_14: React.CSSProperties
        left_title: React.CSSProperties
        list_title: React.CSSProperties
        font_16: React.CSSProperties
        caption1: React.CSSProperties
        subtitle3: React.CSSProperties
        title1: React.CSSProperties
        info_text: React.CSSProperties
        font_18: React.CSSProperties
        e_date: React.CSSProperties
        imgText: React.CSSProperties
        title1_500: React.CSSProperties
        captionTitle: React.CSSProperties
    }
    interface TypographyVariantsOptions {
        font_12: React.CSSProperties
        menuLink: React.CSSProperties
        tagLine: React.CSSProperties
        logoText: React.CSSProperties
        body_h4: React.CSSProperties
        body_h2: React.CSSProperties
        body_h3: React.CSSProperties
        subTitle1: React.CSSProperties
        font_30: React.CSSProperties
        footer_h3: React.CSSProperties
        font_22: React.CSSProperties
        font_14: React.CSSProperties
        left_title: React.CSSProperties
        list_title: React.CSSProperties
        font_16: React.CSSProperties
        caption1: React.CSSProperties
        subtitle3: React.CSSProperties
        title1: React.CSSProperties
        info_text: React.CSSProperties
        font_18: React.CSSProperties
        e_date: React.CSSProperties
        imgText: React.CSSProperties
        title1_500: React.CSSProperties
        captionTitle: React.CSSProperties
    }
    interface MuiAppBar {
        backgroundColor: string;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        font_12: true,
        menuLink: true
        tagLine: true
        logoText: true
        body_h4: true
        body_h2: true
        body_h3: true
        subTitle1: true
        font_30: true
        footer_h3: true
        font_22: true
        font_14: true
        left_title: true
        list_title: true
        font_16: true
        caption1: true
        subtitle3: true
        title1: true
        info_text:true
        font_18: true
        e_date: true
        imgText: true
        title1_500: true
        captionTitle: true
    }
}

const breakpoints = {
  largescreen: "1920px",
  smallDesktop: "1536px",
  lg: "1199px",
  md: "991px",
  sm: "767px",
};

const commonstyle = {
  display: "block",
  marginBottom: 10,
}

const font_12_400 = {
    fontSize: "12px",
    fontWeight: 400
}

const font_400 = {
    fontWeight: 400,
    ...commonstyle
}

const font14 = {
  fontSize: 14,
  fontWeight: 400,
  display: "block",
}

const bodyh2 = {
  fontSize: 20,
  fontWeight: 700,
  ...commonstyle
}

const typography: ThemeOptions["typography"] = {
  font_12: {
    ...font_12_400,
    [`@media (max-width: ${breakpoints.sm})`]: {
        fontSize: 9,
    }
  },
  menuLink: {
    fontSize: 14,
    fontWeight: 500,
    display: "block",
    lineHeight: 1.1,
  },
  tagLine: {
    fontSize: 10,
    letterSpacing: "4px",
    [`@media (max-width: ${breakpoints.sm})`]: {
        letterSpacing: "2px"
    },
  },
  logoText: {
    ...font_12_400,
    letterSpacing: "6.63px",
    display: "block",
    lineHeight: "4px",
    [`@media (max-width: ${breakpoints.sm})`]: {
        letterSpacing: "2px"
    },
  },
  body_h4: {
    ...font_400,
    fontSize: 16,
    [Theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  body_h2: {
    ...bodyh2,
    lineHeight: 1.1,
    [Theme.breakpoints.down("md")]: {
      fontSize: 14,
      marginBottom: 3,
    },
  },
  subTitle1: {
    fontSize: 14,
    ...font_400,
    [Theme.breakpoints.down("md")]: {
      fontSize: 12,
      marginBottom: 3,
    },
  },
  body_h3 :{
    ...font_400,
    fontSize: 13,
    [Theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
  },
  font_30: {
    fontSize: 30,
    lineHeight: "33px",
    fontWeight: 700,
    [Theme.breakpoints.down("lg")]: {
        fontSize: 18,
        lineHeight: "25px",
    },
    [Theme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: "19px",
    },
  },
  footer_h3: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 15,
    // lineHeight: "76px",
    display: "block",
    textTransform: "uppercase",
  },
  font_22: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 25,
    paddingLeft: 90,
    display: "block",
    [Theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  font_14: {
    ...font14,
    paddingLeft: 90,
    marginTop: 10,
  },
  left_title: {
    fontSize: 18,
    fontWeight: 700,
    ...commonstyle,
  },
  list_title: {
    fontSize: 15,
    fontWeight: 500,
    textTransform: "capitalize",
    display: "block",
    lineHeight: "21px"
  },
  font_16: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.1,
    ...commonstyle
  },
  caption1: {
    fontSize: 22,
    fontWeight: 500,
  },
  subtitle3: {
    ...font14,
    marginBottom: 10,
  },
  title1: {
    ...bodyh2,
    lineHeight: 1.1,
  },
  title1_500: {
    ...bodyh2,
    fontWeight: 500,
    paddingBottom: 3,
    paddingTop: 10,
    lineHeight: "1.1px"
  },
  info_text: {
    fontSize: 22,
    fontWeight: 400,
  },
  font_18:{
    fontSize: 18,
    fontWeight: 400,
    ...commonstyle
  },
  e_date: {
    fontSize: 14,
    fontWeight: 700,
    margin: "5px 0",
    display: "block",
    fontFamily: "Lato"
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.66,
    padding: "8px 16px 8px 16px"
  },
  imgText: {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.2px",
    marginTop: "4px",
  },
  captionTitle: {
    fontSize: "25px",
    fontWeight: 400,
  }
};

export const theme = createTheme({
    palette: {
      primary: {
        main: "#57bab4",
      },
      secondary: {
        main: "#1976d2"
      },
      error: {
        main: "#d32f2f",
      },
      custom: {
          white: "#ffffff",
          grey: "#707070",
          green: "#57bab4",
          black: "#000000",
          black2: "#221d19",
          orange: "#ffe6b2",
          blue: "#cfeae8",
          overlay1: "#0b0705",
          overlay2: "#3e5830",
          overlay3: "#fadad4",
          overlay4: "#fcde9e",
          overlay5: "#f8d9b9",
          overlay6: "#795b3a",
          overlay7: "#201c0b",
          lightGreen: "#e4f5cf",
          orange2: "#faebdb",
          darkGreen: "#4aaea7",
          darkOrange: "#ea9e3a",
          lightOrange: "#fffbef",
          grey1: "#7B7576",
          grey2: "#e6e7e9",
          grey3: "#464747",
          captiongrey: "#bbbbbb",
          lightblue: "#57bab452",
          lightblue1: "#57bfb81c",
          greybg: "#eef2f6",
          green1: "#65C466",
          green2: "#33cf4d",
          disabledColor: "#E9E9EA",
          seachbtn1: "#a1a1a11c",
          seachbtn2: "rgb(185 185 185 / 25%)",
          hoverBlack: "rgb(197 197 197)",
          dottedBorder: "#bfbfbf",
      }
    },
    typography: {
        ...typography
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: ({ theme }) =>  ({
                backgroundColor: "transparent",
                [theme.breakpoints.down("md")]: {
                    backgroundColor: "#fff",
                },
                }),
            }
        },
        MuiButton: {
          styleOverrides: {
            containedPrimary: {
              color: "#fff",
            },
            root: {
              textTransform: "capitalize"
            }
          },
        },
        MuiCssBaseline: {
          styleOverrides: {
            "*::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "*::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#707070",
              borderRadius: "8px",
            },
            "*::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#9e9e9e",
            },
          }
        }
    },
    breakpoints: {
        values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1140,
        xl: 1536,
        },
    },
    // spacing: [0, 8, 16, 24, 32, 40, 48, 64],
    spacing: 8,
})