const express = require('express');
const cardRoutes = require('./routes/cards.js');
const cors=require("cors");
require('./models/db.js');

const app = express();
app.use(cors());


app.use(express.json()); 


app.use('/api', cardRoutes);


app.get('/ping', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
