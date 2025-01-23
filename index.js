const express=require('express');
const urlRoute=require('./routes/url.route')
const connectTodb=require('./db/db');
const URL=require('./models/url.model')

const app=express();
const PORT=8000;

connectTodb("mongodb://0.0.0.0/short-url")

app.use(express.json());

app.use('/url',urlRoute);


app.listen(PORT,()=>{
   console.log('Server Started')
})