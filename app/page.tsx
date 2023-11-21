import Hero from "./components/Hero";
import Date from "./components/Date";
import Bride from "./components/Bride";
import DetailDate from "./components/DetailDate";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Wish from "./components/Wish";
import Footer from "./components/Footer";
import Opening from "./components/Opening";

async function getData() {
  const res = await fetch(
    "https://panel.virtuwed.id/api/wedding?wedding_slug=fajar-tiara&guest_slug=muhammad-agy-nurwicaksono-LwzfkA"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Opening
        weddingName={data.data.wedding.wedding_name}
        img={data.data.wedding.undangan_digital.cover_undangan_digital}
      />
      <Hero
        weddingName={data.data.wedding.wedding_name}
        img={data.data.wedding.undangan_digital.cover_undangan_digital}
      />
      <Date date={data.data.wedding.reception_begin_at.date} />
      <Bride
        groomImg={data.data.wedding.undangan_digital.pengantin_pria.foto}
        groomName={
          data.data.wedding.undangan_digital.pengantin_pria.nama_lengkap
        }
        groomIg={data.data.wedding.undangan_digital.pengantin_pria.instagram}
        groomDad={
          data.data.wedding.undangan_digital.pengantin_pria.nama_ortu_bapak
        }
        groomMom={
          data.data.wedding.undangan_digital.pengantin_pria.nama_ortu_ibu
        }
        brideImg={data.data.wedding.undangan_digital.pengantin_wanita.foto}
        brideName={
          data.data.wedding.undangan_digital.pengantin_wanita.nama_lengkap
        }
        brideIg={data.data.wedding.undangan_digital.pengantin_wanita.instagram}
        brideDad={
          data.data.wedding.undangan_digital.pengantin_wanita.nama_ortu_bapak
        }
        brideMom={
          data.data.wedding.undangan_digital.pengantin_wanita.nama_ortu_ibu
        }
      />
      <DetailDate
        date={data.data.wedding.reception_begin_at.date}
        receptionDate={data.data.wedding.reception_begin_at.date}
        receptionDay={data.data.wedding.reception_begin_at.day}
        receptionMonth={data.data.wedding.reception_begin_at.month}
        receptionTimeBegin={data.data.wedding.reception_begin_at.time}
        receptionTimeEnd={data.data.wedding.reception_end_at.time}
        akadDate={data.data.wedding.undangan_digital.daftar_acara[0].event_date}
        akadTime={data.data.wedding.undangan_digital.daftar_acara[0].event_time}
        receptionLink={
          data.data.wedding.resepsi_virtual.wedding_live_streaming_link.full_url
        }
        akadLink={
          data.data.wedding.undangan_digital.reception_location_maps_url
        }
      />
      <Story />
      <Gallery />
      <Wish
        hadir={data.data.wedding.undangan_digital.ucapan_undangan_digital.hadir}
        ragu={data.data.wedding.undangan_digital.ucapan_undangan_digital.ragu}
        tidakHadir={
          data.data.wedding.undangan_digital.ucapan_undangan_digital.tidak_hadir
        }
        wishes={data.data.wedding.undangan_digital.ucapan_undangan_digital.data}
      />
      <Footer />
    </>
  );
}
