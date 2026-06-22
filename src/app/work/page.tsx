import CardProject from "../_components/CardProject";

export default function WorkPage() {
  return (
    <main>
      <div className="w-full bg-[#161615] py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-[#F2B75F] font-semibold text-sm py-4">MY PORTFOLIO</h1>
          <h2 className="text-white text-5xl font-bold py-4">Selected Work</h2>
          <p className="text-[#A3A9B3] text-lg max-w-2xl mx-auto py-4">
            A collection of projects I've worked on — from web apps to mobile interfaces.
          </p>
        </div>
      </div>
      <CardProject />
    </main>
  );
}
