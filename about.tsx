import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NeuroPlay Studios" },
      { name: "description", content: "About NeuroPlay Studios — mission, vision, and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Innovation", body: "We push technical and design boundaries to discover new forms of play." },
  { title: "Inclusivity", body: "Games should be welcoming and accessible to players from all backgrounds and abilities." },
  { title: "Creativity", body: "We value bold ideas and expressive artistry in every project." },
  { title: "Community", body: "We build with players, not just for them — feedback and playtests guide our process." },
  { title: "Integrity", body: "We act honestly and respectfully in our business and design choices." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-5 py-16">
        <h1 className="text-4xl sm:text-5xl">About NeuroPlay Studios</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          We deliver AI-driven personalized gaming experiences that adapt to each player's style, skill,
          and accessibility needs — creating richer, more replayable and inclusive play for everyone.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">Mission</h2>
              <p className="mt-2 text-muted-foreground">To provide personalized gaming to all gamers and redefine the gaming world.</p>
            </div>
            <div>
              <h2 className="text-2xl">Vision</h2>
              <p className="mt-2 text-muted-foreground">To redefine gaming through AI-driven personalization, creating adaptive worlds with limitless replayability and accessibility.</p>
            </div>
            <div>
              <h2 className="text-2xl">Values</h2>
              <ul className="mt-4 space-y-3">
                {values.map((v) => (
                  <li key={v.title} className="rounded-lg border border-border bg-card/50 p-4">
                    <strong className="text-primary">{v.title}</strong>
                    <span className="text-muted-foreground"> — {v.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-border bg-card/50 p-6">
            <h3 className="text-lg">Press & Media</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For press inquiries, email{" "}
              <a href="mailto:press@neuroplay.games" className="text-primary hover:underline">press@neuroplay.games</a>{" "}
              and request our press kit.
            </p>
            <h3 className="mt-6 text-lg">Join our playtests</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign up on the homepage newsletter to receive playtest invites and developer updates.
            </p>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
