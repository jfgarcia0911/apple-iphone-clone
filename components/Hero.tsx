"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProductHero from "./ProductHero";

export default function Hero() {
	return (
		<main>
			{/* iPhone Section */}
			<ProductHero
				title="iPhone"
				subtitle="Say hello to the latest generation of iPhone."
				imageDesktop="/iphone2.png"
				imageMobile="/iphone2.png"
				imageClassNameDesktop="h-150  md:w-162"
				imageClassNameMobile="h-70 w-55"
				buttonLeftText="Learn more"
				buttonRightText="Shop iPhone"
				backgroundColor="bg-gray-100"
				sectionHeight="h-162"
			/>
			{/* iPad air Section */}
			<ProductHero
				title={
					<>
						iPad <span className="italic text-blue-600 ">air</span>
					</>
				}
				subtitle="Now supercharged by the M3 chip."
				imageDesktop="/ipadAir.png"
				imageMobile="/ipadAir2.png"
				imageClassNameDesktop="h-86 w-137"
				imageClassNameMobile="h-60 w-55"
				buttonLeftText="Learn more"
				buttonRightText="Buy"
				backgroundColor="bg-linear-to-b from-blue-400/80 via-blue-400/30 to-gray-100"
				sectionHeight="h-162"
			/>
			{/* MacBook Section */}
			<ProductHero
				title='MacBook Pro 14"'
				subtitle="Supercharged by M5."
				imageDesktop="/macbookPro.png"
				imageMobile="/macbookPro.png"
				imageClassNameDesktop="h-100 w-200"
				imageClassNameMobile="h-88 w-160 -translate-y-13"
				buttonLeftText="Learn more"
				buttonRightText="Buy"
				backgroundColor="bg-black"
				sectionHeight="h-162"
				dark={true}
			/>

			<div className="md:flex gap-3 w-full ">
				<ProductHero
					title={
						<h1 className="flex items-center gap-1 text-xl md:text-2xl lg:text-4xl font-bold">
							<Image
								src="/apple-logo.png"
								alt="Apple Watch Series 11 Ultra"
								width={200}
								height={200}
								className="h-6 lg:h-10 w-6 lg:w-10 mx-auto"
							/>
							WATCH <span className="font-normal ml-2">SERIES 11</span>
						</h1>
					}
					subtitle={
            <p className="text-xl">
              The ultimate way to watch your health.
            </p>
          }
					imageDesktop="/watch-series11.png"
					imageMobile="/watch-series11.png"
					imageClassNameDesktop="md:w-120 lg:w-200 scale-130 translate-y-10"
					imageClassNameMobile="w-140 translate-y-14 scale-120"
					buttonLeftText="Learn more"
					buttonRightText="Buy"
					backgroundColor="bg-gray-100"
					sectionHeight=" lg:h-150"
				/>
				<ProductHero
					title={
						<h1 className="flex items-center gap-1 text-xl md:text-2xl lg:text-4xl font-bold">
							<Image
								src="/apple-logo.png"
								alt="Apple Watch Series 11 Ultra"
								width={200}
								height={200}
								className="h-6 lg:h-10 w-6 lg:w-10 mx-auto filter invert"
							/>
							WATCH 
						</h1>
					}
					subtitle={
            <p className="text-xl leading-6">
              The new Black Unity band. <br /> Inspired by the power of connection.
            </p>
          }
					imageDesktop="/black-band.png"
					imageMobile="/watch-series11.png"
					imageClassNameDesktop="md:w-120 lg:w-200 rotate-310 translate-y-5"
					imageClassNameMobile="w-140 translate-y-14 scale-120"
					buttonLeftText="Shop"
					buttonRightText="Buy"
					backgroundColor="bg-black"
					sectionHeight=" lg:h-150"
				dark={true}

				/>
			</div>

			<ProductHero
				title='MacBook Pro 14"'
				subtitle="Supercharged by M5."
				imageDesktop="/macbookPro.png"
				imageMobile="/macbookPro.png"
				imageClassNameDesktop="h-100 w-200"
				imageClassNameMobile="h-88 w-160 -translate-y-13"
				buttonLeftText="Learn more"
				buttonRightText="Buy"
				backgroundColor="bg-black"
				sectionHeight="h-162"
				dark={true}
			/>
		</main>
	);
}
