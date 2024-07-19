import "./App.css";
import Banner from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Companies } from "./components/Companies";
import { Services } from "./components/Services/Services";
import { CallAction } from "./components/CallAction";
import { CaseStudies } from "./components/CaseStudies";
import Team from "./components/Teams/Team";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div>
      <div className="App px-4 py-6 max-w-7xl mx-auto">
        <Navbar />
        <Banner />
        <Companies />
        <Services />
        <CallAction />
        <CaseStudies />
        <Work />
        <Team />
        <Testimonials/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
