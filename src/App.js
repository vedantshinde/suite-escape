import logo from "./logo.svg";
import "./css/style.css";
import "./css/icon-font.css";
import Header from "./components/header";
import AboutUs from "./components/aboutUs";
import Features from "./components/features/features";
import Tours from "./components/tours/tours";
import Stories from "./components/stories/stories";
import BookingForm from "./components/bookingForm";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Features />
      <Tours />
      <Stories />
      <BookingForm />
    </>
  );
}

export default App;
