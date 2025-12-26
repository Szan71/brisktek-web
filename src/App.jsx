import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import BusinessSolutions from "./components/BusinessSolutions";

function App() {
  return (
    <div className="w-full bg-white m-0 p-0">
      <Navbar />
      <main className="w-full">
        <div className="m-4">
          <Hero />
        </div>
        <AboutSection />
        <BusinessSolutions />
      </main>
    </div>
  );
}

export default App;
