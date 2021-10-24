import mongoose from 'mongoose'
import express from 'express'
import PlantInfo from '../models/plantsInfo.js'

export const getPlants = async (req, res) => {
    try {
        const plantInfos = await PlantInfo.find()

        res.status(200).json(plantInfos)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPlant = async (req, res) => {
    const plant = req.body;

    const newPlant = new PlantInfo(plant);

    try {
        await newPlant.save();
        res.status(201).json(newPlant)
    } catch(error) {
        res.status(409).json({ message: error.message })
    }

}

export const updatePlant = async (req, res) => {

    const { id: _id } = req.params;
    const plant = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No plant with such id');


    const updatedPlant = await PlantInfo.findByIdAndUpdate(_id, { ...plant, _id }, { new: true });

    res.json(updatedPlant)
}

export const deletePlant = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No plant with such id');

    await PlantInfo.findByIdAndRemove(id);

    res.json({ message: 'Plant deleted successfully '})
}