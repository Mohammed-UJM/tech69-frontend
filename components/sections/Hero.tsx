import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Bande d’images */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/banner.jpg"
          alt="Appareils"
          width={1200}
          height={600}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25"></div>{" "}
        {/* Overlay pour lisibilité */}
      </div>

      {/* Texte Hero */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Réparation rapide de vos appareils
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          Smartphones, tablettes et ordinateurs réparés par des experts
          certifiés
        </p>
      </div>
    </section>
  );
}
