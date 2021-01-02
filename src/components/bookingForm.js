import AnimatedHeading from "./utils/animatedHeading";

export default function BookingForm() {
  return (
    <section className="section-book" id="book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <AnimatedHeading title="Book a tour here" marginBottom="medium" />
              <div className="form__group form__group--label-animation">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group form__group--label-animation">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email Address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="package"
                    name="type"
                  />

                  <label htmlFor="package" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Package
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="single"
                    name="type"
                  />

                  <label htmlFor="single" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Single tour
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green btn--animated">
                  Next Step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
