const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDb  = require('./config/db');


// Load environment variables from .env file
dotenv.config();

// database connect
connectDb();

const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// route
app.use("/api/v1/test", require("./routes/testRouts"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.get('/', (req, res) => {
    return res.status(200).send("<h1>welcome to food service applications</h1>");
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})