import React from "react";

export default function Footer() {
	return (
		<footer className="pt-10 px-4 max-w-full text-sm bg-gray-100 flex flex-col items-center ">
			<div className="w-full lg:w-245 border-gray-400  border "></div>
			<div className="w-full lg:w-245 py-5  text-gray-500">
				<div className="grid  grid-cols-2 lg:grid-cols-12 items-center">
					<p className="col-span-2 md:col-span-1 lg:col-span-4 order-2 md:order-1  text-left mt-3 md:mt-0">© 2026 John Francis. All rights reserved.</p>
					<nav className="col-span-2 order-last lg:col-span-7 mr-auto flex gap-2  items-center">
						<a href="/policy">Privacy Policy</a>
            <div className="h-4 border border-r border-gray-400"></div>
						<a href="/terms">Terms of Use</a>
            <div className="h-4 border border-r border-gray-400"></div>
						<a href="/sales">Sales and Refunds</a>
            <div className="h-4 border border-r border-gray-400"></div>
						<a href="/legal">Legal</a>
            <div className="h-4 border border-r border-gray-400"></div>
						<a href="/map">Site Map</a>
					</nav>

					<p className="col-span-2 md:col-span-1  order-1 md:order-2 lg:order-last text-left md:text-right">Philippines</p>
				</div>
			</div>
		</footer>
	);
}
