import Image from "next/image";

export default function About() {
  const yearexpriences = [
    { value: "7+", line1: "Years", line2: "Experience" },
    { value: "50+", line1: "Projects", line2: "Delivered" },
    { value: "30+", line1: "Happy", line2: "Clients" },
    { value: "100", line1: "Success", line2: "Rate" },
  ];

  return (
    <>
      <div className="bg-background w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-8 md:py-16 px-4 md:px-8">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              width={400}
              height={400}
              className="h-auto rounded-3xl object-cover w-full max-w-[400px] dark:invert"
              src="/window.svg"
              alt="Abhishek"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-[#F2B75F] font-semibold text-sm py-4">
              ABOUT ABHISHEK MANDAL
            </h1>
            <h2 className="text-foreground text-2xl md:text-4xl font-semibold py-4">
              Frontend & Mobile Developer in Kathmandu building modern UI
            </h2>

            <p className="text-muted-foreground py-4 leading-relaxed text-base md:text-lg">
              I&apos;m a frontend developer and UI/UX designer with a strong
              focus on building fast, clean, and modern digital experiences. I
              blend design thinking with hands-on development to turn ideas
              into polished products.
              <span className="block mt-4">
                I believe good design feels effortless. Whether I&apos;m crafting
                a responsive website or a mobile-first interface, I focus on
                clarity, usability, and performance—solving real problems with
                simple, scalable solutions.
              </span>
              <span className="block mt-4">
                Outside of designing and coding, I enjoy exploring new tools,
                refining workflows, and experimenting with visuals and motion.
                I&apos;m driven by curiosity and a constant desire to improve
                both products and myself.
              </span>
            </p>

            <div className="flex flex-row flex-wrap gap-3 md:gap-4 py-5">
              {yearexpriences.map((yearexprience) => (
                <div
                  className="h-28 w-28 md:h-32 md:w-32 bg-card flex flex-col items-center justify-center rounded-3xl border border-border"
                  key={yearexprience.value}
                >
                  <p className="text-center text-3xl md:text-4xl font-semibold text-[#F2B75F]">
                    {yearexprience.value}
                  </p>
                  <h1 className="text-muted-foreground text-xs md:text-sm text-center mt-2 leading-tight">
                    <span className="block">{yearexprience.line1}</span>
                    <span className="block">{yearexprience.line2}</span>
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
