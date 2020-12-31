export default function StoryCard(props) {
  return (
    <div className="row">
      <div className="story-card">
        <figure className="story-card__shape">
          <img
            src={props.children}
            alt="User photo"
            className="story-card__image"
          />
          <figcaption className="story-card__caption">{props.name}</figcaption>
        </figure>
        <div className="story-card__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.title}
          </h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
