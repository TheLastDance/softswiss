import './App.scss';
import logo from "./assets/images/LOGO.svg";
import { ReactComponent as Cart } from "./assets/images/CART.svg";
import rocket from "./assets/images/ROCKET.svg";
import close from "./assets/images/CLOSE.svg";
import burger from "./assets/images/BURGER.svg";
import { useState } from 'react';

const offers = [
  {
    title: "Move the borders of reality!",
    text: "Go on a space adventure - it's possible with us!",
  },
  {
    title: "Space is not just stars and planets",
    text: "Go on a space adventure ",
  },
  {
    title: "For those who dream of stars",
    text: "Our offer: make your dream come true",
  },
  {
    title: "Fulfill your fantastic dreams",
    text: "Space has never been so close",
  },
]

function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const handleBurgerOpen = () => setBurgerIsOpen(true);
  const handleBurgerClose = () => setBurgerIsOpen(false);

  return (
    <div className="App">
      <svg className='gradientSVG'>
        <defs>
          <linearGradient id="svg__gradient" gradientTransform="rotate(45)">
            <stop offset="50%" stopColor="var(--color2)" />
            <stop offset="100%" stopColor="var(--color1)" />
          </linearGradient>
        </defs>
      </svg>
      <header className="header">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav className={burgerIsOpen ? 'header__nav--burgerActive' : ''}>
          <button
            className='header__burgerButtonClose'
            type='button'
            onClick={handleBurgerClose}
          >
            <img src={close} alt="burger close icon" />
          </button>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
          </ul>
          <div>
            <button className='gradientHoverSvg' type='button' title='cart'>
              <Cart />
            </button>
          </div>
        </nav>
        <button
          className='header__burgerButtonOpen'
          type='button'
          onClick={handleBurgerOpen}
        >
          <img src={burger} alt="burger menu icon" />
        </button>
      </header>

      <main>
        <section className='hero'>
          <div className="hero__content">
            <h1>
              Discover the vast expanses of <span>space</span>
            </h1>
            <p>
              Where the possibilities are <span>endless!</span>
            </p>
            <button type='button'>
              Learn more
            </button>
          </div>
        </section>

        <section className='offers'>
          <h3>Offers</h3>
          <ul className="offers__grid">
            {offers.map(({ title, text }, index) =>
              <li key={index} className={`offers__grid__item offers__grid__item__${index + 1}`}>
                <h1>{title}</h1>
                <p>{text}</p>
                <button type='button'>Learn more</button>
              </li>)}
          </ul>
        </section>

        <section className='spaceParagraph'>
          <h3>Embark on a space journey</h3>
          <input type="checkbox" id="toggle" hidden />
          <p>
            Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever.
            And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream.
            We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe.
            We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries.
            Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space.
            We offer various options for space excursions.
          </p>
          <button type='button'>
            <label htmlFor="toggle">Read more</label>
          </button>
        </section>
      </main>

      <footer className='footer'>
        <img src={rocket} alt="rocket_icon" />
        <p>Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
