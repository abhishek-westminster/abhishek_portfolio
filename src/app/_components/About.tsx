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
      <div className="w-full bg-background py-10 sm:py-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-6 sm:px-6 md:gap-10 md:px-8 md:py-16 lg:flex-row">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              width={1024}
              height={1536}
              className="aspect-square w-full max-w-[220px] rounded-3xl object-cover sm:max-w-[300px] lg:max-w-[400px]"
              src="/abhishek.png"
              alt="Abhishek"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="py-3 text-sm font-semibold text-[#F2B75F] sm:py-4">
              ABOUT ABHISHEK MANDAL
            </h1>
            <h2 className="py-3 text-2xl font-semibold leading-tight text-foreground sm:py-4 md:text-4xl">
              Frontend & Mobile Developer in Kathmandu building modern UI
            </h2>

            <p className="py-3 text-base leading-7 text-muted-foreground sm:py-4 md:text-lg md:leading-relaxed">
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

            <div className="grid grid-cols-2 gap-3 py-5 min-[430px]:flex min-[430px]:flex-row min-[430px]:flex-wrap md:gap-4">
              {yearexpriences.map((yearexprience) => (
                <div
                  className="flex h-28 w-full flex-col items-center justify-center rounded-3xl border border-border bg-card min-[430px]:w-28 md:h-32 md:w-32"
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
