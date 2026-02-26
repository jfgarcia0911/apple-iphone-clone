import React from 'react'
import Image from "next/image";

type NavbarIconProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function NavbarIcon({src, alt, className}: NavbarIconProps) {
  return (
    <div>
      <Image src={src} alt={alt} width={20} height={20} className={` ${className? className : "h-5 lg:h-4 w-5 lg:w-4 cursor-pointer"}`} />
    </div>
  )
}
