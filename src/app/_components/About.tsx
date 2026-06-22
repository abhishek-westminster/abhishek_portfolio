import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {

    const yearexpriences =[
        { value: "7+", line1: "Years", line2: "Experience" },
        { value: "50+", line1: "Projects", line2: "Delivered" },
        { value: "30+", line1: "Happy", line2: "Clients" },
        { value: "100", line1: "Success", line2: "Rate" }
    ];
        
    
  return (
    <>
      <div className="bg-[#161615] w-full py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 py-16 ">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              width={400}
              height={400}
              className="h-auto rounded-3xl object-cover w-400px"
              src="/window.svg"
              alt="Abhishek"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[#F2B75F] flex text-center font-semibold text-sm py-4 ">
              ABOUT ABHISHEK MANDAL
            </h1>
            <h2 className="text-[white] flex text-4xl font-semibold py-4">
              Frontend & Mobile Developer in kathmandu building modern UI
            </h2>

            <p className="text-[#A3A9B3] py-4 leading-relaxed space-y-10 text-lg">
              I'm a frontend developer and UI/UX designer with a strong focus on
              building fast, clean, and modern digital experiences. I blend
              design thinking with hands-on development to turn ideas into
              polished products.
              
              
               I believe good design feels effortless. Whether
              I’m crafting a responsive website or a mobile-first interface, I
              focus on clarity, usability, and performance—solving real problems
              with simple, scalable solutions.
              
              <span className="block mt-4">
               Outside of designing and coding,
              I enjoy exploring new tools, refining workflows, and experimenting
              with visuals and motion. I’m driven by curiosity and a constant
              desire to improve both products and myself.
              </span>
            </p>

                 <div className="flex flex-wrap gap-6 py-5">
            {yearexpriences.map((yearexprience)=>(
                <Button className="h-30 w-30 bg-[#1F1F1F] flex flex-col items-center justify-center rounded-4xl px-4" key={yearexprience.value}>
                    <p className="text-center text-4xl font-semibold text-[#F2B75F]">{yearexprience.value}</p>
                    <h1 className="text-[#70747B] text-sm text-center mt-2 leading-tight">
                        <span className="block">{yearexprience.line1}</span>
                        <span className="block">{yearexprience.line2}</span>
                    </h1>
                </Button>
            ))}
          </div>


          </div>

          
        </div>
      </div>
    </>
  );
}
