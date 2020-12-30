import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

export default function AboutUs() {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary" id="about">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with the nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              eos repellendus natus ex maiores assumenda, voluptatum eius
              obcaecati nobis asperiores dolorem quia vero laboriosam, iure
              tempore accusantium? Voluptatum, magnam laboriosam.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
              saepe voluptatibus velit repellat non blanditiis amet.
            </p>

            <a href="#" className="btn-txt">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1}
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={nat2}
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={nat3}
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
