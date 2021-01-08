import logo from "./logo.svg";
import "./css/style.css";
// import "./css/icon-font.css";
import HomePage from "./pages/homePage";
import Footer from "./components/footer";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
