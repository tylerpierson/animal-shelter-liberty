const { model, Schema } = require('mongoose')



const animalSchema = new Schema ({
    name: String,
    species: String,
    image: String,
    reservedForAdoption: Boolean,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})

module.exports = model('Animal', animalSchema)