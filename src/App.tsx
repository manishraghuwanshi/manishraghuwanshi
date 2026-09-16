import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { PageTransition } from "./components/effects";
import Breadcrumbs from "./components/breadcrumbs/BreakCrumbs";
import ErrorBoundary from "./components/ui/error/ErrorBoundary";
import HeaderErrorBoundary from "./components/ui/error/HeaderErrorBoundary";
import FooterErrorBoundary from "./components/ui/error/FooterErrorBoundary";

export default function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <HeaderErrorBoundary>
        <Header />
      </HeaderErrorBoundary>

      <main className={isHomePage ? "" : "pt-20"}>
        {!isHomePage && <Breadcrumbs />}

        <ErrorBoundary>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </ErrorBoundary>
      </main>
      <FooterErrorBoundary>
        <Footer />
      </FooterErrorBoundary>
    </div>
  );
}
