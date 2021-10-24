import mongoose from 'mongoose';

const measurementSchema = mongoose.Schema({
    height: Number,
    leafColor: String,
    exposure: String,
    temperature: Number,
    humidity: Number,
    date: {
        type: Date,
        default: new Date()
    },
});

const measurement = mongoose.model('measurement', measurementSchema)

export default measurement;