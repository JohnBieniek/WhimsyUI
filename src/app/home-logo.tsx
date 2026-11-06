"use client";

import Image from "next/image";
import { useState } from "react";

export function HomeLogo({ className = "home-logo", alt = "Whimsy Consulting, Media, Marketing" }: { className?: string; alt?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      className={className}
      src={failed ? "/logo%20tight.png" : "/whimsy%2010.svg"}
      alt={alt}
      width={4744}
      height={2198}
      loading="eager"
      unoptimized
      onError={failed ? undefined : () => setFailed(true)}
    />
  );
}
