import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Achievements />
        <Courses />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;