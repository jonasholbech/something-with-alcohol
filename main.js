import { rangeColorChanger, autoExpandTextarea } from "./utils.js";

rangeColorChanger();
autoExpandTextarea();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let happy = false;
  if (form.elements.happy_hour.value === "yes") {
    happy = true;
  }
  const obj = {
    name: form.elements.name.value,
    price: Number(form.elements.price.value),
    happy_hour: happy,
    ingredients: form.elements.ingredients.value.split("\n"),
  };
  console.log(obj);
  post(obj);

  //1. post to db
  //2. update UI
  //3. clear the form
});

const APIKEY = "606d5d99f5535004310074ed";
const endpoint = "https://frontendspring20-9cc3.restdb.io/rest/something-wa";

function post(payload) {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "x-apikey": APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

/*
import "./style.css";
const APIKEY = "606d5d99f5535004310074edx";
const endpoint = "https://frontendspring20-9cc3.restdb.io/rest/superheroes";

function post() {
  const hero = {
    real_name: "Lord JS Von Doom",
    alias: "Jonas",
    dob: "2000-01-01",
  };
  fetch(endpoint, {
    method: "POST",
    headers: {
      "x-apikey": APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hero),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}


*/
