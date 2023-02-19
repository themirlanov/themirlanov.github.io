let button = document.querySelector("button");
button.onclick = function () {
    let name = prompt("Enter your name:");
    if (name != null) {
        document.querySelector("h1").innerHTML = "Welcome " + name + '!';
    }
}
let imgjs = document.querySelector('img');
imgjs.onclick = () => {
    if (document.querySelector('img').getAttribute('src') === '../images/Ala-Too.png') {
        document.querySelector('img').setAttribute('src', '../images/Arizona.png');
    } else {
        document.querySelector('img').setAttribute('src', '../images/Ala-Too.png');
    }
}