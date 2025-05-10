export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] px-4 py-8 mt-16 text-sm text-[var(--color-text-muted)] text-center border-t border-[var(--color-border)]">
      © {new Date().getFullYear()} Automate Technologies Pvt. Ltd. All rights reserved.
    </footer>
  );
}