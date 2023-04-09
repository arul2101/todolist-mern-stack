import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';
import './utils/db.js';


const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})

