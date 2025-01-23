const express=require('express');
const path=require('path');
const urlRoute=require('./routes/url.route')
const connectTodb=require('./db/db');
const staticRoute=require('./routes/staticRouter')
const URL=require('./models/url.model')
const userRoute=require('./routes/user.route')
const cookieParser=require('cookie-parser');
const {authUserOnly,checkAuth}=require("./middlewares/auth.middleware")

const app=express();
const PORT=8000;

connectTodb("mongodb://0.0.0.0/short-url")

app.set("view engine","ejs");
app.set('views',path.resolve('./views')) ;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use('/url',authUserOnly,urlRoute);
app.use('/',checkAuth,staticRoute);
app.use('/user',userRoute);


app.listen(PORT,()=>{
   console.log('Server Started')
})