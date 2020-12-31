export default function BackgroundVideo(props) {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={props.mp4} type="video/mp4" />
        <source src={props.webm} type="video/webm" />
        This video is not supported for your browser
      </video>
    </div>
  );
}
