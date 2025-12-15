import Image from "next/image";

function MapSection() {
  return (
    <section className="bg-[#022D36] ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Empowering NRIs and OCIs to create enduring wealth with excellence.{" "}
      </h2>
      <div>
        <Image
          src="/images/Map.png"
          alt="map"
          width={1000}
          height={800}
          className="items-center mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default MapSection;

// USA, kenya, UAE, QAtar, oman,austraila, singapore, UK, canada,  