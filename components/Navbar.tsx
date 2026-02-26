import React from "react";
import Image from "next/image";
import NavbarIcon from "./NavbarIcon";

export default function Navbar() {
	return (
		<div className="fixed top-0 left-0 text-gray-900 z-50 bg-gray-700/90 w-full py-2.5">
			<div className="flex items-center justify-between lg:justify-center gap-6 text-sm px-4">
				<NavbarIcon src="/apple-logo.png" alt="Apple Logo" />
				<div className="items-center justify-center gap-6 hidden lg:flex">
					<div>Store</div>
					<div>Mac</div>
					<div>iPad</div>
					<div>iPhone</div>
					<div>Watch</div>
					<div>Vision</div>
					<div>AirPods</div>
					<div>TV & Jome</div>
					<div>Entertainment</div>
					<div>Accessories</div>
					<div>Support</div>
				</div>
				<div className="flex  items-center justify-center gap-6 ">
					<NavbarIcon src="/magnifying-glass.png" alt="Magnifying glass Logo" />
					<NavbarIcon src="/briefcase.png" alt="Briefcase Logo" />
					<NavbarIcon src="/menu-bar.png" alt="Menu Bar Logo" />
				</div>
			</div>
		</div>
	);
}
