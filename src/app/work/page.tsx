import { Collage } from "../site-chrome";
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
        <Collage
          className="work-page-collage"
          images={["/work/906381761516109.jpg", "/work/837501851737434.jpg", "/work/985893490231602.jpg", "/work/1426596552827958.jpg"]}
        />
      </section>
      <WorkGallery />
    </main>
  );
}
