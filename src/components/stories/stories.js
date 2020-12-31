import AnimatedHeading from "../utils/animatedHeading";
import BackgroundVideo from "../utils/backgroundVideo";
import StoryCard from "./storyCard";
import nat8 from "../../img/nat-8.jpg";
import nat9 from "../../img/nat-9.jpg";
import videoMp4 from "../../img/video.mp4";
import videoWebm from "../../img/video.webm";

const storyCardObj = [
  {
    img: nat8,
    name: "Nupoor Shah",
    title: "It changed my entire outlook on what it means to live",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        dolor labore cum minus a vero perferendis consequatur harum qui illo
        odit dolorum, omnis autem. Assumenda reprehenderit totam eligendi
        numquam sunt.`,
  },
  {
    img: nat9,
    name: "Kane Brown",
    title: "This trip started it all...",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        dolor labore cum minus a vero perferendis consequatur harum qui illo
        odit dolorum, omnis autem. Assumenda reprehenderit totam eligendi
        numquam sunt.`,
  },
];

export default function Stories() {
  return (
    <div className="section-stories">
      <BackgroundVideo mp4={videoMp4} webm={videoWebm} />
      <AnimatedHeading
        marginBottom="big"
        id="stories"
        title="A word from our customers"
      />
      {storyCardObj.map((card, index) => (
        <StoryCard
          key={index}
          name={card.name}
          title={card.title}
          description={card.description}
        >
          {card.img}
        </StoryCard>
      ))}
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-txt">
          Read all stories &rarr;
        </a>
      </div>
    </div>
  );
}
