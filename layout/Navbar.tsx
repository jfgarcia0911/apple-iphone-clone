"use client";

import NavbarIcon from "../components/NavbarIcon";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type NavbarProps = {
	open: boolean;
	setOpen: (value: boolean) => void;
};

const navItems = [
	{
		nav: "Store",
    href: "/store",
		sections: [
			{
				title: "Shop",
				links: [
					{ label: "Shop the Latest", href: "/Shop", text: "" },
					{ label: "Mac", href: "/Mac", text: "" },
					{ label: "iPad", href: "/iPad", text: "" },
					{ label: "iPhone", href: "/iPad", text: "" },
					{ label: "Apple Watch", href: "/iPad", text: "" },
					{ label: "Apple Vision Pro", href: "/iPad", text: "" },
					{ label: "AirPods", href: "/iPad", text: "" },
					{ label: "Accessories", href: "/iPad", text: "" },
				],
			},
			{
				title: "Quick Links",
				links: [
					{ label: "Find a Store", href: "/", text: "" },
					{ label: "Order Status", href: "/", text: "" },
				],
			},
			{
				title: "Shop Special Stores",
				links: [
					{ label: "Certified Refurbished", href: "/", text: "" },
					{ label: "Education", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Mac",
    href: "/mac",
		sections: [
			{
				title: "Explore Mac",
				links: [
					{ label: "Explore All Mac", href: "/", text: "" },
					{ label: "MacBook Air", href: "/", text: "" },
					{ label: "MacBook Pro", href: "/", text: "" },
					{ label: "iMac", href: "/", text: "" },
					{ label: "Mac mini", href: "/", text: "" },
					{ label: "Mac Studio", href: "/", text: "" },
					{ label: "Mac Pro", href: "/", text: "" },
					{ label: "Displays", href: "/", text: "" },
					{ label: "Compare Mac", href: "/", text: "base" },
					{ label: "Switch from PC to Mac", href: "/", text: "base" },
				],
			},
			{
				title: "Shop Mac",
				links: [
					{ label: "Shop Mac", href: "/", text: "" },
					{ label: "Mac Accessories", href: "/", text: "" },
					{ label: "Apple Trade In", href: "/", text: "" },
				],
			},
			{
				title: "More from Mac",
				links: [
					{ label: "Mac Support", href: "/", text: "" },
					{ label: "AppleCare", href: "/", text: "" },
					{ label: "macOS Tahoe", href: "/", text: "" },
					{ label: "Apple Intelligence", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "iPad",
    href: "/ipad",
		sections: [
			{
				title: "Explore iPad",
				links: [
					{ label: "Explore All iPad", href: "/Shop the Latest", text: "" },
					{ label: "iPad Pro", href: "/", text: "" },
					{ label: "iPad Air", href: "/", text: "" },
					{ label: "iPad", href: "/", text: "" },
					{ label: "iPad mini", href: "/", text: "" },
					{ label: "Apple Pencil", href: "/", text: "" },
					{ label: "Keyboards", href: "/", text: "" },
					{ label: "Compare iPad", href: "/", text: "base" },
				],
			},
			{
				title: "Shop iPad",
				links: [
					{ label: "Shop iPad", href: "/", text: "" },
					{ label: "iPad Accessories", href: "/", text: "" },
				],
			},
			{
				title: "More from iPad",
				links: [
					{ label: "iPad Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "iPhone",
    href: "/iphone",
		sections: [
			{
				title: "Explore iPhone",
				links: [
					{ label: "Explore All iPhone", href: "/  ", text: "" },
					{ label: "iPhone 17 Pro", href: "/", text: "" },
					{ label: "iPhone Air", href: "/", text: "" },
					{ label: "iPhone 17", href: "/", text: "" },
					{ label: "iPhone 17e", href: "/", text: "" },
					{ label: "iPhone 16", href: "/", text: "" },
					{ label: "Compare iPhone", href: "/", text: "base" },
					{ label: "Switch from Android", href: "/", text: "base" },
				],
			},
			{
				title: "Shop iPhone",
				links: [
					{ label: "Shop iPhone", href: "/", text: "" },
					{ label: "iPhone Accessories", href: "/", text: "" },
				],
			},
			{
				title: "More from iPhone",
				links: [
					{ label: "iPhone Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Watch",
    href: "/watch",
		sections: [
			{
				title: "Explore Watch",
				links: [
					{ label: "Explore All Apple Watch", href: "/  ", text: "" },
					{ label: "Apple Watch Series 11", href: "/", text: "" },
					{ label: "Apple Watch SE 3", href: "/", text: "" },
					{ label: "Apple Watch Ultra 3", href: "/", text: "" },
					{ label: "Apple Watch Nike", href: "/", text: "" },
					{ label: "Apple Watch Hermes", href: "/", text: "" },
					{ label: "Compare Watch", href: "/", text: "base" },
					{ label: "Why Apple Watch", href: "/", text: "base" },
				],
			},
			{
				title: "Shop Watch",
				links: [
					{ label: "Shop Watch", href: "/", text: "" },
					{ label: "Apple Watch Bands", href: "/", text: "" },
					{ label: "Apple Watch Accessories", href: "/", text: "" },
				],
			},
			{
				title: "More from Watch",
				links: [
					{ label: "Apple Watch Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Vision",
    href: "/vision",
		sections: [
			{
				title: "Explore Vision",
				links: [
					{ label: "Explore All Vision Pro", href: "/  ", text: "" },
					{ label: "Tech Specs", href: "/", text: "base" },
				],
			},
			{
				title: "Shop Vision",
				links: [
					{ label: "Shop Apple Vision Pro", href: "/", text: "" },
					{ label: "Book a Demo", href: "/", text: "" },
					{ label: "Financing", href: "/", text: "" },
				],
			},
			{
				title: "More from Vision",
				links: [
					{ label: "Apple Vision Pro Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Airpods",
    href: "/airpods",
		sections: [
			{
				title: "Explore Airpods",
				links: [
					{ label: "Explore All Airpods", href: "/  ", text: "" },
					{ label: "Airpods 4", href: "/  ", text: "" },
					{ label: "Airpods Pro 3", href: "/  ", text: "" },
					{ label: "Airpods Max", href: "/  ", text: "" },
					{ label: "Compare AirPods", href: "/", text: "base" },
				],
			},
			{
				title: "Shop Airpods",
				links: [
					{ label: "Shop Airpods", href: "/", text: "" },
					{ label: "Apple Watch Bands", href: "/", text: "" },
				],
			},
			{
				title: "More from Airpods",
				links: [
					{ label: "Airpods Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "TV & Home",
    href: "/tv-home",
		sections: [
			{
				title: "Explore Vision",
				links: [
					{ label: "Explore All Vision Pro", href: "/  ", text: "" },
					{ label: "Tech Specs", href: "/", text: "" },
				],
			},
			{
				title: "Shop Watch",
				links: [
					{ label: "Shop Watch", href: "/", text: "" },
					{ label: "Apple Watch Bands", href: "/", text: "" },
					{ label: "Apple Watch Accessories", href: "/", text: "" },
				],
			},
			{
				title: "More from Watch",
				links: [
					{ label: "Apple Watch Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Entertainment",
    href: "/services",
		sections: [
			{
				title: "Explore Vision",
				links: [
					{ label: "Explore All Vision Pro", href: "/  ", text: "" },
					{ label: "Tech Specs", href: "/", text: "" },
				],
			},
			{
				title: "Shop Watch",
				links: [
					{ label: "Shop Watch", href: "/", text: "" },
					{ label: "Apple Watch Bands", href: "/", text: "" },
					{ label: "Apple Watch Accessories", href: "/", text: "" },
				],
			},
			{
				title: "More from Watch",
				links: [
					{ label: "Apple Watch Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Accessories",
    href: "/shop/accessores/all",
		sections: [
			{
				title: "Explore Vision",
				links: [
					{ label: "Explore All Vision Pro", href: "/  ", text: "" },
					{ label: "Tech Specs", href: "/", text: "" },
				],
			},
			{
				title: "Shop Watch",
				links: [
					{ label: "Shop Watch", href: "/", text: "" },
					{ label: "Apple Watch Bands", href: "/", text: "" },
					{ label: "Apple Watch Accessories", href: "/", text: "" },
				],
			},
			{
				title: "More from Watch",
				links: [
					{ label: "Apple Watch Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
	{
		nav: "Support",
    href: "/support",
		sections: [
			{
				title: "Explore Support",
				links: [
					{ label: "iPhone", href: "/  ", text: "" },
					{ label: "Mac", href: "/  ", text: "" },
					{ label: "iPad", href: "/  ", text: "" },
					{ label: "Watch", href: "/  ", text: "" },
					{ label: "Apple Vision Pro", href: "/  ", text: "" },
					{ label: "AirPods", href: "/  ", text: "" },
					{ label: "Music", href: "/  ", text: "" },
					{ label: "TV", href: "/  ", text: "" },
					{ label: "Explore Support", href: "/", text: "base" },
				],
			},
			{
				title: "Get Help",
				links: [
					{ label: "Shop Watch", href: "/", text: "" },
					{ label: "Apple Watch Bands", href: "/", text: "" },
					{ label: "Apple Watch Accessories", href: "/", text: "" },
				],
			},
			{
				title: "Helpful Topics",
				links: [
					{ label: "Apple Watch Support", href: "/", text: "" },
					{ label: "Applecare", href: "/", text: "" },
				],
			},
		],
	},
];

export default function Navbar({ open, setOpen }: NavbarProps) {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
							{navItems.map((item, index) => (
								<div
									key={index}
									className="cursor-pointer hover:text-gray-900 text-gray-800 text-3xl font-semibold ml-8 flex items-center justify-between group"
								>
									<Link href={item.href}>{item.nav}</Link>
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
				<div className="flex items-center justify-between lg:justify-center  px-4 max-w-full  ">
					
          <Link href="/" ><NavbarIcon src="/apple-logo.png" alt="Apple Logo" /></Link>
					<div className="items-center justify-evenly w-225 hidden lg:flex text-sm">
						{navItems.map((item, index) => (
							<nav
								key={index}
								className=" "
								onMouseEnter={() => setHoveredItem(item.nav)}
								// onMouseLeave={() => setHoveredItem(null)}
							>
								<Link href={item.href} className="hover:text-gray-900 cursor-pointer">{item.nav}</Link>

								<AnimatePresence>
									{hoveredItem === item.nav && (
										<motion.div
											initial={{ opacity: 0, scaleY: 0 }}
											animate={{ opacity: 1, scaleY: 1 }}
											exit={{ opacity: 0, scaleY: 0 }}
											transition={{ duration: 0.3, ease: "easeInOut" }}
											style={{ transformOrigin: "top" }}
											className="absolute top-10 left-0 w-screen  h-screen backdrop-blur-sm"
										>
											<div onMouseLeave={() => setHoveredItem(null)} className="w-full bg-gray-100 pt-10 pb-15">
												<div className="w-4xl flex gap-15 justify-start mx-auto  ">
													{/* Title */}
													{item.sections.map((section, index) => {
														const baseIndex = section.links.findIndex(
															(l) => l.text === "base",
														);
														return (
															<div key={index} className="">
																<h1>{section.title}</h1>
																<div
																	className={`mt-3 flex flex-col  font-bold ${index == 0 ? "text-3xl " : "text-base mt-4"} `}
																>
																	{section.links.map((link, index) => {
																		return (
																			<Link
																				href={link.href}
																				key={index}
																				className={` hover:text-gray-900 cursor-pointer ${link.text === "base" ? "text-base  " : "mb-1"} ${index === baseIndex? "mt-5": ""	} `}
																			>
																				{link.label}
																			</Link>
																		);
																	})}
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</nav>
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
