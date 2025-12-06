import { contacts } from "./data.js"

const contact = document.getElementById("contact");
const email = document.getElementById("email");
const fb = document.getElementById("fb");
const ig = document.getElementById("ig");
const tel = document.getElementById("tel");
const my_work = document.getElementById("my-work");
const hobbies = document.getElementById("hobbies");


my_work.addEventListener("click", ()=>{
    alert("you came to the my work page!!!")
})

hobbies.addEventListener("click", ()=>{
    alert("you came to the hobbies page!!!")
})


email.innerHTML = contacts.email
fb.innerHTML = contacts.fb
ig.innerHTML = contacts.ig
tel.innerHTML = contacts.tel



console.log("hello world")