import header from "./makeHeader";
import main from "./makeMain";
import home from "./renderHome";
import contact from "./renderContact";
import menu from "./renderMenu";

const content = document.getElementById("content");

content.append(header, main);

const display = document.querySelector("#menu");
const homeTab = document.querySelector("#tabsmenu > li:nth-child(1)");
const contactTab = document.querySelector("#tabsmenu > li:nth-child(2)");
const menuTab = document.querySelector("#tabsmenu > li:nth-child(3)");

homeTab.addEventListener("click", function() { 
    display.replaceChildren();
    display.appendChild(home);
})

contactTab.addEventListener("click", function() { 
    display.replaceChildren();
    display.appendChild(contact);
})

menuTab.addEventListener("click", function() { 
    display.replaceChildren();
    display.appendChild(menu);
})

