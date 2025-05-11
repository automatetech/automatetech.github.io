
// import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="text-center py-20 space-y-6 max-w-3xl mx-auto flex-grow flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
        Revolutionizing Automotive Service Management
      </h1>
      <p className="text-lg text-[var(--color-text-muted)]">
        Automate connects automotive service providers and vehicle owners through a smart, seamless platform designed to simplify operations, boost visibility, and grow customer relationships. 
        Whether you&aposre a neighborhood garage or a national chain, Automate adapts to your needs
        with powerful tools that scale. Launch in minutes, save hours every day.
      </p>
      {/* <div className="space-x-4">
        <Button>Schedule a Demo</Button>
        <Button variant="outline">See How It Works</Button>
      </div> */}
    </section>
  );
}
