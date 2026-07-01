export default function FeatureSection() {
  return (
    <>
      <div className="w-full bg-[#1E1D1A] px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-3xl flex-col justify-center gap-2 text-center sm:gap-4">
            <h1 className="text-sm font-semibold uppercase text-[#F2B75F]">
              featured projects
            </h1>

            <h2 className="text-2xl font-bold leading-tight text-[#E9E7DC] sm:text-4xl">
              Selected work by Abhishek mandal
            </h2>

            <p className="text-base leading-7 text-[#A3A9B3] transition-all sm:text-lg sm:leading-8">
              A curated selection of web and mobile projects combining UI/UX
              design, React development, smooth interactions, and modern,
              responsive performance-focused interfaces.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
