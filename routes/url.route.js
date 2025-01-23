const express=require('express');
const {generateNewShortURL,handleRedirectURL,handleGetAnalytics}=require('../controllers/url.controller')

const router=express.Router();


router.post('/',generateNewShortURL);
router.get('/:shortid',handleRedirectURL)
router.get('/analytics/:shortid',handleGetAnalytics)

module.exports=router;