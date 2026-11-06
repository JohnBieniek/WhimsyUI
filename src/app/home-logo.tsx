"use client";

import Image from "next/image";
import { useState } from "react";

export function HomeLogo() {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      className="home-logo"
      src={failed ? "/logo%20tight.png" : "/whimsy%2010.svg"}
      alt="Whimsy Consulting, Media, Marketing"
      width={4744}
      height={2198}
      loading="eager"
      unoptimized
      onError={failed ? undefined : () => setFailed(true)}
    />
  );
}
