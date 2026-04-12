"use client";

import { useState, type FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // TODO: hook up to an actual endpoint (Formspree, Supabase, etc.)
    console.log("Form submitted:", Object.fromEntries(data));
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-muted">
          Tell me about your business and what you&apos;re looking for. I&apos;ll
          get back to you within 24 hours.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <p className="text-lg font-medium">Message sent!</p>
            <p className="mt-2 text-sm text-muted">
              I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                required
                placeholder="Name"
                className="rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
              <input
                name="business"
                type="text"
                placeholder="Business Name"
                className="rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="resize-none rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="self-start rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
