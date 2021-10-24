import mongoose from 'mongoose';

const notifiationSchema = mongoose.Schema({
    suggestionTitle: String,
    suggestionSubtext: String,
    status: String,
    date: {
        type: Date,
        default: new Date()
    },
    priority: String,
    plantName: String
});

const notification = mongoose.model('notification', notifiationSchema)

export default notification;