import Image from "next/image";
import Link from "next/link";
import { Sun, ArrowRight, MapPin, Calendar, Clock } from "lucide-react";

export function KidsSummerBanner() {
  return (
    <section className="bg-[#e6f2ec] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2F4F4F] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Sun className="h-3.5 w-3.5 text-yellow-300" />
              Now Open · Summer 2026
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-5">
              Kids Yoga
              <br />
              <span className="text-[#2F4F4F]">Summer Series.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-7 max-w-md">
              8 weeks of outdoor yoga at Wolf Pen Creek — built for kids ages
              4–7 who are ready to move, play, and explore the natural world.
              {/* Every registration includes the Neon Fox Starter Pack. */}
            </p>

            {/* Detail pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                <Calendar className="h-3.5 w-3.5 text-[#2F4F4F]" />
                June 3 – July 22
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                <Clock className="h-3.5 w-3.5 text-[#2F4F4F]" />
                Wednesdays · 8:30am
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                <MapPin className="h-3.5 w-3.5 text-[#2F4F4F]" />
                Wolf Pen Creek
              </span>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* <div className="bg-white rounded-2xl px-6 py-4 border border-slate-200 shadow-sm text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2F4F4F] mb-0.5">Early Bird</p>
                <p className="text-3xl font-black text-slate-900">$125</p>
                <p className="text-xs text-slate-400 mt-0.5">Limited time</p>
              </div> */}
              <Link
                href="/kids-yoga"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2F4F4F] hover:bg-[#263f3f] px-7 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-[#2F4F4F]/20"
              >
                See the Full Program
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Photos */}
          <div className="relative h-[480px] hidden sm:block">
            {/* Warrior — main large photo */}
            <div className="absolute inset-y-0 left-0 right-16 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/kids-yoga-warrior.jpg"
                alt="Kids doing warrior pose outdoors at Wolf Pen Creek"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Hands stamps — floating inset */}
            <div className="absolute bottom-6 right-0 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[#e6f2ec]">
              <Image
                src="/kids-yoga-hands.jpg"
                alt="Kids showing Neon Fox animal stamps on their hands"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Mobile-only single photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-video sm:hidden">
            <Image
              src="/kids-yoga-warrior.jpg"
              alt="Kids doing warrior pose outdoors at Wolf Pen Creek"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
