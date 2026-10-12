import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import "./static.css";
import reactLogo from "./assets/react-logo.png";


const root = createRoot(document.getElementById("root"));
root.render(<Static />);

function Static() {
  return (
    <Fragment>
      <header>
        <nav>
          <img src={reactLogo} width="40px" alt="React Logo" />
          <span>ReactFacts</span>
        </nav>
      </header>
      <main>
        <h1>Fun facts about React</h1>
        <ul className="facts-list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </Fragment>
  );
}
