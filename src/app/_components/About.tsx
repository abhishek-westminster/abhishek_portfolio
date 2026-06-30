import Image from "next/image";

export default function About() {
  const yearexpriences = [
    { value: "2", line1: "Years", line2: "Experience" },
    { value: "15+", line1: "Projects", line2: "Delivered" },
    { value: "100", line1: "Success", line2: "Rate" },
  ];

  return (
    <>
      <div className="w-full bg-background py-10 sm:py-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-6 sm:px-6 md:gap-10 md:px-8 md:py-16 lg:flex-row">
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
            <div className="aspect-square w-full max-w-[240px] overflow-hidden rounded-3xl sm:max-w-[320px] lg:max-w-[400px]">
              <Image
                width={1024}
                height={1536}
                className="h-full w-full object-cover object-[50%_35%]"
                src="/abhishek.png"
                alt="Abhishek"
                loading="eager"
              />
            </div>
          </div>

          <div className="flex w-full flex-col lg:w-1/2">
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

            <div className="grid grid-cols-1 gap-3 py-5 min-[360px]:grid-cols-2 md:grid-cols-3 md:gap-4">
              {yearexpriences.map((yearexprience, index) => (
                <div
                  className={`flex min-h-28 w-full flex-col items-center justify-center rounded-3xl border border-border bg-card px-4 py-5 md:min-h-32 ${
                    index === yearexpriences.length - 1
                      ? "min-[360px]:col-span-2 min-[360px]:mx-auto min-[360px]:max-w-[220px] md:col-span-1 md:max-w-none"
                      : ""
                  }`}
                  key={yearexprience.value}
                >
                  <p className="text-center text-3xl font-semibold text-[#F2B75F] md:text-4xl">
                    {yearexprience.value}
                  </p>
                  <h1 className="text-muted-foreground mt-2 text-center text-xs leading-tight md:text-sm">
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
