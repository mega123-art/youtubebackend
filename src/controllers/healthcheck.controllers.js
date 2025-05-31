import { Apiresponse } from "../utils/apiResponse.js";


import { asynHandler } from "../utils/asynchandler.js";
const healthcheck=asynHandler(async(req,res)=>{
return res
.status(200)
.json(new Apiresponse(200,"ok","health check passed"))
})
export {healthcheck}