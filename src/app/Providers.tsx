"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
