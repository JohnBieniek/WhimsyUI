import { Collage } from "../site-chrome";
import WorkGallery from "./work-gallery";
export default function WorkPage(){return <main className="inner-page shell"><section className="page-hero compact"><div><p className="kicker">Work</p><h1>Campaigns built<br/>for real communities.</h1><p className="intro">Strategic creative, media, and marketing that help local organizations show up, connect, and grow.</p></div><Collage images={["/work/1478820320938914.jpg","/work/797501532404133.jpg","/work/1233972312090384.jpg","/work/1275042854649996.jpg"]}/></section><WorkGallery/></main>}
