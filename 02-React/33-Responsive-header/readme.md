
```bash
npm install react-icons
```

#### App.jsx
```javascript
import HeroSection from "./component/HeroSection"
import Navbar from "./component/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}

export default App
```

#### App.css
```javascript
/* // Banners */

.hero-section {
  height: 60vh;
}

.hero-section .container {
  background-color: #fff;
  padding: 3.2rem;
}

.banner-column {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
}

&-image {
  display: block;
  max-width: 20rem;
  height: auto;
  object-fit: cover;
  justify-self: center;
}

&-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.5rem;
}

.paragraph {
  margin: 3.2rem 0;
}

.heading-xl {
  font-family: inherit;
  font-size: clamp(2.648rem, 6vw, 4.241rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
}

button {
  display: inline-block;
  font-family: inherit;
  /* font-size: 0.95rem; */
  font-weight: 500;
  line-height: 1.5;
  padding: 0.6rem 2.4rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  text-transform: unset;
  transition: all 0.3s ease-in-out;
  background: #000;
  color: #fff;
}

.banner-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .banner-image {
  width: 100%;
}

@media screen and (max-width: 990px) {
  .banner-column {
    flex-direction: column;
  }

  .banner-inner {
    order: 1;
  }

  .container .banner-image {
    width: 80%;
    order: 0;
  }
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "urbanist";
}

p,
li,
a,
button {
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
}

li {
  list-style: none;
}

a {
  color: #000;

  &:hover {
    color: #2e86c1;
    text-decoration: underline;
  }
}

button {
  cursor: pointer;
}

header {
  height: 10rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  background-color: #d4e6f1;
  width: 100%;
}

.container {
  max-width: 132rem;
  margin: auto;
  height: 10rem;
}

.grid {
  display: grid;
}

.navbar-grid {
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  height: 10rem;
  padding: 0 3.2rem;
}

nav ul {
  display: flex;
  justify-content: flex-end;
  /* background-color: yellow; */
  gap: 3.2rem;
}

.ham-menu {
  display: none;
}

/* media queries  */
@media screen and (max-width: 998px) {
  .menu-web {
    display: none;
  }

  .ham-menu {
    display: inline-block;
    /* justify-content: flex-end; */
    text-align: end;
  }

  .menu-mobile {
    position: absolute;
    top: 10rem;
    left: 0;
    background-color: #fff;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px;
  }

  .menu-mobile ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    & li:first-child {
      margin-top: 1.2rem;
    }

    & li:last-child {
      margin-bottom: 1.2rem;
    }
  }
}
```

#### component/HeroSection
```javascript
const HeroSection = () => {
    return (
        <>
            <main className="hero-section main ">
                <div className="container">
                    <div className=" banner-column ">
                        <div className="banner-inner">
                            <h1 className="heading-xl">
                                All Your Files in One Secure Location.
                            </h1>
                            <p className="paragraph">
                                We stores all your most important files in one secure location.
                                Access them whenever needed, share and collaborate with your
                                connections.
                            </p>
                            <button className="btn btn-darken btn-inline">
                                Get Started<i className="bx bx-right-arrow-alt"></i>
                            </button>
                        </div>
                        <div className="banner-img">
                            <img
                                className="banner-image"
                                src="https://i.ibb.co/sVqYmS2/Illustration.png"
                                alt="Illustration"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HeroSection
```


#### component/Navbar
```javascript
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>THAPA TECHNICAL</h1>
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/thapatechnical/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar
```