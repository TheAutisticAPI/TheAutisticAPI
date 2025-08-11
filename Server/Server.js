require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const app = express();

const emotionRouter = require('./Router/emotion-router.js');


const corsOptions = {
  origin: [
    'http://localhost:5173', // Your local frontend
    'https://theautisticapi.vercel.app',
    'https://puapi.vercel.app' // Your deployed frontend URL
  ],
  methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
  credentials: true,
};


//middleware
app.use(cors(corsOptions));


app.use(express.json());

app.use("/api/auth", authRouter);
app.use('/api/emotion', emotionRouter);





// app.get("/", (req, res) => {
//     res.status(200).send("Hello World!");   
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Register Page");      
// });

app.get("/", (req, res) => {
    // console.log("hi backend running");
    res.status(200).send("hi backend running");
});

const PORT= process.env.PORT 

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            // console.log(`Server is running on port ${PORT}`);
        });
     });
