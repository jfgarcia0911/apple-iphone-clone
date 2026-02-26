import React from "react";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="fixed top-0 left-0 text-gray-900 z-50 bg-gray-700/90 w-full py-2.5">
			<div className="flex items-center justify-center md:gap-4 lg:gap-8 text-sm">
				<div className="">
          <Image src="/apple-logo.png" alt="Apple Logo" width={20} height={20} className="h-4 w-4" />
        </div>
				<div className="">Store</div>
				<div className="">Mac</div>
				<div className="">iPad</div>
				<div className="">iPhone</div>
				<div className="">Watch</div>
				<div className="">Vision</div>
				<div className="">AirPods</div>
				<div className="">TV & Jome</div>
				<div className="">Entertainment</div>
				<div className="">Accessories</div>
				<div className="">Support</div>
				<div className="">
          <Image src="/magnifying-glass.png" alt="Magnifying glass Logo" width={20} height={20} className="h-4 w-4" />
        </div><div className="">
          <Image src="/briefcase.png" alt="Briefcase Logo" width={20} height={20} className="h-4 w-4" />
        </div>
			</div>
		</div>
	);
}
