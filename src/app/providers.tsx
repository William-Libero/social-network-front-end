"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        enableSystem={true}
        {...props}
        attribute="class"
        defaultTheme="light"
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
