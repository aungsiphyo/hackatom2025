import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { LearnSection } from './components/LearnSection';
import { ContactSection } from './components/ContactSection';
import { ReportSection } from './components/ReportSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <HomeSection />
        <LearnSection />
        <ContactSection />
        <ReportSection />
      </main>
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p>&copy; 2025 SMR Project. Committed to safe, clean energy for our communities.</p>
      </footer>
    </div>
  );
}
