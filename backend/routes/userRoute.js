import express from 'express';
const router=express.Router();
import {
    loginUser,
    logoutUser,
    registerUser,
    getUserProfile,
    updateUserProfile} from '../controller/userController.js';
import { protector } from '../middlwares/authMiddlware.js';


router.post('/',registerUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
router.route('/profile')
.get(protector,getUserProfile)
.put(protector,updateUserProfile);


export default router;