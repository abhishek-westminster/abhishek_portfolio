import {
  Code2,
  Palette,
  Bot,
  SearchCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

type Service = {
  id: number
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Mobile-first websites and portfolios built with clean HTML, CSS, React, and Tailwind CSS. Responsive, fast, and visually polished across all devices.",
    tags: ["HTML/CSS/JS", "React & Tailwind", "Responsive Design", "Vercel Deployment"],
    icon: Code2,
  },
  {
    id: 2,
    title: "UI Design",
    description:
      "Modern interface design with styles like glassmorphism and claymorphism. Smooth animations with GSAP and attention to every visual detail.",
    tags: ["Visual Design", "GSAP Animations", "Glassmorphism", "Mobile-First"],
    icon: Palette,
  },
  {
    id: 3,
    title: "Bot & Automation Development",
    description:
      "Telegram bots, automation scripts, and AI-powered tools built with Python and Node.js. Deployed on cloud servers like AWS EC2 and Railway.",
    tags: ["Telegram Bots", "Python Automation", "AWS EC2", "AI Integration"],
    icon: Bot,
  },
  {
    id: 4,
    title: "SEO & Web Presence",
    description:
      "Proper meta tags, structured data, and on-page SEO that gets your site found. Ranked #1 on Google for competitive keywords from scratch.",
    tags: ["Meta Tags", "On-Page SEO", "Google Ranking", "Performance Optimization"],
    icon: SearchCheck,
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#161615] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F2B75F]">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Design + Development for modern web & mobile
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            End-to-end UI/UX design and frontend development for responsive websites,
            React web apps, and mobile-friendly interfaces.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.id}
                className="rounded-[36px] bg-[#1F1F1F] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5A4528] text-[#F2B75F]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#2A2A2A] px-5 py-2 text-sm text-gray-400 hover:bg-[#493E2D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-10 flex items-center gap-3 text-lg font-medium text-[#F2B75F] transition-all duration-300 hover:gap-5">
                  Learn more
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}