const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes/userRoute')

dotenv.config();
const app = express();
const PORT =process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true,limit:'50MB'}));
app.use(cors());
app.use('/api',router)

app.listen(PORT,()=>console.log(`server is running in PORT ${PORT}`));