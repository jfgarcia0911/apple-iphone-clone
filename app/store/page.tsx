"use client";
import React from "react";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import ProductCarousel from "@/layout/ProductCarousel";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const items = [
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4V2duSGVkdTVncGZYc0RnS1paU3IySCsrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazAreDNWYWNLK1lESGRXY25VRzdWVTQ",
		href: "/mac",
		title: "Mac",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=1200&hei=780&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXM1doT212VzJoWjBSKzRpbmNETHN1QnRHU3BERzdnOWdiQkwvWTZGajY2b1M0TjRWdzF2UjRGVEY0c3dBQVZ6VFN0TmdKaCs3NTJMbFVuOGp2LzI5RGc",
		href: "/iphone",
		title: "iPhone",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg",
		href: "/ipad",
		title: "iPad",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkeUdJZTE2SHMxcG9uUER3YTRFOUZ6ckh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2k5NGJENldmZ3lMeGxpSDNmeE9hd2s",
		href: "/watch",
		title: "Apple Watch",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=VzVpanYvTldHb05iVXFhc0xveWRLM25jd0w4dXFwc1hFbWZkNm9IcUR2bytSMWt1ZUNyTGx4SjRKL1pSL0ZDeGpCeVFkSWhuN0RJazJDeHBqaFFac0hlZzcwajlwb1R2dHNlazl1dldSUGQ5RzBLTDk5c25YRG5wR2ZpUlI4RFM",
		href: "/vision",
		title: "Apple Vision Pro",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yMDhFUStvWHB3SDlDa3VrdUZORWRqeld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VGZUMjJQZFhhT2thWmkxZjhra3FyZEk",
		href: "/airpods",
		title: "AirPods",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202601?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yL1FqZ2pobDV2bDUyWU1XVmNnMmx3VFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFg3OVE4VE5ic3VkUXEzS3pERTg2am8",
		href: "/airtag",
		title: "AirTag",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA",
		href: "/tv-home",
		title: "Apple TV 4K",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA",
		href: "/homepad",
		title: "HomePod",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUlac2ROMkdFNG0rMXdMQ0t2WTVlSFBrcjVFNVdueFRVbVY3TGtiL2RjUWVXQ0tWTWFGNXA2NmlzMmRVQ1l6WmlFMHVWQmxPTEFhTVNvVStGSjlxajM",
		href: "/accessories",
		title: "Accessories",
	},
	{
		image:
			"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpWWJZU3c1a04rNW9Zem5ScTRJL25qWnlvS2lBUzZZRytsa2hkcGtRYVFoZnJYVFd2aTZFN3pZenpyR0NkbGY4em93Y2tIU0laK3d5Sk5nc2FZNFVHYkJPaG9jNFJLV2crNENpUkQzZ3ZTOHBSOW02S2NIS2N2ZkNWTVZOSXFRUmln",
		href: "/apple-gift-card",
		title: "Apple Gift Card",
	},
];

export default function StorePage() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<Navbar open={menuOpen} setOpen={setMenuOpen} />
			<main className="py-20 flex flex-col items-center  justify-center text-gray-800 bg-gray-100">
				<section className="w-full justify-center flex">
					<div className="flex  w-450 px-10 overflow-hidden ">
						<div className="basis-2/3 mr-135.75">
							<h1 className="text-8xl font-semibold">Store</h1>
						</div>
						<div className="basis-1/3  text-nowrap text-right">
							<p className="text-3xl font-semibold">
								The best way to buy the <br /> products you love.
							</p>
							<p className="mt-3 text-blue-600 cursor-pointer hover:underline">
								{" "}
								Connect with a Specialist <MdArrowOutward className="inline" />
							</p>
							<p className="mt-3 text-blue-600 cursor-pointer hover:underline">
								Find an Apple Store <MdArrowOutward className="inline" />
							</p>
						</div>
					</div>
				</section>

				<section className="mt-20 w-full flex justify-center ">
					<div className="flex w-450 px-10 ">
						<ProductCarousel images={items} />
					</div>
				</section>
			</main>
			{!menuOpen && <Footer />}
		</>
	);
}
