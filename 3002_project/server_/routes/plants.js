import express from 'express';

import { getPlants, createPlant, updatePlant } from '../controllers/plants.js';

const router = express.Router();

router.get('/', getPlants);
router.post('/', createPlant);
// router.get('/:id', getPlant);
router.patch('/:id', updatePlant);
// router.delete('/:id', deletePlant);

export default router;