import { FiAlertTriangle } from "react-icons/fi";

interface ErrorFallbackProps {
  error: Error | null;
  resetError: () => void;
}

export default function ErrorFallback({
  error,
  resetError,
}: ErrorFallbackProps) {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <main className="flex py-12 items-center justify-center bg-black px-5 text-white">
      <section className="flex items-center flex-col   w-full max-w-2xl text-center">
        {/* <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Unexpected Error
        </p> */}
        <div className=" flex items-center mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400 gap-3">
          <FiAlertTriangle />

          <span>Unexpected Error </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Something went wrong.
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
          Something unexpected happened while loading this page. You can try
          reloading the page or return to the homepage.
        </p>

        {import.meta.env.DEV && error && (
          <details className="mx-auto mt-8 max-w-xl text-left">
            <summary className="cursor-pointer text-sm text-white/50">
              Show error details
            </summary>

            <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-6 text-red-300">
              {error.stack || error.message}
            </pre>
          </details>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReload}
            className="rounded-lg border border-[#1e3e62] px-5 py-3 text-sm font-medium transition hover:bg-[#0b192c]"
          >
            Reload page
          </button>

          <button
            type="button"
            onClick={handleGoHome}
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Go to homepage
          </button>
        </div>

        <button
          type="button"
          onClick={resetError}
          className="mt-5 text-xs text-white/40 underline underline-offset-4 transition hover:text-white/70"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
