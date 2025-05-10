
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--color-surface)] border-b border-[var(--color-border)] px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-[var(--color-primary)]">automate</h1>

        <div className="hidden md:flex items-center gap-6">
          {/* <Button variant="ghost">
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost">
            <a href="#contact">Contact</a>
          </Button> */}
          <ThemeToggle />
        </div>

        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center">
          {/* <Button variant="ghost">
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost">
            <a href="#contact">Contact</a>
          </Button> */}
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
