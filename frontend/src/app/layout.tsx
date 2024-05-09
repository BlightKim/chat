"use client"
import {ThemeProvider} from "@mui/material/styles";
import {Inter} from "next/font/google";
import "./globals.css";
import {Container, CssBaseline} from "@mui/material"
import theme from "@/theme/theme";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}