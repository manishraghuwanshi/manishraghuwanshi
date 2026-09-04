import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-semibold text-[#4F7FA8]">
          404
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Page not found
        </h1>

        <p className="mt-4 text-[#a1a1aa]">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-[#1E3E62] px-6 py-3 font-semibold text-white"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}