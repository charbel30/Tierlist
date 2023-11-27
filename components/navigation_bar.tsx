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
import { ModeToggle } from "./theme-provider";

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
    <header className="sticky top-0 z-50  w-full  p-4 font-mono ">
      <div className="flex   h-auto !pl-[4.5vw]  !pr-0 md:container     sm:justify-between sm:space-x-0">
        <NavigationMenu>
          <NavigationMenuList className="flex-end p-4">
            <NavigationMenuItem className=" pr-10   transition ease-in-out ">
              <NavigationMenuLink asChild>
                <a href="/">
                  <Image
                    src="/icons/logo.svg"
                    alt="website logo"
                    sizes="100vw"
                    width={10}
                    height={10}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" pr-10   transition ease-in-out ">
              <Button className=" group    scale-[1.20] hover:scale-125 transform   overflow-hidden   border-2  border-foreground bg-background text-foreground shadow-[1px_2px_#323232] transition-all  ease-in active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_#323232]  dark:border-foreground dark:bg-secondary dark:text-foreground dark:shadow-[1px_2px_#dedede] dark:active:shadow-[0px_0px_#dedede]">
                <span className=" mr-8   font-semibold transition-all duration-700 ease-in-out  group-hover:text-transparent">
                  Create
                </span>
                <span className="absolute right-0 flex h-full w-[37px]  items-center justify-center bg-[#dedede] dark:bg-background transition-all duration-300 ease-in-out group-hover:w-28 ">
                  <Icon
                    width={20}
                    className=" scale-105  items-center justify-center text-foreground transition-all duration-500 ease-in-out hover:!translate-x-2 hover:translate-y-0 dark:text-foreground "
                    icon="ic:round-plus"
                  ></Icon>
                </span>
              </Button>
            </NavigationMenuItem>

            <NavigationMenuItem className=" pr-10   transition ease-in-out ">
              <a href="/">
                <Button
                  variant="outline"
                  className=" scale-0.76  transition ease-in-out hover:scale-[1.05]   hover:drop-shadow-sm  active:scale-[0.95]"
                >
                  Overview
                </Button>
              </a>
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
                    className="  scale-105 items-center justify-center pt-[2px] transition-all duration-500 ease-in-out hover:!translate-x-2 group-hover:translate-x-1"
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
