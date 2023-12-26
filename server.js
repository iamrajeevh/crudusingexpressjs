const express = require('express');
const app = express();
const Sequelize = require("sequelize");
const indexRouter = require('./routes/index');
const Authentication  = require('./middleware/Auth');
if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

app.use(express.json())
app.use(Authentication);
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

app.use('/',indexRouter)

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT} `));