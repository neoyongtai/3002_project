import mongoose from 'mongoose'
import express from 'express'
import Notifications from '../models/notifications.js'

export const getNotifications = async (req, res) => {
    try {
        const notifcations = await Notifications.find()

        res.status(200).json(notifcations)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}