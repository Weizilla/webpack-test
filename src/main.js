import Greeting from "./greeting.js"
import DateTime from "./datetime.js"
import HelloController from "./hello.js"
import CalculatorController from "./calc.js"
import angular from "angular"
import pure from "purecss"
import fa from "font-awesome-webpack"

var h1 = document.querySelector("h1");
h1.textContent = new Greeting();

var h2 = document.querySelector("h2");
h2.textContent = new DateTime();

angular.module("app", [])
    .controller("HelloController", HelloController)
    .controller("CalculatorController", CalculatorController);
