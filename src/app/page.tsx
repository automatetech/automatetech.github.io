
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
// import { Features } from "@/components/sections/features";
// import { ValueProp } from "@/components/sections/value-prop";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "automate",
  description: "Revolutionizing Automotive Service Management",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)]">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      {/* <ValueProp /> */}
      <Footer />
    </main>
  );
}
