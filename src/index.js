// Libraries
import $ from "jquery";
import "bootstrap";

// Local
import "./scss/main.scss";

function component() {
    $(document).ready(function() {
        var bsen = (typeof $().modal === "function");
        console.log(bsen);
    });

    let element = document.createElement("div");

    element.classList.add("hello");

    // var myIcon = new Image();  
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
