"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle , ThemeProvider } from "./theme-provider";

/*const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];*/

export function NavigationBar() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <header className="  sticky z-40 m-5 w-full p-4 ">
      <div className="container flex h-auto  w-auto   space-x-4  sm:justify-between sm:space-x-0">
    
        <NavigationMenu>
          <NavigationMenuList className="flex-end p-4">
            <NavigationMenuItem className=" pl-32 pr-14   transition ease-in-out ">
              <NavigationMenuLink asChild>
                <a href="/">
                  <Image
                    src="/icons/logo.svg"
                    alt="website logo"
                    sizes="100vw"
                    width={10}
                    height={10}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className=" ">
          <NavigationMenuList className="flex-end p-4">
            <NavigationMenuItem>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/login" className="" legacyBehavior passHref>
                <Button
                  variant="outline"
                  className=" scale-0.76  transition ease-in-out hover:scale-[1.05]   hover:drop-shadow-sm  active:scale-[0.95]"
                >
                  <NavigationMenuLink>Sign in</NavigationMenuLink>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/SignUp" className="" legacyBehavior passHref>
                <Button className="group scale-105 rounded-lg bg-blue-200 px-4 py-3 font-bold text-blue-800 shadow transition-all ease-in-out hover:scale-[1.10] hover:bg-blue-300 hover:shadow-lg active:scale-[0.98] dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
                  <NavigationMenuLink>Register</NavigationMenuLink>
                  <Icon
                    icon="material-symbols:arrow-forward-rounded"
                    width={18}
                    className="scale-105 pt-1 transition-all duration-500 ease-in-out hover:!translate-x-2 group-hover:translate-x-1"
                  ></Icon>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      
      </div>
    </header>
    </ThemeProvider>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
