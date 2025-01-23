const shortid = require("shortid");
const URL = require("../models/url.model");

async function generateNewShortURL(req, res, next) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "URL is Required" });
  }
  const shortId = shortid();
  URL.create({
    shortId: shortId,
    redirectURL: body.url,
    vistHistory: [],
    createdBy:req.user._id
  });
  return res.render("home",{
   id:shortId,
  })
}

async function handleRedirectURL(req,res){
   const shortId=req.params.shortid;

   const entry=await URL.findOneAndUpdate({shortId},{
      $push:{
         vistHistory:{
            timestamp:Date.now()
         }
      }
   })
 res.redirect(entry.redirectURL);

}

async function handleGetAnalytics(req,res) {
   const shortId=req.params.shortid;

   const result=await URL.findOne({shortId})
      return res.json({
         totalClicks:result.vistHistory.length,
         analytics:result.vistHistory
      })
   
   
}



module.exports={generateNewShortURL,handleRedirectURL,handleGetAnalytics}
