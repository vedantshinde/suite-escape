export default function FeatureCard(props) {
  return (
    <>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className={"feature-box__icon " + props.icon}></i>
          <h3 className="heading-tertiary">{props.title}</h3>
          <p className="feature-box--text">{props.description}</p>
        </div>
      </div>
    </>
  );
}
