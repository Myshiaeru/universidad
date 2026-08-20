// =========================================================
// FUNCIONES BASE DE TRANSFORMACIÓN
// (compartidas por todos los canvas del proyecto)
// =========================================================

// --- Traslación ---
// Mueve un vértice sumando una distancia (tx, ty) a sus coordenadas.
function translatePoint(point, tx, ty) {
    return {
        x: point.x + tx,
        y: point.y + ty
    };
}

// --- Escalamiento ---
// Cambia el tamaño multiplicando las coordenadas por un factor.
function scalePoint(point, sx, sy) {
    return {
        x: point.x * sx,
        y: point.y * sy
    };
}

// --- Rotación ---
// Rota un vértice un ángulo (en radianes) usando seno y coseno.
function rotatePoint(point, angle) {
    return {
        x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
        y: point.x * Math.sin(angle) + point.y * Math.cos(angle)
    };
}

// --- Dibujar un polígono a partir de una lista de vértices ---
// ctx: contexto 2d del canvas donde se va a dibujar
// vertices: array de { x, y }
// strokeColor: color del contorno (opcional, por defecto negro)
// fillColor: color de relleno (opcional, si no se pasa no rellena)
function drawPolygon(ctx, vertices, strokeColor = "black", fillColor = null) {
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);

    for (let i = 1; i < vertices.length; i++) {
        ctx.lineTo(vertices[i].x, vertices[i].y);
    }

    ctx.closePath();

    if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar los vértices como puntos rojos
    vertices.forEach(v => {
        ctx.fillStyle = "red";
        ctx.fillRect(v.x - 3, v.y - 3, 6, 6);
    });
}

// --- Aplicar una transformación completa a un set de vértices ---
// Aplica en orden: escala -> rotación -> traslación
// (igual que en la diapositiva de animación)
function applyTransform(vertices, { sx = 1, sy = 1, angle = 0, tx = 0, ty = 0 } = {}) {
    return vertices.map(vertex => {
        const scaled = scalePoint(vertex, sx, sy);
        const rotated = rotatePoint(scaled, angle);
        const translated = translatePoint(rotated, tx, ty);
        return translated;
    });
}