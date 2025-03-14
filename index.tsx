import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export default function Desktop(): JSX.Element {
  // Navigation links data
  const navigationLinks = [
    { name: "Sipora Jaya", active: true },
    { name: "Sioban", active: false },
    { name: "Sido Makmur", active: false },
    { name: "Matobe", active: false },
  ];

  // Action buttons data
  const actionButtons = [
    { name: "Activity Tracker" },
    { name: "Event" },
    { name: "Task" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] relative px-6 py-8">
        {/* Header Section */}
        <header className="flex items-center justify-between mb-24">
          <div className="flex items-center gap-4">
            <img
              className="w-[75px] h-[75px] object-cover"
              alt="Logo JEMARI"
              src=""
            />
            <h1 className="font-black text-black text-[29px] font-sans">
              GREAT Mentawai
            </h1>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`font-normal text-[15px] text-center ${
                      link.active ? "underline" : ""
                    }`}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {/* Main Content Section */}
        <main className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="max-w-[608px]">
            <h2 className="font-black text-black text-[56px] mb-8">Welcome</h2>
            <p className="font-normal text-black text-[15px] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              className="w-[345px] h-[230px] object-cover"
              alt="Tropical coastline"
              src=""
            />
          </div>
        </main>

        {/* Action Buttons Section */}
        <section className="flex justify-center gap-8">
          {actionButtons.map((button, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-[165px] h-[45px] bg-[#d9d9d9] rounded-[25px] text-[15px] font-normal text-black"
            >
              {button.name}
            </Button>
          ))}
        </section>
      </div>
    </div>
  );
}
