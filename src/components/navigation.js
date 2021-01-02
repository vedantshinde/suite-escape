import { useRef, useEffect } from "react";

const menuItemsObj = [
  {
    link: "#about",
    name: "About Us",
  },
  {
    link: "#features",
    name: "What we offer",
  },
  {
    link: "#tours",
    name: "Popular Tours",
  },
  {
    link: "#stories",
    name: "User testimonials",
  },
  {
    link: "#book",
    name: "Book Now",
  },
];

export default function Navigation() {
  const myInput = useRef();
  const redirect = () => myInput.current.click();

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button" ref={myInput}>
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {menuItemsObj.map((item, index) => (
            <li key={index} className="navigation__item" onClick={redirect}>
              <a href={item.link} className="navigation__link">
                <span>{"0" + (index + 1)}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
