var Usuario = require('./usuarioModel.js');
module.exports.insertarUsuario = function (callback) {
	let User1 = new Usuario({nombre: "Nombre de usuario 1", email: 'pato@gmail.com', password:'Pa$$w0rd1'});

	User1.save((error) => {
		if(error) callback(error);
		callback(null,"Usuario almacenado");
	});
};

module.exports.eliminarUsuario = function (callback) {
	Usuario.remove({email: 'pato@gmail.com'}, (error) => {
		if(error) callback(error);
		callback(null,"Registro eliminado");
	});
};

module.exports.consultarUsuario = function (data, callback) {
	Usuario.findOne({email: data.email}, (err, user) => {
		if(user){
			if(user.password === data.password)
				callback(null,user);
      		else
      			callback('Contraseña incorrecta');
      	} else
			callback('Usuario no existe');
	});
};
