"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
	{
		id: 1,
		image: "/image1.png",
		mobileImage: "/mobileImage1.png",
		genres: "Mystery",
		description: "New season.",
		alt: "The Last Thing He Told Me Series",
		buttonText: "Stream now",
	},
	{
		id: 2,
		image: "/image2.png",
		genres: "Comedy",
		mobileImage: "/mobileImage2.png",
		description: "Getting it together. Together.",
		alt: "Shrinking Series",
		buttonText: "Stream now",
	},
	{
		id: 3,
		image: "/image3.png",
		genres: "Romance",
		mobileImage: "/mobileImage3.png",
		description: "Do you believe in love after life?",
		alt: "Eternity Movie",
		buttonText: "Stream now",
	},
	{
		id: 4,
		image: "/image4.png",
		genres: "",
		description: "Watch every club, every match, live all season long.",
		alt: "Major League Soccer",
		mobileImage: "/mobileImage4.png",
		buttonText: "MLS on Apple TV",
	},
	{
		id: 5,
		image: "/image5.png",
		genres: "Thriller",
		mobileImage: "/mobileImage5.png",
		description: "Who can you trust when it's a;; on the line?",
		alt: "HiJack Movie",
		buttonText: "Stream now",
	},
	{
		id: 6,
		image: "/image6.png",
		mobileImage: "/mobileImage6.png",
		genres: "Thriller",
		description: "A secret agent embarks on her most dangerous mission yet.",
		alt: "Tehran Movie",
		buttonText: "Stream now",
	},
	{
		id: 7,
		image: "/image7.png",
		mobileImage: "/mobileImage7.png",
		genres: "Drama",
		description: "Happiness is a state of mind.",
		alt: "Pluribus Movie",
		buttonText: "Stream now",
	},
	{
		id: 8,
		image: "/image8.png",
		mobileImage: "/mobileImage8.png",
		genres: "Action",
		description: "4 Oscar Nominations Including Best Picture",
		alt: "F1 the Movie",
		buttonText: "Stream now",
	},
];

const miniItems = [
	{
		id: 1,
		image: "/image1.png",
		genres: "Arcade",
		description: "Hello Kitty Island Adventure",
		alt: "Hello Kitty Island Adventure",
		buttonText: "Play now",
	},
	{
		id: 2,
		image: "/image2.png",
		title: "Music",
		description: "Sabrina Carpenter: The Zane Lowe...",
		alt: "Sabrina Carpenter: The Zane Lowe...",
		buttonText: "Listen now",
	},
	{
		id: 3,
		image: "/image3.png",
		title: "Fitness+",
		description: "Bad Bunny",
		alt: "Bad Bunny",
		buttonText: "Watch now",
	},
	{
		id: 4,
		image: "/image4.png",
		title: "Arcade",
		description: "PowerWash Simulator",
		alt: "PowerWash Simulator",
		buttonText: "Play now",
	},
	{
		id: 5,
		image: "/image5.png",
		title: "Music",
		description: "A-List Pop",
		alt: "A-List Pop",
		buttonText: "Listen now",
	},
	{
		id: 6,
		image: "/image6.png",
		title: "Fitness+",
		description: "Core with Gregg",
		alt: "Core with Gregg",
		buttonText: "Watch now",
	},
	{
		id: 7,
		image: "/image7.png",
		title: "Arcade",
		description: "SpongeBob: Party Pursuit 2",
		alt: "SpongeBob: Party Pursuit 2",
		buttonText: "Play now",
	},
	{
		id: 8,
		image: "/image8.png",
		title: "Music",
		description: "New Music Daily",
		alt: "New Music Daily",
		buttonText: "Listen now",
	},
];

type ScrollBehavior = "auto" | "smooth";

