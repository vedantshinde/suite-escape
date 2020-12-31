import AnimatedHeading from "../utils/animatedHeading";
import TourCard from "./tourCard";

const tourCardObj = [
  {
    config: "1",
    title: "The Sea Explorer",
    description: [
      "3 day tours",
      "Up to 30 people",
      "3 tour guides",
      "Sleep in cozy hotels",
      "difficulty: easy",
    ],
    price: "$297",
  },
  {
    config: "2",
    title: "The Forest Hiker",
    description: [
      "10 day tours",
      "Up to 3 people",
      "1 tour guides",
      "Sleep in sturdy tents",
      "difficulty: medium",
    ],
    price: "$599",
  },
  {
    config: "3",
    title: "The Snow Adventurer",
    description: [
      "7 day tours",
      "Up to 6 people",
      "3 tour guides",
      "Sleep in snug cabins",
      "difficulty: hard",
    ],
    price: "$999",
  },
];

export default function Tours() {
  return (
    <section className="section-tours">
      <AnimatedHeading
        title="Most popular tours"
        id="tours"
        marginBottom="medium"
      />
      <div className="row">
        {tourCardObj.map((card, index) => (
          <TourCard
            key={index}
            config={card.config}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green btn--animated">
          Discover all tours
        </a>
      </div>
    </section>
  );
}
