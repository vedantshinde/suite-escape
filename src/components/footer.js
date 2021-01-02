import logo from "../img/favicon.png";

const listObj = [
  {
    name: "Company",
    link: "#",
  },
  {
    name: "Contact Us",
    link: "#",
  },
  {
    name: "Carrers",
    link: "#",
  },
  {
    name: "Privacy",
    link: "#",
  },
  {
    name: "Terms",
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {listObj.map((item, index) => (
                <li key={index} className="footer__item">
                  <a href={item.link} className="footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">
            “But he understood at last what Dumbledore had been trying to tell
            him. It was, he thought, the difference between being dragged into
            the arena to face a battle to the death and walking into the arena
            with your head held high. Some people, perhaps, would say that there
            was little to choose between the two ways, but Dumbledore knew — and
            so do I, thought Harry, with a rush of fierce pride, and so did my
            parents — that there was all the difference in the world.” ― J.K.
            Rowling, Harry Potter and the Half-Blood Prince
          </p>
        </div>
      </div>
    </footer>
  );
}
