'use client';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
	return (
			<div className="mt-10">
        <Navbar open={menuOpen} setOpen={setMenuOpen} />
				
{!menuOpen && <Hero /> }
			</div>
	);
}
