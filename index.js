const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 

require('dotenv').config();

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/events', require('./routes/events'));
app.use('/bookings', require('./routes/bookings'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
