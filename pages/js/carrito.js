document.addEventListener('DOMContentLoaded', () => {
    let carritoProductos = JSON.parse(localStorage.getItem('carritoProductos')) || [];
    const carritoContenedor = document.getElementById('carrito');

    if (!carritoContenedor) {
        console.log('No se encontró el contenedor del carrito.');
        return;
    }

    function alertaEliminar(nombreProducto, index){
        Swal.fire({
        title: "Quiere Eliminar el Producto?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Producto Eliminado", "", "success");
          carritoProductos.splice(index, 1);
            actualizarCarrito();
        }
      });
    }

    function obtenerStockDisponible(nombreProducto) {
        const potteryArray = JSON.parse(localStorage.getItem('potteryArray')) || [];
        const producto = potteryArray.find(producto => producto.nombre === nombreProducto);
        return producto ? producto.stock : 0;
    }

    function mostrarCarrito() {
        carritoContenedor.innerHTML = '';

        let totalGlobal = 0;

        carritoProductos.forEach((producto, index) => {
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

            const disminuirCantidad = () => {
                if (producto.cantidad > 1) {
                    producto.cantidad--;
                    producto.precioTotal = producto.cantidad * producto.precio;
                    actualizarCarrito();
                }
            };

            const eliminarProducto = () => {
                alertaEliminar(producto.nombre, index);
            };

            const disminuirButton = document.createElement('button');
            disminuirButton.innerText = '-';
            disminuirButton.addEventListener('click', disminuirCantidad);
            disminuirButton.className = 'cantBoton';

            const eliminarButton = document.createElement('button');
            eliminarButton.innerText = 'Eliminar';
            eliminarButton.addEventListener('click', eliminarProducto);
            eliminarButton.className = 'eliminarBoton';

            carritoCard.appendChild(disminuirButton);
            carritoCard.appendChild(eliminarButton);
           
            totalGlobal += producto.precioTotal;

            carritoContenedor.appendChild(carritoCard);

        });

        const totalGlobalElement = document.createElement('p');
        totalGlobalElement.innerText = `Total de los productos es: $${totalGlobal.toLocaleString()}`;
        carritoContenedor.appendChild(totalGlobalElement);

        localStorage.setItem('carritoProductos', JSON.stringify(carritoProductos));
    }

    function actualizarCarrito() {
        mostrarCarrito();
    }

    mostrarCarrito();
});