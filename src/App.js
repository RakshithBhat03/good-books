import "./App.css";
import { useState } from "react";
var bookDB = {
  AI: [
    { name: "Artificial Intelligence: A Modern Approach", ratings: "4.5/5" },
    {
      name: "Superintelligence: Paths, Dangers, Strategies V",
      ratings: "4/5",
    },
    { name: "The Hundred-Page Machine Learning Book", ratings: "4.2/5" },
    { name: "An Introduction to Statistical Learning", ratings: "4.6/5" },
    {
      name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
      ratings: "4.7/5",
    },
  ],
  SciFi: [
    { name: "The Martian", ratings: "4.4/5" },
    { name: "Nineteen Eighty-Four ", ratings: "4.2/5" },
    { name: "The Time Machine ", ratings: "4/5" },
    { name: "Frankenstein", ratings: "3.8/5" },
    { name: "The War of the Worlds", ratings: "3.7/5" },
  ],
  Mystery: [
    { name: "The Silent Patient", ratings: "4.1/5" },
    { name: "Murder on the Orient Express", ratings: "4.2/5" },
    { name: "The Hound of the Baskervilles", ratings: "4.1/5" },
    { name: "Gone Girl", ratings: "4.1/5" },
    { name: "Da Vinci Code", ratings: "4/5" },
  ],
};
var arrDB = Object.keys(bookDB);
export default function App() {
  var [inputCategory, setInputCategory] = useState("AI");
  function userClick(event) {
    setInputCategory(event);
  }
  return (
    <div className="App">
      <h1 style={{ color: "var(--primary-color)" }}>📘 Good Books</h1>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: "bold",
          color: "var(--primary-color)",
        }}>
        Checkout some of the best books available. Select a category to get
        started.
      </h2>
      <div>
        {arrDB.map((category) => (
          <button
            onClick={function () {
              return userClick(category);
            }}>
            {category}
          </button>
        ))}
      </div>
      <div className="displayDiv">
        <ul>
          {bookDB[inputCategory].map((item) => (
            <li className="list">
              <div className="bookName">{item.name}</div>
              <div className="bookRatings">{item.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <div class="socials">My Socials</div>
        <ul class="list-footer">
          <li>
            <a
              href="https://github.com/RakshithBhat03"
              target="_blank"
              class="link">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/RakshithBhat1"
              target="_blank"
              class="link">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rakshithbhat/"
              target="_blank"
              class="link">
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://rakshithbhat.netlify.app/"
              target="_blank"
              class="link">
              Portfolio
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
