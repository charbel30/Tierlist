"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { Button } from "@/components/ui/button";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        className=" md:sticky  transition hover:scale-[1.12] hover:drop-shadow-sm   ease-out  active:scale-[0.95]   "
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100   transition-all  dark:-rotate-90  dark:scale-0 " />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90  transition-all  dark:rotate-0 dark:scale-100" />

        )}
         <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
