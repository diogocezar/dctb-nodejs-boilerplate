/**
 * This class will be extended by all Models
 */
class BaseModel{
	constructor(model) {
		this.model = model
	}
	findOne(id, callBack){
		this.model.findById(id, callBack)
	}
	findAll(callBack){
		this.model.find({}, null, {lean:true}, callBack)
	}
	insert(itemInsert, callBack){
		new this.model(itemInsert).save(callBack)
	}
	deleteOne(id, callBack){
		this.model.find({_id: id}).remove(callBack)
	}
	updateOne(id, itemUpdate, callBack){
		this.model.findById(id, function(err, item){
			item.set(itemUpdate)
			item.save(callBack)
		})
	}
}

module.exports = BaseModel