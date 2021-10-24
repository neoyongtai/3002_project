import express from 'express';

import { getPlants, createPlant, updatePlant, deletePlant } from '../controllers/plants.js';
import { getNotifications } from '../controllers/notifications.js'
import { getMeasurements } from "../controllers/measurements.js"

const router = express.Router();


// Plant Related
router.get('/', getPlants);
router.post('/', createPlant);
// router.get('/:id', getPlant);
router.patch('/:id', updatePlant);
router.delete('/:id', deletePlant);

// Notifications Related
router.get('/notifications', getNotifications);

// Plant growth related
router.get('/measurements', getMeasurements);

export default router;