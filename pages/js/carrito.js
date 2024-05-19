document.addEventListener('DOMContentLoaded', () => {
    let carritoProductos = JSON.parse(localStorage.getItem('carritoProductos')) || [];
    const carritoContenedor = document.getElementById('carrito');

    if (!carritoContenedor) {
        console.log('No se encontró el contenedor del carrito.');
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
            precioTotalCarrito.innerText = `Precio total: $${producto.precioTotal.toLocaleString()}`;
            carritoCard.appendChild(precioTotalCarrito);


            totalGlobal += producto.precioTotal;

            carritoContenedor.appendChild(carritoCard);

        });

        const limpiarCarritoButton = document.createElement('button');
            limpiarCarritoButton.innerText = 'Eliminar Productos';
            limpiarCarritoButton.addEventListener('click', () => {
                carritoProductos = [];
                mostrarCarrito();
                localStorage.removeItem('carritoProductos');
            });
            carritoContenedor.appendChild(limpiarCarritoButton);

        const totalGlobalElement = document.createElement('p');
        totalGlobalElement.innerText = `Total de los productos es: $${totalGlobal.toLocaleString()}`;
        carritoContenedor.appendChild(totalGlobalElement);
        
    }

    mostrarCarrito();
});
