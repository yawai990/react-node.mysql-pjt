const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes/userRoute');
const employeesRouter = require('./routes/employees');

dotenv.config();
const app = express();
const PORT =process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true,limit:'50MB'}));
app.use(cors());
app.use('/api',router).use('/api',employeesRouter)

app.listen(PORT,()=>console.log(`server is running in PORT ${PORT}`));