import logo from "./logo.svg";
import "./css/style.css";
import "./css/icon-font.css";
import Header from "./components/header";
import AboutUs from "./components/aboutUs";
import Features from "./components/features/features";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Features />
    </>
  );
}

export default App;
