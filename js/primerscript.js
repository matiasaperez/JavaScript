const productos = [
	{ id: '0', tipo: "Sommier", modelo: "Una plaza", precio: 20000, img:"assets/s1.jpg"},
	{ id: '1', tipo: "Sommier", modelo: "Dos plazas", precio: 60000, img: "assets/s2.jpg" },
	{ id: '2', tipo: "Sommier", modelo: "Kingsize", precio: 200000, img: "assets/s3.jpg" },
	{ id: '3', tipo: "Sillon", modelo: "Dos cuerpos", precio: 30000, img: "assets/dc.jpg" },
	{ id: '4', tipo: "Sillon", modelo: "Tres cuerpos'", precio: 50000, img: "assets/tc.jpg" },
  ];
  
  const contenedorTienda = document.getElementById('contenedorTienda');
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const carrito = []
  for (const producto of productos) {
  

	const divProducto = document.createElement('div');
	const imgProducto = document.createElement('img');
	const nombreProducto = document.createElement('h2');
	const precioProducto = document.createElement('h3');
	const botonComprar = document.createElement('button');
  

	divProducto.className = 'card';
	imgProducto.className = 'card-img-top';
	nombreProducto.className = 'nombre-producto';
	precioProducto.className = 'card-precio';
	botonComprar.className = 'btn btn-primary';
  

	divProducto.id = producto.id;
	imgProducto.src = producto.img;
	nombreProducto.append(producto.modelo);
	precioProducto.append(`$${producto.precio}`);
	botonComprar.append('Comprar');
	botonComprar.id = `${producto.id}`;
	
	 
	botonComprar.onclick = () => {
	  const productoComprado = productos.find(producto => producto.id === botonComprar.id);
	  carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio });
	  let productoCompradoJSON = JSON.stringify(productoComprado)
		localStorage.setItem('productoComprado', productoCompradoJSON)

	}

	divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
	contenedorTienda.append(divProducto);
  
  }
  



	
  const mostrarCarrito =  () => {
  
	for (const producto of carrito) {
	  const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
	  const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
	  contenedorCarrito.innerHTML += nombreProducto
	  contenedorCarrito.innerHTML += precioProducto
	}
	

	const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
	contenedorCarrito.append(`Total Compra :  ${total}`);
  };

 
  let itemsfromStorage = localStorage.getItem('productoComprado')
  let productosBack = JSON.parse( itemsfromStorage)


  const botonCarrito = document.getElementById("btnCarrito")
  botonCarrito.onclick = mostrarCarrito;


  const btnbuscar = document.getElementById("btnBuscar");
  const inputBuscador = document.getElementById('buscadorInput');
  
  const buscarProducto = ()=>{
	   const productoTipo = inputBuscador.value;
  
	   const resultadoBusqueda = productos.filter(producto => producto.tipo === productoTipo )
	   for(producto of productos){
  
		const id = producto.id;
		document.getElementById(id).style.display = "none";
  
	   }
	   for(producto of resultadoBusqueda){
  
		  const id = producto.id;
		  document.getElementById(id).style.display = "flex";
  
	   }
	   
  }
 
  
  btnbuscar.onclick = buscarProducto;