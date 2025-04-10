import userModel from "../usermodel.js";

export const getUserData = async(req,res) =>
{
  try{
       const {userId}  = req.body;
       const user  = await userModel.findById(userId);
       if(!user)return res.json({success:false, message: 'Invalid otp'});
    

        res.json({success:true,
        userData:{
            name: user.name,
            isAccountVerified: user.isAccountVerified
        }
       });

  }
  catch(error)
  {
    return res.json({success:false, message: 'Invalid otp'});

  }
}