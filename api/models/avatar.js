'use strict';

const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	PicSchema = new Schema({
		name: {
			type: String,
			required: [true, 'Укажите описание картинки']
		},
		picture: {
			type: String
		}
	});

//просим mongoose сохранить молель для ее дальнейшего использования
mongoose.model('pic', PicSchema);