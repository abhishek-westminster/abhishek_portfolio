export default function About() {
  const yearexpriences = [
    { value: "2", line1: "Years", line2: "Experience" },
    { value: "15+", line1: "Projects", line2: "Delivered" },
    { value: "100", line1: "Success", line2: "Rate" },
  ];

  return (
    <>
      <div className="w-full bg-background py-10 sm:py-12 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-6 text-center sm:px-6 md:px-8 md:py-16">
          <div className="flex w-full max-w-5xl flex-col items-center">
            <h1 className="py-3 text-sm font-semibold text-[#F2B75F] sm:py-4">
              ABOUT ABHISHEK MANDAL
            </h1>
            <h2 className="py-3 text-2xl font-semibold leading-tight text-foreground sm:py-4 md:text-4xl">
              Frontend & Mobile Developer in Kathmandu building modern UI
            </h2>

            <p className="w-full max-w-5xl py-3 text-base leading-7 text-muted-foreground sm:py-4 md:text-lg md:leading-relaxed">
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

            <div className="grid w-full max-w-3xl grid-cols-1 gap-3 py-5 min-[360px]:grid-cols-2 md:grid-cols-3 md:gap-4">
              {yearexpriences.map((yearexprience, index) => (
                <div
                  className={`flex min-h-24 w-full flex-col items-center justify-center rounded-3xl border border-border bg-card px-3 py-4 md:min-h-28 ${
                    index === yearexpriences.length - 1
                      ? "min-[360px]:col-span-2 min-[360px]:mx-auto min-[360px]:max-w-52 md:col-span-1 md:max-w-none"
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
