import EightBall from "./components/EightBall";

function App() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <a href="index.html" id="logo-link">
            <img
              src="src/assets/pexels-seraphina-howard-1056395852-31546127.jpg"
              alt="Pink 8 ball"
              id="logo"
            />
            Magic 8 Ball Oracle
          </a>
        </div>

        <ul className="links">
          <li><a href="#">link one</a></li>
          <li><a href="#">link two</a></li>
          <li><a href="#">link three</a></li>
        </ul>
      </nav>

      <div className="center-wrapper">
        <div className="header">
          <h1>Welcome to the Magic 8 Ball Oracle</h1>
        </div>

        <div className="magic-eight-ball-container">
          <img
            src="src/assets/pexels-seraphina-howard-1056395852-31546127.jpg"
            alt="Pink 8 ball"
            id="magic-eight-ball"
          />
        </div>
      </div>

      <EightBall/>
    </>
  );
}

export default App;
