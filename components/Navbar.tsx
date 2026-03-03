"use client";

import React from "react";
import Image from "next/image";
import NavbarIcon from "./NavbarIcon";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Navbar({ open, setOpen }: NavbarProps) {
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
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scaleY: 0 }}
						animate={{ opacity: 1, scaleY: 1 }}
						exit={{ opacity: 0, scaleY: 0 }}
						transition={{ duration: 1, ease: "easeInOut" }}
						style={{ transformOrigin: "top" }}
						className="absolute -top-10 left-0 z-49 w-full bg-gray-100 py-2.5 px-4  lg:hidden h-screen overflow-y-scroll"
					>
						{/* Close button row */}
						<div className="flex ">
							<div
								className="block lg:hidden cursor-pointer ml-auto "
								onClick={() => setOpen(false)}
							>
								<NavbarIcon
									src="/close.png"
									alt="Close Logo"
									className="h-4 w-4"
								/>
							</div>{" "}
						</div>

						{/* Navigation Items */}
						<div className="flex flex-col   gap-4 py-4">
							{navItems.map((item) => (
								<div
									key={item}
									className="cursor-pointer hover:text-gray-900 text-gray-800 text-3xl font-semibold ml-8 flex items-center justify-between group"
								>
									{item}
									<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
										<NavbarIcon src="/chevron.png" alt="Close Logo" />
									</div>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Navigation Items */}
			<div className="fixed top-0 left-0 text-gray-800 z-48 bg-gray-100/90 w-full py-2.5">
				<div className="flex items-center justify-between lg:justify-center gap-6 w-245 mx-auto  ">
					<NavbarIcon src="/apple-logo.png" alt="Apple Logo" />
					<div className="items-center justify-center gap-6 hidden lg:flex text-sm">
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
