
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ValueProp } from "@/components/sections/value-prop";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <Navbar />
      <div className="flex-grow">
        <Hero />
      </div>
      {/* <Features /> */}
      {/* <ValueProp /> */}
      <Footer />
    </main>
  );
}
