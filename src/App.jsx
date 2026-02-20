import { useState } from "react";
import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";
import Home      from "./pages/Home";
import Services  from "./pages/Services";
import About     from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact   from "./pages/Contact";

export default function App() {
  const [page,  setPage]  = useState("Home");
  const [toast, setToast] = useState(false);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3500);
    e.target.reset();
  };

  return (
    <>
      <Navbar currentPage={page} navigate={navigate} />

      <main>
        {page === "Home"      && <Home      navigate={navigate} />}
        {page === "Services"  && <Services  />}
        {page === "About"     && <About     />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Contact"   && <Contact   onSubmit={handleContactSubmit} />}
      </main>

      <Footer navigate={navigate} />

      {/* Toast */}
      <div className={`fixed bottom-8 right-8 z-50 bg-ink text-paper px-6 py-4 rounded-sm text-sm border-l-4 border-accent transition-all duration-500 ${toast ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}`}>
        ✓ &nbsp;Message sent! We'll be in touch soon.
      </div>
    </>
  );
}