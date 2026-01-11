import {v2 as cloudinary} from "cloudinary"

import fs from "fs"



cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});



const uploadCloudinary = async (localFilePath) => {

try{
  if(!localFilePath) return null
  //upload file on cloudinary
const response = await cloudinary.uploader.upload(localFilePath,{
  resource_type:"auto"
})
// file has been uploaded succesfully
consloe.log("file is uploaded on cloudINARY Sucessfluy",response.url);
return response
}catch (error){
  fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload opperation got failed
  return null;

}

}


export {uploadCloudinary}




cloudinary.v2.uploader
.upload(localFilePath, {
  resource_type: "video", 
  public_id: "my_video",
  overwrite: true, 
  notification_url: "https://a7b9c2d1.ngrok-free.app/cloudinary/notify" })
.then(result=>console.log(result));