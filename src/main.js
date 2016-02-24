import Greeting from "./greeting.js"
import DateTime from "./datetime.js"

var h1 = document.querySelector("h1");
h1.textContent = new Greeting();

var h2 = document.querySelector("h2");
h2.textContent = new DateTime();