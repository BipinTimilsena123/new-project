const Card = require('../models/card.js');

const createCard = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).send({ message: 'Card created successfully' });
    } catch (err) {
        res.status(500).send({ message: 'Error creating card', error: err.message });
    }
};


const searchCards = async (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';

    try {
        let cards;
        if (query) {
        
            cards = await Card.find({
                $or: [
                    { title: { $regex: query, $options: 'i' } },
                    { description: { $regex: query, $options: 'i' } }
                ]
            });
        } else {
        
            cards = await Card.find();
        }

        res.status(200).json(cards);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching cards', error: err.message });
    }
};


const getCardByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const card = await Card.findOne({ title });
        if (!card) {
            return res.status(404).send({ message: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching card', error: err.message });
    }
};

module.exports = { createCard, searchCards, getCardByTitle };

