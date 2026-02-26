import { motion } from "framer-motion";
import Image from "next/image";

type ProductHeroProps = {
	title: React.ReactNode;
	subtitle: React.ReactNode;
	imageDesktop: string;
	imageMobile: string;
	imageClassNameDesktop: string;
	imageClassNameMobile: string;
  buttonLeftText: string;
  buttonRightText: string;
	backgroundColor: string;
	sectionHeight: string;
	dark?: boolean;
};

export default function ProductHero({
	title,
	subtitle,
	imageDesktop,
	imageMobile,
	imageClassNameDesktop,
  imageClassNameMobile,
  buttonLeftText,
  buttonRightText,
	backgroundColor,
	sectionHeight,
	dark = false,
}: ProductHeroProps) {
	return (
		<section
			className={`relative flex flex-col items-center  w-full  h-125 md:${sectionHeight} pt-7 md:pt-13 mb-3
        ${backgroundColor}
        ${dark ? " text-white" : "text-gray-900"}
        `}
		>
			{/* Headline */}
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl md:text-5xl font-semibold"
			>
				{title}
			</motion.h1>

			{/* Subheadline */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.15 }}
				className="mt-1 text-center   md:max-w-xl lg:max-w-2xl text-lg md:text-2xl   leading-tight"
			>
				{subtitle}
			</motion.div>

			{/* CTA */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
				className="mt-4 flex gap-4"
			>
        
				<a className={`rounded-full bg-blue-600 px-3 md:px-6 py-1 md:py-2 text-md md:text-lg  hover:bg-blue-500 transition text-white `}>
					{buttonLeftText}
				</a>
				<a className={`rounded-full border   text-blue-500 hover:bg-blue-600 hover:text-white transition px-3 md:px-6 py-1 md:py-2 text-md md:text-lg ${buttonRightText == "" ? "hidden" : "" }`}>
					{buttonRightText}
				</a>
			</motion.div>

			{/* Image */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.4 }}
				className=" mt-10 md:mt-8 w-full  h-82 md:h-150   mx-auto relative overflow-hidden"
			>
				<Image
					src={imageDesktop}
					alt="iPhone"
					width={1200}
					height={900}
					priority
					className={`${imageClassNameDesktop}  hidden md:block mx-auto`}
				/>
				<Image
					src={imageMobile}
					alt="iPhone"
					width={450}
					height={300}
					priority
					className={`${imageClassNameMobile}   md:hidden mx-auto`}
				/>
			</motion.div>
		</section>
	);
}
