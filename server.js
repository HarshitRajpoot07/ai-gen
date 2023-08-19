// const express = require("express")
// const morgan = require('morgan')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const colors = require('colors')
// const dotenv = require('dotenv')
// const connectDB = require("./config/db")
// const errorHandler = require("./middlewares/errorMiddleware")


// //routespath
// const authRoutes = require('./routes/authRoutes');

// dotenv.config()

// connectDB();

// //rest object
// const PORT = process.env.PORT || 8080
// const app = express();


// //middlewares
// app.use(cors())
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(morgan('dev'))
// app.use(errorHandler)


// //API Routes
// app.use('/api/v1/auth',authRoutes);
// app.use("/api/v1/openai", require("./routes/openaiRoutes"));

// //listen server
// app.listen(PORT, ()=> {
//     console.log(`Server Running in ${process.env.DEV_MODE} mode on port on ${PORT}`.bgCyan.white);
// });


const express = require("express");
const morgan = require("morgan");
const cors = require("cors");  //CORS or Cross-Origin Resource Sharing in Node.js is a mechanism by which a front-end client can make requests for resources to an external back-end server
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

//routes path
const authRoutes = require("./routes/authRoutes");

//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

//API routes
app.use("/api/v1/auth", authRoutes);//In the given code snippet, the /api/v1/auth/logout is just a URL path, not necessarily a representation of an entire API. The path is used to make an HTTP POST request to the server, and it might be part of an API, but we cannot definitively say that "auth" is the name of the API.
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

//listen server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
      .white
  );
});