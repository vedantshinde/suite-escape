import logo from "./logo.svg";
import "./css/style.css";
import "./css/icon-font.css";
import Header from "./components/header";
import AboutUs from "./components/aboutUs";
import Features from "./components/features/features";
import Tours from "./components/tours/tours";
import Stories from "./components/stories/stories";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Features />
      <Tours />
      <Stories />
    </>
  );
}

export default App;
