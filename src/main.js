import Greeting from "./greeting.js"
import DateTime from "./datetime.js"
import HelloController from "./hello.js"
import angular from "angular"

var h1 = document.querySelector("h1");
h1.textContent = new Greeting();

var h2 = document.querySelector("h2");
h2.textContent = new DateTime();

angular.module("app", [])
    .controller("HelloController", HelloController);