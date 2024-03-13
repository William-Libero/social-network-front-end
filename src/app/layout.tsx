import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Header from "./components/Header";
import { StoreProvider } from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social network",
  description: "Social network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html
        lang="en"
        className={"scroll-smooth light"}
        style={{ marginTop: "0px", colorScheme: "light" }}
      >
        <body
          className={
            inter.className + " light light:bg-gray-100 dark dark:bg-slate-900"
          }
        >
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
