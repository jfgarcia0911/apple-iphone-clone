"use client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCarousel({ images }) {
	const containerRef = useRef();

	// Scroll functions for arrows
	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollBy({ left: -150, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollBy({ left: 150, behavior: "smooth" });
		}
	};

	return (
		<div className="relative mx-10 group">
			{images && (
				<div
					ref={containerRef}
					className="bg-gray-100 w-full overflow-hidden   flex relative "
				>
					{images.map((item, index) => {
						return (
							<Link
								href={item.href}
								key={index}
								className="relative h-52 shrink-0    cursor-pointer ml-8"
							>
								<Image
									src={item.image}
									width={120}
									height={78}
									alt={item.name || "alt name"}
									className="object-contain mt-1  h-22 w-30"
								/>
								<h1 className="text-center mt-2">{item.title}</h1>
							</Link>
						);
					})}
				</div>
			)}
			<div
				onClick={scrollLeft}
				className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-1500 top-8 -left-10 cursor-pointer w-16 h-16  rounded-full   flex items-center justify-center bg-gray-200"
			>
				<IoIosArrowBack strokeWidth={2} size={45} className="text-gray-500" />
			</div>
			<div
				onClick={scrollRight}
				className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1500 top-8 -right-10 cursor-pointer w-16 h-16 rounded-full flex items-center justify-center bg-gray-200"
			>
				<IoIosArrowForward
					strokeWidth={2}
					size={45}
					className="text-gray-500"
				/>
			</div>
		</div>
	);
}
