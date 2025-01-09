import express from 'express';
const router=express.Router();
import {authUser,
    loginUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile} from '../controller/userController.js';

router.post('/auth',authUser);
router.post('/',registerUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);


export default router;