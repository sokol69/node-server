const mongoose = require('mongoose');
const config = require('../../config/config');

//заменяем mongoose промисы на глобальные
mongoose.Promise = global.Promise;

//выполняем подключение к БД
mongoose
	.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
		useMongoClient: true
	})
	.catch(e => {
		console.error(e);
		throw e;
	});

//если успешно подключились
mongoose.connection.on('connected', function() {
	console.log(
		`Mongoose default connection open mongodb: //${config.db.host}:${
			config.db.port
		}/${config.db.name}`
	);
});

//если подключение произошло с ошибкой
mongoose.connection.on('error', function(err) {
		console.log('Mongoose default connection error: ' + err);
	});

//если происходит дисконект
mongoose.connection.on('disconnected', function() {
		console.log('Mongoose default connection disconnected');
	});

//если процесс завершил работу
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log(
			'Mongoose default connection disconnected through app termination'
		);
		process.exit(0);
	});
});

//подключаем схемы
require('./blog');
require('./avatar');
