class potteryObj{
    constructor(id, nombre, precio, imagen, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    };
};

const potteryArray = [
    {
        id: 0,
      nombre: "Bowls",
      precio: '48,900',
      imagen: 'https://acdn.mitiendanube.com/stores/001/668/642/products/img_33421-b0f694831b4d6f02f916523808329534-1024-1024.jpg',
      stock: 10
    },
    {
        id: 1, 
      nombre: "Ensaladera",
      precio: '90,000',
      imagen: 'https://ceramicasivanros.com/161-large_default/bowl-ensaladera-30-cm-blanca.jpg',
      stock: 5
    },
    {
        id: 2,
      nombre: "Platos",
      precio: '42,000',
      imagen: 'https://i.etsystatic.com/9154481/r/il/57807f/3902587254/il_570xN.3902587254_kbqj.jpg',
      stock: 40
    },
    {
        id: 3,
      nombre: "Pocillos",
      precio: '35,000',
      imagen: 'https://i.pinimg.com/736x/4d/23/d1/4d23d1a5b75f4689398429cd882c6496.jpg',
      stock: 8
    },
    {
        id: 4,
      nombre: "Vasos",
      precio: '33,000',
      imagen: 'https://i.etsystatic.com/9154481/r/il/acfb9e/3748152960/il_570xN.3748152960_icxu.jpg',
      stock: 6
    },
    {
        id: 5,
      nombre: "Jarron",
      precio: '32,000',
      imagen: 'https://img.freepik.com/fotos-premium/dos-jarrones-artesanales-ceramica-flores-silvestres-secas-picos-velas-aromaticas-pie-sobre-mesa-cubierta-pano-lino-blanco_274679-10774.jpg',
      stock: 5
    },
    {
        id: 6,
      nombre: "Florero",
      precio: '54,000',
      imagen: 'https://m.media-amazon.com/images/I/71sUpqBsjQS._AC_SL1500_.jpg',
      stock: 12
    },
    {
        id: 7,
      nombre: "Matera",
      precio: '42,000',
      imagen: 'https://i.etsystatic.com/16650847/r/il/bdea36/3058023386/il_570xN.3058023386_prn4.jpg',
      stock: 8
    },
  ];

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

    const stock = document.createElement('stock');
    stock.innerText = `hay disponibles: ${el.stock} productos`;
    el.stockObj = stock;
    
    productos.appendChild(card);

    card.appendChild(imagen);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(stock);

    
});


let compra;

function comprarProductos(){
    const cantidad = parseInt(prompt('Cuantos productos desea comprar?'));
    if(potteryArray[compra - 1]){
        const producto = potteryArray[compra - 1];
        if(producto.stock >= cantidad){
            const validar = confirm(`Quiere continuar con la compra de ${cantidad} ${producto.nombre}???`);
            if(validar){
                producto.stock -= cantidad;
                alert(`Gracias por su compra, ha comprado ${cantidad} ${producto.nombre}`);
                producto.stockObj.innerText = `hay disponibles: ${producto.stock} productos`;
            } else {
                alert('Compra cancelada');
            }
        } else {
                alert(`No hay suficiente stock para comprar ${cantidad} ${producto.nombre} lo sentimos, 
                
            hay disponibles ${producto.stock} ${producto.nombre}`);
        };
    } else {
        alert('Ingrese un prodcuto valido!')
    };

};

compra = parseInt(prompt(`GESTOR DE COMPRAS

1. COMPRAR BOWLS
2. COMPRAR ENSALADERA
3. COMPRAR PLATOS
4. COMPRAR POCILLOS
5. COMPRAR VASOS
6. COMPRAR JARRON
7. COMPRAR FLORERO
8. COMPRAR MATERA

0. PARA SALIR`
));

switch(compra){
    case 1:
        comprarProductos()
        break;
    case 2: 
        comprarProductos()
        break;  
    case 3: 
        comprarProductos()
        break; 
    case 4: 
        comprarProductos()
        break; 
    case 5: 
        comprarProductos()
        break; 
    case 6: 
        comprarProductos()
        break; 
    case 7: 
        comprarProductos()
        break; 
    case 8: 
        comprarProductos()
        break; 
    case 0: 
        alert('Gracias por visitarnos, lo esperamos de vuelta!!!');
        break;   
    default:
        alert('Ingrese una opcion valida');      
}