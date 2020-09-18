//Variables
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Router imports
const categoriesRouter = require('./routers/categories_router.js');
const videosRouter = require('./routers/videos_router.js');
const commentsRouter = require('./routers/comments_router.js');

//Initilization
const app = express();
require('dotenv').config();

mongoose.connect(process.env.DB_STRING,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
    app.listen(80, ()=>{
        console.log('Server started on port 8080');
    });
});

//Default middlewares
app.use(bodyParser.json());

//Routes
app.use('/categories', categoriesRouter);
app.use('/videos', videosRouter);
app.use('/comments', commentsRouter);
