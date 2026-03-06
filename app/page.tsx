"use client";
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/layout/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/layout/Navbar";
import { useState } from "react"; 

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="mt-10">
			<Navbar open={menuOpen} setOpen={setMenuOpen} />
			{!menuOpen && <Hero />}
			{!menuOpen && <FeatureGrid />}
			{!menuOpen && <Footer />}
		</div>
	);
}
