import Image from "next/image";

export function CreatorCredit() {
  return <div className="creator-credit">
    <p>Created by</p>
    <Image src="/logo%20tight.png" alt="Whimsy — Consulting, Media, Marketing" width={4744} height={2198} sizes="220px" />
    <a href="https://facebook.com/Experiencewhimsy" target="_blank" rel="noopener noreferrer">facebook.com/Experiencewhimsy</a>
  </div>;
}
