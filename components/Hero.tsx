"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
export default function Hero() {
	return (
		<main>
      {/* iPhone Section */}
			<section className="relative flex h-[500px]  md:h-[620px] flex-col items-center  text-white ">
				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-4xl md:text-5xl font-semibold   text-gray-900"
				>
					iPhone
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.15 }}
					className="mt-1 text-center  max-w-[12rem] md:max-w-xl  text-lg md:text-2xl  text-gray-900 leading-tight"
				>
					Say hello to the latest generation of iPhone.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="mt-4 flex gap-4"
				>
					<a
						href="#"
						className="rounded-full bg-blue-600 px-3 md:px-6 py-1 md:py-2 text-md md:text-lg  hover:bg-blue-500 transition"
					>
						Learn more
					</a>
					<a
						href="#"
						className="rounded-full border   text-blue-500 hover:bg-blue-600 hover:text-white transition px-3 md:px-6 py-1 md:py-2 text-md md:text-lg"
					>
						Shop iPhone
					</a>
				</motion.div>

				{/* Product Image */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="mt-3 w-full max-w-4xl h-[450px]  mx-auto relative overflow-hidden"
				>
					<Image
						src="/iphone1.png"
						alt="iPhone"
						width={650}
						height={600}
						priority
						className="h-[270px] md:h-[600px] w-[220px] md:w-[650px]  mx-auto"
					/>
				</motion.div>
			</section>

      {/* iPad air Section */}
      <section className="relative flex h-[500px]  md:h-[620px] flex-col items-center  text-white bg-gradient-to-b from-blue-300/80 via-blue-400/30 to-white pt-7 md:pt-13">
				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-4xl md:text-5xl font-semibold   text-gray-900"
				>
					iPad  <span className="italic text-blue-600">air</span>
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.15 }}
					className="mt-1 text-center  max-w-[12rem] md:max-w-xl  text-lg md:text-2xl  text-gray-900 leading-tight"
				>
					Now supercharged by the M3 chip.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="mt-4 flex gap-4"
				>
					<a
						href="#"
						className="rounded-full bg-blue-600 px-3 md:px-6 py-1 md:py-2 text-md md:text-lg  hover:bg-blue-500 transition"
					>
						Learn more
					</a>
					<a
						href="#"
						className="rounded-full border   text-blue-500 hover:bg-blue-600 hover:text-white transition px-3 md:px-6 py-1 md:py-2 text-md md:text-lg"
					>
						Buy
					</a>
				</motion.div>

				{/* Product Image */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="mt-3 w-full max-w-4xl h-[450px]  mx-auto relative overflow-hidden"
				>
					<Image
						src="/ipadAir2.png"
						alt="iPad Air 2"
						width={550}
						height={350}
						priority
						className="h-[240px] md:h-[350px] w-[220px] md:w-[550px]  mx-auto md:hidden "
					/>
          <Image
						src="/ipadAir.png"
						alt="iPad Air"
						width={550}
						height={350}
						priority
						className="h-[270px] md:h-[350px] w-[220px] md:w-[550px] hidden md:block  mx-auto"
					/>
				</motion.div>
			</section>

      
		</main>
	);
}
