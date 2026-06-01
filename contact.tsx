import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NeuroPlay Studios" },
      { name: "description", content: "Contact NeuroPlay Studios for press, partnerships, or playtests." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container mx-auto max-w-2xl px-5 py-16">
        <h1 className="text-4xl sm:text-5xl">Contact</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          We'd love to hear from you — press, partnerships, or playtest inquiries.
        </p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-primary/40 bg-card p-6">
            <h2 className="text-xl">Thanks for reaching out!</h2>
            <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 grid gap-4"
          >
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Name</span>
              <input required name="name" className="rounded-lg border border-border bg-transparent px-4 py-3 focus:border-primary focus:outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Email</span>
              <input required type="email" name="email" className="rounded-lg border border-border bg-transparent px-4 py-3 focus:border-primary focus:outline-none" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea required rows={6} name="message" className="rounded-lg border border-border bg-transparent px-4 py-3 focus:border-primary focus:outline-none" />
            </label>
            <button className="mt-2 rounded-lg bg-[image:var(--gradient-primary)] px-5 py-3 font-bold text-primary-foreground shadow-[var(--shadow-accent)]">
              Send Message
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-muted-foreground">
          Or reach us directly:{" "}
          <a href="mailto:hello@neuroplay.games" className="text-primary hover:underline">hello@neuroplay.games</a>
        </p>
      </section>
    </SiteLayout>
  );
}
