
fetch("./js/productos.json")
.then(response => response.json())
.then(data => {

    data.forEach(el => {
        const productos = document.getElementById('contenedor');
    
        const card = document.createElement('div');
        card.className = 'card';
        
        const imagen = document.createElement('img');
        imagen.src = el.imagen;
        imagen.alt = `NoImage`;
        imagen.className = 'imagenProd';
    
        const nombre = document.createElement('p');
        nombre.innerText = el.nombre;
    
        const precio = document.createElement('p');
        precio.innerText = `$${parseInt(el.precio).toLocaleString()}`;
        precio.className = 'precio';
    
    
        const stock = document.createElement('p');
        stock.innerText = `hay disponibles: ${el.stock} productos`;
        el.stockObj = stock;
    
        const cantidadLabel = document.createElement('label');
        cantidadLabel.innerText = 'Cantidad:';
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.value = 1;
        cantidadInput.min = 1;
        cantidadInput.max = el.stock; 
    
    
        const aumentarCantidad = () => {
            if (parseInt(cantidadInput.value) < parseInt(el.stock)) {
                cantidadInput.value = parseInt(cantidadInput.value) + 1;
            }
        };
    
        const disminuirCantidad = () => {
            if (parseInt(cantidadInput.value) > 1) {
                cantidadInput.value = parseInt(cantidadInput.value) - 1;
            }
        };
    
        const aumentarButton = document.createElement('button');
        aumentarButton.innerText = '+';
        aumentarButton.addEventListener('click', aumentarCantidad);
        aumentarButton.className = "cantBoton";
    
        const disminuirButton = document.createElement('button');
        disminuirButton.innerText = '-';
        disminuirButton.addEventListener('click', disminuirCantidad);
        disminuirButton.className ="cantBoton";
    
        const cantidad = document.createElement('div');
        cantidad.className = 'cantidad';
    
        const button = document.createElement("button");
        button.innerText = "Agregar";
        button.className = "boton";
    
        button.addEventListener('click', () => {
            const carritoProductos = JSON.parse(localStorage.getItem('carritoProductos')) || [];
            const productoExistente = carritoProductos.find(producto => producto.nombre === el.nombre);
            
            const cantidad = parseInt(cantidadInput.value);
            const precio = parseFloat(el.precio);
    
            if (productoExistente) {
                productoExistente.cantidad += cantidad;
                productoExistente.precioTotal = productoExistente.cantidad * precio;
            } else {
                carritoProductos.push({
                    nombre: el.nombre,
                    imagen: el.imagen,
                    precio: precio,
                    cantidad: cantidad,
                    precioTotal: cantidad * precio
                });
            }
    
            localStorage.setItem('carritoProductos', JSON.stringify(carritoProductos));
            console.log('Producto añadido al carrito:', carritoProductos);
    
            el.stock -= cantidad;
            stock.innerText = `hay disponibles: ${el.stock} productos`;
            cantidadInput.max = el.stock; 
        });
    
    
        cantidad.appendChild(disminuirButton);
        cantidad.appendChild(cantidadInput);
        cantidad.appendChild(aumentarButton);
        
        productos.appendChild(card);
    
        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(stock);
        card.appendChild(cantidad);
        card.appendChild(button);
    
    });
})






