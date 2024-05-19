
potteryArray.forEach(el => {
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
    precio.innerText = `$${el.precio}`;

    const stock = document.createElement('p');
    stock.innerText = `hay disponibles: ${el.stock} productos`;
    el.stockObj = stock;
    
    productos.appendChild(card);

    card.appendChild(imagen);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(stock);

    
});

