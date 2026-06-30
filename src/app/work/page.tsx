import CardProject from "../_components/CardProject";

export default function WorkPage() {
  return (
    <main>
      <div className="w-full bg-[#161615] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="py-3 text-sm font-semibold text-[#F2B75F] sm:py-4">
            MY PORTFOLIO
          </h1>
          <h2 className="py-3 text-3xl font-bold leading-tight text-white sm:py-4 sm:text-5xl">
            Selected Work
          </h2>
          <p className="mx-auto max-w-2xl py-3 text-base leading-7 text-[#A3A9B3] sm:py-4 sm:text-lg sm:leading-8">
            A collection of projects I&apos;ve worked on — from web apps to mobile
            interfaces.
          </p>
        </div>
      </div>
      <CardProject />
    </main>
  );
}
