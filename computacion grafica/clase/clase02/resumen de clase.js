const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const x1=-50, y1=-50;
const x2=50, y2=-50;
const x3=0, y3=50;

const centerX = canvas.width/ 2;
const centerY = canvas.height / 2;

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;

ctx.moveTo(centerX + x1, centerY + y1);
ctx.lineTo(centerX + x2, centerY + y2);
ctx.lineTo(centerX + x3, centerY + y3);
ctx.lineTo(centerX + x1, centerY + y1);
ctx.stroke();