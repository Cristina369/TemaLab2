window.addEventListener("deviceorientation",on_device_orientation);

function on_device_orientation(evt) {
    let alpha = evt.alpha;
    let beta = evt.beta;
    let gamma = evt.gamma;

    document.getElementById("a").innerHTML = "Alpha = "+alpha;
    document.getElementById("b").innerHTML = "Beta = "+beta;
    document.getElementById("c").innerHTML = "Gamma = "+gamma;

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let basicRadius = 20;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#8B0000";
    context.beginPath();
    document.getElementById("b").innerHTML = "Beta = " + basicRadius+gamma;
    context.arc(180, 150, basicRadius+gamma,0, 2 * Math.PI);
    context.fill();
}
