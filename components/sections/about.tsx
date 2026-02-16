import { Guitar, Trophy, Users } from "lucide-react";

const lineup = [
  { name: "Domen Kolenc", role: "vokal" },
  { name: "Robert Likar", role: "kitara, vokal" },
  { name: "Primož Trebec", role: "klaviature, vokal" },
  { name: "Janez Želvak", role: "bobni" },
  { name: "Kristian Buovski", role: "bas" },
];

export function About() {
  return (
    <section
      id="o-nas"
      className="scroll-mt-20 border-t-2 border-amber-900/40 bg-[#0c0a09] py-24 md:py-32 grain-overlay"
    >
      <div className="container px-4 md:px-6">
        <h2
          className="mb-12 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          O NAS
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-base leading-relaxed text-amber-100/80 sm:mb-6 sm:text-lg">
            The Drinkers smo slovenska booze rock skupina, ustanovljena julija
            1993 v Litiji. Pet prijateljev, vsi nekdanji glasbeniki različnih
            zasedb, smo se zbrali z idejo nastopiti na lokalnem rock festivalu
            Rusty Trumpets.
          </p>
          <p className="mb-10 text-center text-base leading-relaxed text-amber-100/80 sm:mb-12 sm:text-lg">
            Presenetljivo smo zmagali. In tako se je začela zgodba – rock z
            humorjem, energijo in kultno slovesnostjo slovenske pub scene.
          </p>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="hover-drunk flex flex-col items-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 p-5 text-center transition-all hover:border-amber-500/70 hover:bg-amber-950/30 sm:p-6">
              <Users className="h-10 w-10 text-amber-500" />
              <h3 className="font-bold text-amber-200">5 prijateljev</h3>
              <p className="text-sm text-amber-300/60">Od Litije do odra</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 p-6 text-center transition-all hover:border-amber-500/70 hover:bg-amber-950/30">
              <Trophy className="h-10 w-10 text-amber-500" />
              <h3 className="font-bold text-amber-200">Rusty Trumpets</h3>
              <p className="text-sm text-amber-300/60">Zmagovalci festivala</p>
            </div>
            <div className="hover-drunk flex flex-col items-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 p-5 text-center transition-all hover:border-amber-500/70 hover:bg-amber-950/30 sm:p-6">
              <Guitar className="h-10 w-10 text-amber-500" />
              <h3 className="font-bold text-amber-200">Booze rock</h3>
              <p className="text-sm text-amber-300/60">Od 1993</p>
            </div>
          </div>

          <div className="mt-16 border-t-2 border-amber-800/40 pt-16">
            <h3
              className="mb-8 text-center font-rye text-2xl tracking-widest text-amber-500 md:text-3xl"
              style={{ textShadow: "1px 1px 0 #991b1b" }}
            >
              TRENUTNA ZASEDBA
            </h3>
            <div className="space-y-3">
              {lineup.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col gap-1 rounded-sm border-2 border-amber-800/40 bg-black/50 px-4 py-3 transition-colors hover:border-amber-600/60 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4"
                >
                  <span className="font-bold text-amber-200">{member.name}</span>
                  <span className="text-sm text-amber-400/70">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
