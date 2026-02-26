"use client";

import React from "react";
import Image from "next/image";
import NavbarIcon from "./NavbarIcon";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type NavbarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};


const navItems = [
	"Store",
	"Mac",
	"iPad",
	"iPhone",
	"Watch",
	"Vision",
	"AirPods",
	"TV & Home",
	"Entertainment",
	"Accessories",
	"Support",
];

export default function Navbar({open, setOpen}: NavbarProps) {



  // Close menu when screen size is >= lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	return (
		<div className="relative">
			{/* Menu bar */}
			{open && (
				<div className="absolute -top-10 left-0 z-49 w-full bg-gray-100 py-2.5 px-4 lg:hidden h-screen">
					{/* Close button row */}
					<div className="flex">
						<div
							className="block lg:hidden cursor-pointer ml-auto"
							onClick={() => setOpen(false)}
						>
							<NavbarIcon src="/close.png" alt="Close  Logo" />
						</div>{" "}
					</div>

					{/* Navigation Items */}
					<div className="flex flex-col items-center justify-center gap-4 py-4">
						{navItems.map((item) => (
							<div key={item} className="cursor-pointer hover:text-gray-900">
								{item}
							</div>
						))}
					</div>
				</div>
			)}
			<div className="fixed top-0 left-0 text-gray-800 z-48 bg-gray-700/90 w-full py-2.5">
				<div className="flex items-center justify-between lg:justify-center gap-6 text-sm px-4">
					<NavbarIcon src="/apple-logo.png" alt="Apple Logo" />
					<div className="items-center justify-center gap-6 hidden lg:flex">
						{/* Navigation Items */}
						{navItems.map((item) => (
							<div key={item} className="cursor-pointer hover:text-gray-900">
								{item}{" "}
							</div>
						))}
					</div>
					<div className="flex  items-center justify-center gap-6 ">
						<NavbarIcon
							src="/magnifying-glass.png"
							alt="Magnifying glass Logo"
						/>
						<NavbarIcon src="/briefcase.png" alt="Briefcase Logo" />
						<div
							className="block lg:hidden cursor-pointer "
							onClick={() => setOpen(true)}
						>
							<NavbarIcon src="/menu-bar.png" alt="Menu Bar Logo" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
