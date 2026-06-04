import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/app/globals.css";
import "@/styles/custom.css"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";
import { HeaderProvider } from "./context/HeaderContext";
import favicon from "@/public/favicon-128.png"
import { SnackbarProvider } from "./context/SnackbarContext";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "DR. BHAU DAJI LAD MUMBAI CITY MUSEUM - Home",
  description: "Designed by Pi Techniques",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={lato.className}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <HeaderProvider>
              <CssBaseline />
              {children}
            </HeaderProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
