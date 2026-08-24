const preciosUL = document.getElementById("PreciosUL");

async function CargarPrecios() {
    const preciosUL = document.getElementById("PreciosUL"); // <--- Mover aquí
    if (!preciosUL) return;

    const res = await fetch("precios.json");
    const precios = await res.json();

    precios.forEach((precio) => {
        preciosUL.innerHTML += `<li>${precio.servicio} <span>$ ${precio.precio}</span></li>`;
    });
}

document.addEventListener("DOMContentLoaded", CargarPrecios);