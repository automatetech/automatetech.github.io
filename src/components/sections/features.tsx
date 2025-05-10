
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section id="features" className="py-16 bg-[var(--color-surface-secondary)] text-[var(--color-text)] max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-12 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "1. Smart Booking System", 
            description: "Allow customers to schedule services online in seconds — no more back-and-forth phone calls. Real-time availability and reminders increase retention and efficiency."
          }, 
          {
            title: "2. Powerful Business Dashboard",
            description: "Manage jobs, payments, staff, and analytics in one place. Track performance and automate daily operations with our intuitive dashboard built for service providers."
          }, 
          {
            title: "3. Customer Engagement & Loyalty",
            description: "Automatically follow up with customers, collect feedback, and offer deals. Keep them coming back with built-in retention tools."
          }
          ].map((item, i) => (
          <Card key={i} className="bg-white dark:bg-[var(--color-surface)]">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-muted)]">
              {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
