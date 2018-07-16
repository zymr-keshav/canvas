import { colorBox } from "./color.js";
import { setBackgroundImage } from "./alphabet.js";

let n = 0;
const len = Object.keys(colorBox).length;
const boardDiv = document.querySelector(".board");
const shapeDiv = document.getElementById("shape");
const charDiv = document.getElementById("char");

const clearShapeDiv = () => {
    while (shapeDiv.hasChildNodes()) {
        shapeDiv.removeChild(shapeDiv.lastChild);
    }
};

document.addEventListener(
    "keydown",
    e => {
        document.querySelector("h2").style.display = "none";
        n++;
        let key = e.key;
        const isNumber = !isNaN(Number(key));

        if (isNumber) {
            n = n % len == 0 ? 1 : n;
            boardDiv.style.backgroundColor = Object.values(colorBox)[n];
            boardDiv.style.backgroundImage = null;
            clearShapeDiv();
            charDiv.innerHTML = key;
            for (let i = 0; i < Number(key); i++) {
                const div = document.createElement("div");
                div.classList = "circle";
                shapeDiv.appendChild(div);
            }
        } else {
            const char = key.toUpperCase();
            boardDiv.style.backgroundColor = "transparent";
            clearShapeDiv();
            charDiv.innerHTML = char;
            setBackgroundImage(key);
        }
    },
    false
);
