// =========================================================
// ACTIVIDAD - 3 figuras usando los vértices del pentágono
// Cada una con SU PROPIA animación:
//   1. Traslación (se mueve de un lado a otro)
//   2. Rotación (gira sobre su propio eje)
//   3. Escalamiento (crece y se encoge)
// =========================================================

// Vértices base del polígono (pentágono, igual que la diapositiva)
const PoliVertices = [
    { x: -50, y: -50 },
    { x: 50, y: -50 },
    { x: 80, y: 50 },
    { x: 0, y: 80 },
    { x: -80, y: 50 }
];

// ---------------------------------------------------------
// 1. TRASLACIÓN
// La figura se mueve de izquierda a derecha en su canvas
// ---------------------------------------------------------
const canvasTraslacion = document.getElementById("canvasTraslacion");
const ctxTraslacion = canvasTraslacion.getContext("2d");

let posX = 150;
let dirX = 2; // velocidad y dirección del movimiento

function animarTraslacion() {
    ctxTraslacion.clearRect(0, 0, canvasTraslacion.width, canvasTraslacion.height);

    const figura = PoliVertices.map(v => translatePoint(v, posX, 150));
    drawPolygon(ctxTraslacion, figura, "blue");

    // Actualizar posición
    posX += dirX;
    if (posX > 650 || posX < 150) dirX *= -1; // rebota en los bordes

    requestAnimationFrame(animarTraslacion);
}

animarTraslacion();

// ---------------------------------------------------------
// 2. ROTACIÓN
// La figura gira sobre su propio centro, fija en el canvas
// ---------------------------------------------------------
const canvasRotacion = document.getElementById("canvasRotacion");
const ctxRotacion = canvasRotacion.getContext("2d");

let anguloRotacion = 0;

function animarRotacion() {
    ctxRotacion.clearRect(0, 0, canvasRotacion.width, canvasRotacion.height);

    const figura = PoliVertices
        .map(v => rotatePoint(v, anguloRotacion))
        .map(v => translatePoint(v, 400, 150)); // centrada en el canvas
    drawPolygon(ctxRotacion, figura, "green");

    anguloRotacion += 0.02;

    requestAnimationFrame(animarRotacion);
}

animarRotacion();

// ---------------------------------------------------------
// 3. ESCALAMIENTO
// La figura crece y se encoge (efecto "pulso"), fija en el canvas
// ---------------------------------------------------------
const canvasEscalamiento = document.getElementById("canvasEscalamiento");
const ctxEscalamiento = canvasEscalamiento.getContext("2d");

let factorEscala = 1;
let creciendo = true;

function animarEscalamiento() {
    ctxEscalamiento.clearRect(0, 0, canvasEscalamiento.width, canvasEscalamiento.height);

    const figura = PoliVertices
        .map(v => scalePoint(v, factorEscala, factorEscala))
        .map(v => translatePoint(v, 400, 150)); // centrada en el canvas
    drawPolygon(ctxEscalamiento, figura, "purple");

    if (creciendo) {
        factorEscala += 0.01;
        if (factorEscala > 1.8) creciendo = false;
    } else {
        factorEscala -= 0.01;
        if (factorEscala < 0.4) creciendo = true;
    }

    requestAnimationFrame(animarEscalamiento);
}

animarEscalamiento();
