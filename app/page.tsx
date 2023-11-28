import Hero from "./components/Hero";
import Date from "./components/Date";
import Bride from "./components/Bride";
import DetailDate from "./components/DetailDate";
import Moment from "./components/Moment";
import Gallery from "./components/Gallery";
import Wish from "./components/Wish";
import Footer from "./components/Footer";
import Opening from "./components/Opening";

export default function Home() {
  return (
    <>
      <Opening />
      <Hero />
      <Date />
      <Bride />
      <DetailDate />
      <Moment />
      <Gallery />
      <Wish />
      <Footer />
    </>
  );
}
