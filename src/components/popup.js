import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

export default function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat8} alt="Tour photo" class="popup__img" />
          <img src={nat9} alt="Tour photo" class="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            atque, vero illo consectetur consequatur perspiciatis non asperiores
            nobis quo quam quos sequi repellat placeat aut voluptatem.
            Voluptatum esse corrupti quidem sunt magnam, architecto nulla
            quibusdam? Tempora, corporis laboriosam asperiores nemo rem iste
            doloribus dolorum earum aut? Rem placeat voluptates officiis nemo
            ex? Quod dolore molestiae reprehenderit amet optio eveniet rerum ut,
            iure ullam obcaecati vero eum nam perspiciatis excepturi et
            accusantium molestias! “The Potters smiled and waved at Harry and he
            stared hungrily back at them, his hands pressed flat against the
            glass as though he was hoping to fall right through it and reach
            them. He had a powerful kind of ache inside him, half joy, half
            terrible sadness.”
          </p>
          <a href="#" className="btn btn--green btn--animated">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
