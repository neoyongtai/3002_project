import mongoose from 'mongoose'
import express from 'express'
import Measurements from '../models/measurements.js'

export const getMeasurements = async (req, res) => {
    try {
        const measurements = await Measurements.find()

        res.status(200).json(measurements)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}