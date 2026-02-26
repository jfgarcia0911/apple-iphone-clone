import React from 'react'
import Image from "next/image";

type NavbarIconProps = {
  src: string;
  alt: string;
};

export default function NavbarIcon({src, alt}: NavbarIconProps) {
  return (
    <div>
      <Image src={src} alt={alt} width={20} height={20} className="h-5 lg:h-4 w-5 lg:w-4 cursor-pointer" />
    </div>
  )
}
