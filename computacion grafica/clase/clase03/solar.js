const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function rotatePoint(point, angle) {
    return {
        x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
        y: point.x * Math.sin(angle) + point.y * Math.cos(angle)
    };
}

// Centro del canvas y del sistema solar
const cx = 2500;
const cy = 2500;

let aMercurio = 0;
let aVenus = 0;
let aTierra = 0;
let aMarte = 0;
let aJupiter = 0;
let aSaturno = 0;
let aUrano = 0;
let aNeptuno = 0;
let aPluton = 0;

function Orbitas(radio){
    ctx.beginPath();
    ctx.arc(cx, cy, radio, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "green";
    ctx.stroke();
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Orbitas(90);
    Orbitas(160);
    Orbitas(250);
    Orbitas(354);
    Orbitas(445);
    Orbitas(550);
    Orbitas(645);
    Orbitas(730);
    Orbitas(800);

    // SOL 
    ctx.beginPath();
    ctx.arc(2500, 2500, 60, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffff53";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffffcf";
    ctx.stroke();

    // MERCURIO 
    let pMercurio = rotatePoint({ x: -90, y: 0 }, aMercurio);
    ctx.beginPath();
    ctx.arc(pMercurio.x + cx, pMercurio.y + cy, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#4d3c26";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffba79";
    ctx.stroke();

    // VENUS 
    let pVenus = rotatePoint({ x: -160, y: 0 }, aVenus);
    ctx.beginPath();
    ctx.arc(pVenus.x + cx, pVenus.y + cy, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "#775109";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffbe46";
    ctx.stroke();

    // TIERRA 
    let pTierra = rotatePoint({ x: -250, y: 0 }, aTierra);
    ctx.beginPath();
    ctx.arc(pTierra.x + cx, pTierra.y + cy, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#063d50";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#aceaff";
    ctx.stroke();

    // MARTE 
    let pMarte = rotatePoint({ x: -354, y: 0 }, aMarte);
    ctx.beginPath();
    ctx.arc(pMarte.x + cx, pMarte.y + cy, 38, 0, 2 * Math.PI);
    ctx.fillStyle = "#460000";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();

    // JÚPITER 
    let pJupiter = rotatePoint({ x: -445, y: 0 }, aJupiter);
    ctx.beginPath();
    ctx.arc(pJupiter.x + cx, pJupiter.y + cy, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#8b4513";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#e79860";
    ctx.stroke();

    // SATURNO 
    let pSaturno = rotatePoint({ x: -550, y: 0 }, aSaturno);
    ctx.beginPath();
    ctx.arc(pSaturno.x + cx, pSaturno.y + cy, 48, 0, 2 * Math.PI);
    ctx.fillStyle = "#581d05";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#a0522d";
    ctx.stroke();

    // URANO 
    let pUrano = rotatePoint({ x: -645, y: 0 }, aUrano);
    ctx.beginPath();
    ctx.arc(pUrano.x + cx, pUrano.y + cy, 38, 0, 2 * Math.PI);
    ctx.fillStyle = "#054932";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#00ffff";
    ctx.stroke();

    // NEPTUNO 
    let pNeptuno = rotatePoint({ x: -730, y: 0 }, aNeptuno);
    ctx.beginPath();
    ctx.arc(pNeptuno.x + cx, pNeptuno.y + cy, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#000049";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#6600ff";
    ctx.stroke();

    //PLUTÓN 
    let pPluton = rotatePoint({ x: -800, y: 0 }, aPluton);
    ctx.beginPath();
    ctx.arc(pPluton.x + cx, pPluton.y + cy, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#696905";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#f5f5dc";
    ctx.stroke();


    

    aMercurio += 0.05;
    aVenus += 0.035;
    aTierra += 0.025;
    aMarte += 0.018;
    aJupiter += 0.012;
    aSaturno += 0.008;
    aUrano += 0.005;
    aNeptuno += 0.003;
    aPluton += 0.001;

    requestAnimationFrame(animar);
}

animar();