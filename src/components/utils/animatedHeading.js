export default function AnimatedHeading(props) {
  return (
    <div className={"u-center-text u-margin-bottom-" + props.marginBottom}>
      <h2 className="heading-secondary" id={props.id || ""}>
        {props.title}
      </h2>
    </div>
  );
}
