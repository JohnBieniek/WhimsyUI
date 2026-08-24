import Image from "next/image";
import offsetSquareCollage from "../../../collage/offset square collage.png";
import WorkGallery from "./work-gallery";

export default function WorkPage() {
  return (
    <main className="inner-page work-page shell">
      <section className="page-hero compact">
        <div>
          <p className="kicker">Work</p>
          <h1>Campaigns built<br />for real communities.</h1>
          <p className="intro">
            Strategic creative, media, and marketing that help local
            organizations show up, connect, and grow.
          </p>
        </div>
        <Image
          className="offset-square-collage"
          src={offsetSquareCollage}
          alt="A collage of selected Whimsy campaign work"
          priority
          sizes="(max-width: 1050px) 100vw, 55vw"
        />
      </section>
      <WorkGallery />
    </main>
  );
}
