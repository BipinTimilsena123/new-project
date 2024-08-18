const express = require('express');
const router = express.Router();
const { createCard, searchCards, getCardByTitle } = require('../controllers/cardsController.js');

router.post('/cards', createCard);
router.get('/cards', searchCards); 
router.get('/cards/:title', getCardByTitle);

module.exports = router;

