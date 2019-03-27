var BDTienda = require('./datos/bdtienda.js'),
	Operaciones = require('./datos/usuariosCRUD.js');
	OpArticulos = require('./datos/articulosCRUD.js');

Operaciones.eliminarUsuario((error, result) => {
	if(error) console.log(error);
	else{
		console.log(result);
		Operaciones.insertarUsuario((error, result) => {
			if(error) console.log(error);
			console.log(result);
		});
	}
});

OpArticulos.eliminarAllArticulos((error, result) => {
	if(error) console.log(error);
	else {
		console.log(result);
		var articulos = [
			{nombre: "Aguacate", img: "aguacate.jpg", precio: "3.00", stock: "56"},
			{nombre: "Ajo", img: "ajo.jpg", precio: "1.00", stock: "85"},
			{nombre: "Almendras", img: "almendras.jpg", precio: "2.00", stock: "38"},
			{nombre: "Arándanos", img: "arandanos.jpg", precio: "4.00", stock: "49"},
			{nombre: "Brócoli", img: "brocoli.png", precio: "2.00", stock: "55"},
			{nombre: "Calabaza", img: "calabaza.jpg", precio: "5.00", stock: "60"},
			{nombre: "Canela", img: "canela.jpg", precio: "1.00", stock: "30"},
			{nombre: "Cebolla", img: "cebolla.jpg", precio: "3.00", stock: "50"},
			{nombre: "Fresa", img: "fresa.jpg", precio: "1.00", stock: "70"},
			{nombre: "Kiwi", img: "kiwi.jpg", precio: "2.00", stock: "56"},
			{nombre: "Limón", img: "limon.jpg", precio: "1.00", stock: "90"},
			{nombre: "Lychee", img: "lychee.jpg", precio: "3.00", stock: "60"},
			{nombre: "Maiz", img: "maiz.jpg", precio: "2.50", stock: "50"},
			{nombre: "Manzana", img: "manzana.jpg", precio: "1.50", stock: "69"},
			{nombre: "Naranja", img: "naranja.jpg", precio: "2.00", stock: "80"},
			{nombre: "Papa", img: "papa.jpg", precio: "5.00", stock: "40"},
			{nombre: "Pasta", img: "pasta.jpg", precio: "1.50", stock: "77"},
			{nombre: "Pimienta", img: "pimienta.jpg", precio: "1.80", stock: "90"},
			{nombre: "Repollo", img: "repollo.jpg", precio: "3.50", stock: "47"},
			{nombre: "Tomate", img: "tomate.jpg", precio: "1.40", stock: "38"},
			{nombre: "Zanahoria", img: "zanahoria.jpg", precio: "1.20", stock: "88"}
		]
		for (var i = 0; i < articulos.length ; i++) {
			var articulo = articulos[i];
			OpArticulos.insertarArticulo(articulo, (error, result) => {
				if(error) console.log(error);
				console.log(result);
			});
		}
	}
});
