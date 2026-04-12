export function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Raw Studios. Cleveland, OH.
        </p>
        <a
          href="mailto:outreach@rawstudios.info"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          outreach@rawstudios.info
        </a>
      </div>
    </footer>
  );
}
