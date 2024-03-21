import express from 'express';

import { getAllHotel } from '../controllers/hotelContreller.js';

const router = express.Router();

//get All tour
router.get('/',getAllHotel);

export default router;