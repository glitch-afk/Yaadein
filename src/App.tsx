import Navbar from "./components/Navbar";
import BidSection from "./components/BidSection";
import Calender from "./components/Calender";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <BidSection />
      <Calender />
      <Footer />
    </div>
  );
}

export default App;
