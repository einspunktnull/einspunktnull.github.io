/**
 * @author Albrecht Nitsche
 */


window.onload = (event) => {
    const canvasBirds = document.getElementById("canvasBirds");
    const imgEPN = new Image();
    let ctxBirds;

    if (!canvasBirds.getContext) {
        // canvas-unsupported
        console.log("canvas not supported");
    } else {
        imgEPN.src = "img/einspunktnull.png";
        imgEPN.onload = () => {
            ctxBirds = canvasBirds.getContext("2d");
            ctxBirds.mozImageSmoothingEnabled = false;
            window.onresize = draw;
            draw();
        };
    }

    function draw() {
        const width = ctxBirds.canvas.width = window.innerWidth;
        const height = ctxBirds.canvas.height = window.innerHeight;
        const posX = Math.round(width / 2 - imgEPN.width / 2);
        const posY = Math.round((height / 5) * 2 - imgEPN.height / 2);
        ctxBirds.drawImage(imgEPN, posX, posY);
        //console.log(width, height);
    }
};