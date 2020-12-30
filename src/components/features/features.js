import FeatureCard from "./featureCard";

const featureCardObj = [
  {
    icon: "icon-basic-world",
    title: "Explore the world",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde eligendi a ratione.",
  },
  {
    icon: "icon-basic-compass",
    title: "Meet nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde eligendi a ratione.",
  },
  {
    icon: "icon-basic-map",
    title: "Find you way",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde eligendi a ratione.",
  },
  {
    icon: "icon-basic-heart",
    title: "Live a healthier life",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde eligendi a ratione.",
  },
];

export default function Features() {
  return (
    <section className="section-features">
      <div className="row">
        {featureCardObj.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
