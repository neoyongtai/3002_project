import mongoose from 'mongoose';

const plantSchema = mongoose.Schema({
    plantName: String,
    plantAge: Number,
    plantSpecies: String,
    plantImage: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const plantInfo = mongoose.model('plantInfo', plantSchema)

export default plantInfo;