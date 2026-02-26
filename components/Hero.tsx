"use client";

import Image from "next/image";
import ImageSection from "./ImageSection";

export default function Hero() {
	return (
		<main>
			{/* iPhone Section */}
			<ImageSection
				title="iPhone"
				subtitle="Say hello to the latest generation of iPhone."
				imageDesktop="/iphone2.png"
				imageMobile="/iphone2.png"
				imageClassNameDesktop="h-150  md:w-162 scale-110 translate-y-10"
				imageClassNameMobile="h-70 w-55"
				buttonLeftText="Learn more"
				buttonRightText="Shop iPhone"
				backgroundColor="bg-gray-100"
				sectionHeight="h-125 md:h-165 lg:h-175"
			/>
			{/* iPad air Section */}
			<ImageSection
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
				sectionHeight="h-125 md:h-165 lg:h-175"
			/>
			{/* MacBook Section */}
			<ImageSection
				title='MacBook Pro 14"'
				subtitle="Supercharged by M5."
				imageDesktop="/macbookPro.png"
				imageMobile="/macbookPro.png"
				imageClassNameDesktop="md:h-110 lg:h-120 w-200 md:-translate-y-5 lg:-translate-y-10"
				imageClassNameMobile="h-88 w-160 -translate-y-13"
				buttonLeftText="Learn more"
				buttonRightText="Buy"
				backgroundColor="bg-black"
				sectionHeight="h-125 md:h-165 lg:h-175"
				dark={true}
			/>

			<div className="md:flex gap-3 w-full ">
				{/* Watch series 11 section */}
				<ImageSection
					title={
						<div className="flex items-center gap-1 text-2xl md:text-3xl lg:text-4xl font-bold">
							<Image
								src="/apple-logo.png"
								alt="Apple Watch Series 11 Ultra"
								width={200}
								height={200}
								className="h-6 lg:h-10 w-6 lg:w-10 mx-auto"
							/>
							WATCH <span className="font-normal ml-2">SERIES 11</span>
						</div>
					}
					subtitle={
						<>
							<div className="text-xl hidden md:block">
								The ultimate way to watch your health.
							</div>
							<div className="text-xl  md:hidden leading-6">
								The ultimate way <br /> to watch your health.
							</div>
						</>
					}
					imageDesktop="/watch-series11.png"
					imageMobile="/watch-series11.png"
					imageClassNameDesktop="md:w-120 lg:w-200 md:scale-110 lg:scale-150 translate-y-10 "
					imageClassNameMobile="w-140 translate-y-16 scale-110"
					buttonLeftText="Learn more"
					buttonRightText="Buy"
					backgroundColor="bg-gray-100"
					sectionHeight="h-125 md:h-115 lg:h-140"
				/>

				{/* Wwatch Black Unity Band Section */}
				<ImageSection
					title={
						<div className="flex items-center gap-1 text-2xl md:text-3xl lg:text-4xl font-bold">
							<Image
								src="/apple-logo.png"
								alt="Apple Watch Series 11 Ultra"
								width={200}
								height={200}
								className="h-6 lg:h-10 w-6 lg:w-10 mx-auto filter invert"
							/>
							WATCH
						</div>
					}
					subtitle={
						<div className="text-xl leading-6  ">
							The new Black Unity band. <br /> Inspired by the power of
							connection.
						</div>
					}
					imageDesktop="/black-band.png"
					imageMobile="/black-band.png"
					imageClassNameDesktop="md:w-120 lg:w-200 rotate-310 translate-y-5"
					imageClassNameMobile="w-140 translate-y-15 scale-120 rotate-310"
					buttonLeftText="Shop"
					buttonRightText=""
					backgroundColor="bg-black"
					sectionHeight="h-125 md:h-115 lg:h-140"
					dark={true}
				/>
			</div>

			<div className="md:flex gap-3 w-full ">
				{/* Ipad Pro */}
				<ImageSection
					title={
						<div className="flex items-center gap-1 text-4xl ">iPad Pro</div>
					}
					subtitle={
						<div className="text-xl leading-6 px-10 ">
							Advanced AI performance <br /> and game-changing capabilities.
						</div>
					}
					imageDesktop="/ipad-pro.png"
					imageMobile="/ipad-pro.png"
					imageClassNameDesktop="md:w-45 lg:w-90 "
					imageClassNameMobile="w-55 translate-y-0 "
					buttonLeftText="Learn more"
					buttonRightText="Buy"
					backgroundColor="bg-black"
					sectionHeight=" h-125 md:h-115 lg:h-140"
					dark={true}
				/>

				{/* AirPods Pro3 Section  */}
				<ImageSection
					title={
						<div className="flex items-center gap-1 text-4xl ">
							AirPods Pro 3
						</div>
					}
					subtitle={
						<div className="text-xl leading-6  ">
							The world&apos;s best in-ear <br /> Active Noise Cancellation.
						</div>
					}
					imageDesktop="/air-pads-pro3.png"
					imageMobile="/air-pads-pro3.png"
					imageClassNameDesktop="md:w-80 lg:w-110 "
					imageClassNameMobile="w-80 translate-y-5 h-50"
					buttonLeftText="Learn more"
					buttonRightText="Buy"
					backgroundColor="bg-gray-100"
					sectionHeight=" h-125 md:h-115 lg:h-140"
				/>
			</div>

			<div className="md:flex gap-3 w-full ">
				{/* Trade In Section  */}
				<ImageSection
					title={
						<div className="flex items-center gap-1 text-4xl ">
							<Image
								src="/apple-logo.png"
								alt="Apple Watch Series 11 Ultra"
								width={200}
								height={200}
								className="h-6 lg:h-8 w-6 lg:w-8 mx-auto "
							/>
							Trade In
						</div>
					}
					subtitle={
						<div className="text-xl leading-6  px-10">
							Get up to $180-$650 <br /> in credit when you trade in <br />
							iPhone 13 or higher.
						</div>
					}
					imageDesktop="/trade-in.png"
					imageMobile="/trade-in.png"
					imageClassNameDesktop=" md:-translate-y-8   lg:-translate-y-22 md:h-60 lg:h-110"
					imageClassNameMobile="w-full -translate-y-5 h-65"
					buttonLeftText="Get your estimate"
					buttonRightText=""
					backgroundColor="bg-gray-100"
					sectionHeight="  h-125 md:h-115 lg:h-140"
				/>
				{/* Card Section  */}
				<ImageSection
					title={
						<div className="flex items-center gap-1 text-4xl ">
							<Image
								src="/apple-logo.png"
								alt="Apple Watch Series 11 Ultra"
								width={200}
								height={200}
								className="h-6 lg:h-8 w-6 lg:w-8 mx-auto "
							/>
							Card
						</div>
					}
					subtitle={
						<div className="text-xl leading-6  px-10">
							Get up to 3% Daily Cash back <br /> with every purchase.
						</div>
					}
					imageDesktop="/card.png"
					imageMobile="/card.png"
					imageClassNameDesktop="md:w-80 lg:w-110 "
					imageClassNameMobile="w-80 translate-y-5 h-50"
					buttonLeftText="Learn more"
					buttonRightText="Apply now"
					backgroundColor="bg-gray-100"
					sectionHeight="  h-125 md:h-115 lg:h-140"
				/>
			</div>

			
		</main>
	);
}
