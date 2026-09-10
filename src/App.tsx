import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import Needs from '@/components/Needs';
import Solutions from '@/components/Solutions';
import InfrastructureMap from '@/components/InfrastructureMap';
import Philosophy from '@/components/Philosophy';
import Methodology from '@/components/Methodology';
import TechnicalVsProfessional from '@/components/TechnicalVsProfessional';
import Projects from '@/components/Projects';
import Plans from '@/components/Plans';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Profile from '@/pages/Profile';

function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <Needs />
      <Solutions />
      <InfrastructureMap />
      <Philosophy />
      <Methodology />
      <TechnicalVsProfessional />
      <Projects />
      <Plans />
      <Resources />
      <Contact />
    </main>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-black-primary text-white">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}
