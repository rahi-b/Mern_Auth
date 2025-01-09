import asyncHandler from "async-handler";


const authUser =asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Auth user is success'});
});

const registerUser =asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Register user is success'});
});

const loginUser =asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Login user is success'});
});

const logoutUser =asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Logout user is success'});
});

const getUserProfile =asyncHandler(async(req,res)=>{
    res.status(200).json({message:' user profile is success'});
});

const updateUserProfile =asyncHandler(async(req,res)=>{
    res.status(200).json({message:'user profile is updated success'});
});
export{ authUser,
    loginUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile
 }