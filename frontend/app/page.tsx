"use client";
import Image from "next/image";
export default function Home() {
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans">
      <div className="grid grid-rows-1 grid-cols-[3fr_7fr_3fr]">
        <div className="pr-6 border-r  border-zinc-200 text-black">
          <div
            className="w-full h-full bg-transparent flex-column items-center p-10
          space-y-6"
          >
            <h1 className="font-bold text-2xl"> Contactinformatie</h1>
            <div className="whitespace-pre-line space-y-1">
              <div>
                <span className="font-medium">Address: </span>
                <span
                  onClick={() =>
                    copy("GO! Campus Kompas Noordlaan 10 9230 Wetteren")
                  }
                  className="cursor-pointer hover:underline"
                >
                  GO! Campus Kompas Noordlaan 10 9230 Wetteren
                </span>
              </div>

              <div>
                <span className="font-medium">Tel.: </span>
                <span
                  onClick={() => copy("09 365 60 25")}
                  className="cursor-pointer hover:underline"
                >
                  09 365 60 25
                </span>
              </div>

              <div>
                <span className="font-medium">E-mail: </span>
                <span
                  onClick={() => copy("middenschool@campuskompas.be")}
                  className="cursor-pointer hover:underline"
                >
                  middenschool@campuskompas.be
                </span>
              </div>

              <div>
                <span className="font-medium">Web: </span>
                <span
                  onClick={() => copy("www.campuskompas.be")}
                  className="cursor-pointer hover:underline"
                >
                  www.campuskompas.be
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 border-r border-zinc-200 text-black">
          <div
            className="w-full h-full bg-transparent flex-column items-center p-10
          space-y-6"
          >
            <h1 className="font-bold text-2xl"> Info leerling </h1>
            <div className="whitespace-pre-line ">
              <h2 className={"font-bold text-amber-500"}> Nieuws </h2>
              Pull News from backend and display here
            </div>
            <div>
              <h2 className="font-bold text-amber-500"> Afspraak Maken</h2>
              <div className={"w-full h-16 flex-col items-center"}>
                <h2 className="font-bold">Personeel</h2>
                <Image
                  src={"/download (13).jpeg"}
                  alt={"afspraak maken"}
                  width={300}
                  height={300}
                />
              </div>
              <div> Broodje </div>
              <div> Studio Kompas </div>
            </div>
            <div>
              <h2 className="font-bold text-amber-500">
                Diensten voor jongeren
              </h2>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  {
                    name: "1712",
                    description:
                      "Hulplijn voor vragen over geweld, misbruik en kindermishandeling. Gratis en anoniem.",
                    link: "https://1712.be",
                  },
                  {
                    name: "Awel",
                    description:
                      "Awel luistert naar kinderen en jongeren. Gratis en anoniem.",
                    link: "https://awel.be",
                  },
                  {
                    name: "Brussel-J",
                    description:
                      "Online informatieplatform voor jongeren vanaf 6 jaar.",
                    link: "https://www.brussel-j.be",
                  },
                  {
                    name: "De Druglijn",
                    description:
                      "Vragen over drank, drugs, pillen of gamen? Chat of bel anoniem.",
                    link: "https://www.druglijn.be",
                  },
                  {
                    name: "JAC",
                    description:
                      "Problemen thuis, op school of met jezelf? Jongeren Advies Centrum.",
                    link: "https://www.caw.be/jac",
                  },
                  {
                    name: "OnderwijsKiezer",
                    description:
                      "Objectieve info over studiekeuze en onderwijssystemen.",
                    link: "https://www.onderwijskiezer.be",
                  },
                  {
                    name: "TEJO",
                    description:
                      "Gratis therapeutische ondersteuning voor jongeren.",
                    link: "https://www.tejo.be",
                  },
                  {
                    name: "Zelfmoordlijn 1813",
                    description:
                      "Elke dag bereikbaar voor hulp via telefoon of chat.",
                    link: "https://www.zelfmoord1813.be",
                  },
                ].map((service) => (
                  <a
                    key={service.name}
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-zinc-200 p-3 hover:bg-zinc-100 transition"
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-zinc-600">{service.description}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pl-6 text-black">
          <div
            className="w-full h-full bg-transparent flex-column items-center p-10
          space-y-6"
          >
            <h1 className="font-bold text-2xl"> Calender </h1>
            <div className="whitespace-pre-line ">
              Pull from backend and render
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
