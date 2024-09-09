precio = 400000

cantidad = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = 0


valorTotalSpan = document.querySelector(".valor-total")


botonMas = document.querySelectorAll("button")[0];
botonMas.addEventListener("click", () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = cantidad * precio;
});


botonMenos = document.querySelectorAll("button")[1];
botonMenos.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        valorTotalSpan.innerHTML = cantidad * precio;
    }
});