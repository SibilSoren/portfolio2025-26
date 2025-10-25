"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-btn";
import { useIsMobile } from "@/hooks/useIsMobile";
import StaggeredMenu from "./StaggeredMenu";
import AnimatedContent from "./AnimatedContent";

export default function NavBar() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://x.com/sibil_soren_dev" },
    { label: "GitHub", link: "https://github.com/SibilSoren" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/sibilsarjamsoren" },
  ];
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <AnimatedContent
      duration={1}
      delay={0}
      reverse={true}
      animateOpacity
      initialOpacity={0}
    >
      <div className="flex justify-between items-center bg-white dark:bg-black py-4 mb-8 rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance px-4">
            sibil.
          </h1>
        </div>
        <div className="hidden md:block">
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">Skills</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">Blogs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="items-center px-4 gap-2 hidden md:flex">
          <ThemeToggleButton />
          <Button>
            Resume <Download />
          </Button>
        </div>

        <div className="flex md:hidden items-center justify-center bg-orange-600">
          <StaggeredMenu
            isFixed
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
        </div>
      </div>
    </AnimatedContent>
  );
}
