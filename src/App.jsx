import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import BusinessSolutions from "./components/BusinessSolutions";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection"

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
        <WhyChooseUs />
        <ProcessSection />
      </main>
    </div>
  );
}

export default App;
