import React from "react";

export default function Footer() {
	return (
		<footer className="mt-10 px-4 w-full text-sm">
			<div className="w-4xl border-gray-200 border mx-auto"></div>
			<div className="w-4xl mx-auto py-5 text-gray-500">
				<div className="flex items-center">
					<p>© 2026 John Francis. All rights reserved.</p>
					<nav className="flex gap-2 ml-10 items-center">
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

					<p className="ml-auto">Philippines</p>
				</div>
			</div>
		</footer>
	);
}
