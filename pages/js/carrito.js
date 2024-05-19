document.addEventListener('DOMContentLoaded', () => {
    const carritoProductos = JSON.parse(localStorage.getItem('carritoProductos')) || [];
    const carritoContenedor = document.getElementById('carrito');

    if (!carritoContenedor) {
        console.error('No se encontró el contenedor del carrito.');
        return;
    }

    function mostrarCarrito() {
        carritoContenedor.innerHTML = '';

        let totalGlobal = 0;

        carritoProductos.forEach(producto => {
            const carritoCard = document.createElement('div');
            carritoCard.className = 'carrito-card';

            const imagenCarrito = document.createElement('img');
            imagenCarrito.src = producto.imagen;
            carritoCard.appendChild(imagenCarrito);

            const nombreCarrito = document.createElement('p');
            nombreCarrito.innerText = producto.nombre;
            carritoCard.appendChild(nombreCarrito);

            const cantidadCarrito = document.createElement('p');
            cantidadCarrito.innerText = `Cantidad: ${producto.cantidad}`;
            carritoCard.appendChild(cantidadCarrito);

            const precioTotalCarrito = document.createElement('p');
            precioTotalCarrito.innerText = `Precio total: $${producto.precioTotal.toFixed(2)}`;
            carritoCard.appendChild(precioTotalCarrito);

            totalGlobal += producto.precioTotal;

            carritoContenedor.appendChild(carritoCard);
        });

        const totalGlobalElement = document.createElement('p');
        totalGlobalElement.innerText = `Total de sus productos: $${totalGlobal.toFixed(2)}`;
        carritoContenedor.appendChild(totalGlobalElement);
    }

    mostrarCarrito();
});
