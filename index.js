const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 

require('dotenv').config();

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
