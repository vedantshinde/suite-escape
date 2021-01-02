import Header from "../components/header";
import AboutUs from "../components/aboutUs";
import Features from "../components/features/features";
import Tours from "../components/tours/tours";
import Stories from "../components/stories/stories";
import BookingForm from "../components/bookingForm";
import Popup from "../components/popup";

export default function HomePage() {
  return (
    <>
      <Header />
      <AboutUs />
      <Features />
      <Tours />
      <Stories />
      <BookingForm />
      <Popup />
    </>
  );
}
