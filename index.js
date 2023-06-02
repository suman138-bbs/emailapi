import express from 'express';
import emailRoutes from './Routes/emailRoutes.js'
const app = express();

app.use('api/v1/mail',emailRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server runninng at ${PORT}`)
})