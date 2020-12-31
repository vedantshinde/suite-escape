export default function tourCard(props) {
  return (
    <div className="col-1-of-3">
      <div className="tour-card">
        <div className="tour-card__side tour-card__side--front">
          <div
            className={"tour-card__picture tour-card__picture--" + props.config}
          >
            &nbsp;
          </div>
          <h4 className="tour-card__title">
            <span
              className={
                "tour-card__title-span tour-card__title-span--" + props.config
              }
            >
              {props.title}
            </span>
          </h4>
          <div className="tour-card__description">
            <ul>
              {props.description.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={
            "tour-card__side tour-card__side--back tour-card__side--back--" +
            props.config
          }
        >
          <div className="tour-card__cta">
            <div className="tour-card__price-box">
              <p className="tour-card__price-only">Only</p>
              <p className="tour-card__price-value">{props.price}</p>
            </div>
            <a href="#" className="btn btn--white btn--animated">
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
