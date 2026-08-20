// =========================================================
// PERSONAJE - armado con las coordenadas de Geogebra
// Usa translatePoint / drawPolygon ya definidos en transformaciones.js
// =========================================================

const canvasPersonaje = document.getElementById("canvasPersonaje");
const ctxPersonaje = canvasPersonaje.getContext("2d");

// --- Conversión de coordenadas Geogebra -> Canvas ---
// (Geogebra tiene el eje Y hacia arriba, el canvas lo tiene hacia abajo,
// por eso se invierte con el signo negativo)
const geoScale = 44;   // px por unidad
const geoOffsetX = 400;
const geoOffsetY = 750;

function geo(x, y) {
    return { x: geoOffsetX + x * geoScale, y: geoOffsetY - y * geoScale };
}

// --- Puntos (tal como los tienes en Geogebra) ---
const P = {
    A:  geo(-2.5, 12.5),
    b:  geo(2.5, 12.5),
    C:  geo(2.5, 10.5),
    C1: geo(2, 13.5),
    C2: geo(-2, 13.5),
    C3: geo(1, 14),
    C4: geo(-1, 14),
    C5: geo(-2.5, 10.5),
    C6: geo(-0.5, 13),
    C7: geo(-2, 13),
    C8: geo(-2, 11.5),
    C9: geo(-0.5, 11.5),
    C10: geo(1, 12.5),
    C11: geo(1.5, 12.5),
    C12: geo(1.5, 12),
    C13: geo(1, 12),
    C14: geo(2.5, 10),
    C15: geo(-2.5, 10),
    C16: geo(3, 9.5),
    C17: geo(-2.5, 9.5),
    C18: geo(3, 4),
    C19: geo(-3, 9.5),
    C20: geo(2.5, 9.5),
    C21: geo(-3, 4),
    C22: geo(-3.5, 4),
    C23: geo(3.5, 4),
    C24: geo(3.5, 1),
    C25: geo(-3.5, 1),
    C26: geo(-4, 9),
    C27: geo(-3.5, 8.5),
    C28: geo(-4.5, 8.5),
    C29: geo(-5, 4),
    C30: geo(5, 4),
    C31: geo(3.5, 9),
    C32: geo(3, 8.5),
    C33: geo(4, 8.5),
    C34: geo(-3, 0),
    C35: geo(-1, 0),
    C36: geo(-2.5, -5),
    C37: geo(-1.5, -5),
    C38: geo(1, 0),
    C39: geo(3, 0),
    C40: geo(1.5, -5),
    C41: geo(2.5, -5)
};

// --- Capas del personaje (cada una con su propio ciclo de vértices) ---
const cabeza = [P.C5, P.A, P.C2, P.C4, P.C3, P.C1, P.b, P.C];
const ojoIzquierdo = [P.C7, P.C6, P.C9, P.C8];
const ojoDerecho = [P.C10, P.C11, P.C12, P.C13];
const cuello = [P.C15, P.C14, P.C20, P.C17];
const cuerpo = [P.C19, P.C21, P.C18, P.C16];
const brazoIzquierdo = [P.C26, P.C28, P.C29, P.C27];
const brazoDerecho = [P.C31, P.C32, P.C30, P.C33];
const cintura = [P.C22, P.C25, P.C24, P.C23];
const piernaIzquierda = [P.C34, P.C35, P.C37, P.C36];
const piernaDerecha = [P.C38, P.C39, P.C41, P.C40];

// --- Dibujar personaje por capas (orden: atrás -> adelante) ---
function dibujarPersonaje() {
    ctxPersonaje.clearRect(0, 0, canvasPersonaje.width, canvasPersonaje.height);

    drawPolygon(ctxPersonaje, brazoIzquierdo, "#481a4d", "#6b0c74"); 
    drawPolygon(ctxPersonaje, brazoDerecho, "#481a4d", "#b80b53"); 
    drawPolygon(ctxPersonaje, piernaIzquierda, "#481a4d", "#6e0a4d");
    drawPolygon(ctxPersonaje, piernaDerecha, "#481a4d", "#91107f"); 
    drawPolygon(ctxPersonaje, cuerpo, "#481a4d", "#d441e1"); 
    drawPolygon(ctxPersonaje, cintura, "#481a4d", "#8b006d"); 
    drawPolygon(ctxPersonaje, cuello, "#481a4d", "#481a4d"); 
    drawPolygon(ctxPersonaje, cabeza, "#481a4d", "#740a6b"); 
    drawPolygon(ctxPersonaje, ojoIzquierdo, "#481a4d", "#d36cc3"); 
    drawPolygon(ctxPersonaje, ojoDerecho, "#481a4d", "#c779d8"); 
} 

dibujarPersonaje();