const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const http = require('http');

dotenv.config(); // Load environment variables from .env file
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

const _dirname = path.resolve();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000'], // Update or extend this array as needed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// MongoDB connection setup
const username = encodeURIComponent("montythakur12345679");
const password = encodeURIComponent("9870");
const clusterUrl = "cluster0.nxwmf.mongodb.net";
const authMechanism = "SCRAM-SHA-1";

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}?authMechanism=${authMechanism}&retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log('Database connected successfully'))
  .catch((error) => {
    console.error('Error in DB Connection', error);
    process.exit(1);
  });


// Serve static assets if in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Import and mount routes
const userRoutes = require("./routes/userRoute");
app.use('/api', userRoutes);


// app.use(express.static(path.json(_dirname,"/frontend/disc")))
// Create and start the HTTP server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
