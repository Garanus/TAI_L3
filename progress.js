function move() {
    const elem = document.getElementById("myBar");
    let value = document.querySelector("#myBar").innerHTML;
    let width = parseInt(value);
    let id = setInterval(frame, 10);
    function frame() {
        if (width <= 90) {
            console.log("width ", width);
            clearInterval(id);
            width += 10;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        } else {
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}