export default function FeatureGrid() {
	const scrollRefMain = useRef<HTMLDivElement | null>(null);
	const scrollRefMini = useRef<HTMLDivElement | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([]);
	const [miniDuplicatedItems, setMiniDuplicatedItems] = useState<
		typeof miniItems
	>([]);
	const [progress, setProgress] = useState(0); // 0 to 100
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

	// Prepare duplicated lists on mount
	useEffect(() => {
		if (items.length > 0) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setDuplicatedItems([items[items.length - 1], ...items, items[0]]);
			setMiniDuplicatedItems([
				miniItems[miniItems.length - 1],
				...miniItems,
				miniItems[0],
			]);
		}
	}, []);

	// Helper to scroll a given container to the target index (centered)
	const scrollToIndex = (
		containerRef: React.RefObject<HTMLDivElement | null>,
		targetIndex: number,
		behavior: ScrollBehavior = "smooth",
	) => {
		const container = containerRef.current;
		if (!container || container.children.length === 0) return;

		const targetElement = container.children[targetIndex] as HTMLElement;
		if (targetElement) {
			const containerWidth = container.offsetWidth;
			const elementWidth = targetElement.offsetWidth;
			const scrollLeft =
				targetElement.offsetLeft - containerWidth / 2 + elementWidth / 2;
			container.scrollTo({ left: scrollLeft, behavior });
		}
	};

	// Scroll both carousels to the active slide
	const scrollToActive = (behavior: ScrollBehavior = "smooth") => {
		if (duplicatedItems.length === 0) return;
		const targetIndex = activeIndex + 1; // because we prepended the last item
		scrollToIndex(scrollRefMain, targetIndex, behavior);
		scrollToIndex(scrollRefMini, targetIndex, behavior);
	};

	// Initial scroll to center the first original item (index 0)
	useEffect(() => {
		if (duplicatedItems.length > 0) {
			scrollToActive("auto");
		}
	}, [duplicatedItems]);

	// Cleanup intervals on unmount
	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
			if (progressIntervalRef.current)
				clearInterval(progressIntervalRef.current);
		};
	}, []);

	// Start progress bar and auto-advance timer
	const startAutoAdvance = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

		setProgress(0);

		const interval = setInterval(() => {
			setProgress((prev) => {
				const next = prev + 1; // 50ms * 100 = 5000ms
				if (next >= 100) {
					clearInterval(interval);
					return 100;
				}
				return next;
			});
		}, 50);
		progressIntervalRef.current = interval;

		const timeout = setTimeout(() => {
			setActiveIndex((prev) => (prev + 1) % items.length);
		}, 5000);
		timerRef.current = timeout;
	};

	// When activeIndex changes, scroll both carousels and reset auto-advance
	useEffect(() => {
		if (duplicatedItems.length > 0) {
			scrollToActive("smooth");
			// eslint-disable-next-line react-hooks/set-state-in-effect
			startAutoAdvance();
		}
	}, [activeIndex]);

	// Handle dot click
	const goToSlide = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className="relative w-full mb-100 mt-20 ">
			<h1 className="py-5 lg:py-10 text-4xl md:text-4xl lg:text-6xl font-semibold text-center">
				Endless entertainment.
			</h1>
			{/* Main carousel (large images) */}
			<div
				ref={scrollRefMain}
				className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{duplicatedItems.map((item, idx) => (
					<div
						key={`${item.id}-${idx}`}
						className="relative shrink-0 snap-center w-69 md:w-172 lg:w-260 xl:w-350 text-lg lg:text-2xl"
					>
						<Image
							src={item.image}
							alt={item.alt}
							width={688}
							height={368}
							className=" md:h-92 lg:h-145 xl:h-185 w-full object-cover hidden md:block  "
						/>
						<Image
							src={item.mobileImage}
							alt={item.alt}
							width={274}
							height={496}
							className="h-124 md:h-92 lg:h-145 xl:h-185 w-full object-cover block md:hidden  "
						/>
						<div className="absolute md:top-75 lg:top-121 xl:top-155 left-10 lg:left-15 xl:left-20 hidden md:block">
							<div className="flex gap-2 items-center">
								<button className="text-gray-900 bg-white px-4 lg:px-6  py-1 md:py-2 rounded-full mt-2 md:text-sm lg:text-lg xl:text-xl lg:font-semibold mr-2">
									{item.buttonText}
								</button>
								<h2 className=" font-semibold text-white mt-2">
									{item.genres} &#8226;
								</h2>
								<p className=" text-white mt-2">{item.description}</p>
							</div>
						</div>

						<div className="absolute top-8 left-1/2 transform -translate-x-1/2  block md:hidden">
							<div className="flex text-white text-3xl font-semibold items-center justify-center">
								<Image
									src="/apple-logo.png"
									alt="Apple Logo"
									width={274}
									height={496}
									className="w-auto h-6 object-contain filter invert"
								/>
								<h2>tv</h2>
							</div>
              <h1 className="text-white leading-6 text-center text-2xl w-53 font-semibold">THE LAST THING HE TOLD ME</h1>
							
						</div>
            
					</div>
				))}
			</div>

			{/* Mini carousel (small images) */}
			<div
				ref={scrollRefMini}
				className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory mt-4"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{miniDuplicatedItems.map((item, idx) => (
					<div
						key={`${item.id}-${idx}`}
						className="relative shrink-0 snap-center"
						style={{ width: "190px" }}
					>
						<Image
							src={item.image}
							alt={item.alt}
							width={688}
							height={368}
							className="h-63 w-full object-cover mt-5"
						/>
						<div className="absolute top-40 left-10">
							<div className="flex gap-2 items-center">
								<button className="text-gray-900 bg-white px-4 py-1 rounded-full mt-2">
									{item.buttonText}
								</button>
								<h2 className="text-lg font-semibold text-white mt-2">
									{item.genres} &#8226;
								</h2>
								<p className="text-lg text-white mt-2">{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Dot indicators with integrated progress bar */}
			<div className="flex justify-center gap-2 mt-8">
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className="relative w-12 h-1.5 bg-gray-500 rounded-full overflow-hidden focus:outline-none"
						aria-label={`Go to slide ${index + 1}`}
					>
						{/* White progress fill – only shown for the active dot */}
						<div
							className={`absolute inset-0 bg-white rounded-full transition-all duration-100 ease-linear ${
								index === activeIndex ? "opacity-100" : "opacity-0"
							}`}
							style={{ width: `${index === activeIndex ? progress : 0}%` }}
						/>
					</button>
				))}
			</div>

			{/* Hide scrollbar styles */}
			<style jsx>{`
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</div>
	);
}
