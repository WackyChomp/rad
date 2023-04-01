import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

// routes
import generalRoutes from './routes/general.js';
import clientRoutes from './routes/client.js';
import salesRoutes from './routes/sales.js';
import managementRoutes from './routes/management.js';

// data imports
import User from './models/User.js';
import { dataProduct, dataProductStat, dataUser } from './data/index.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';


/* ----- Configurations ----- */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy:'cross-origin' }));

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* ----- Routes ----- */
app.use('/general', generalRoutes);
app.use('/client', clientRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);


/* ----- Mongoose Setup */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server Port:${PORT}`));

    // ONLY ADD DATA ONCE TO AVOID DUPLICATES (comment out after saving to mongoDB)
    //User.insertMany(dataUser);          // from data folder index.js
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);


}).catch((error) => console.log(`${error} did not connect :(`));
