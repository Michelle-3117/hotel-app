import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

import { loginUser, registerUsers, getUsers, renderRegisterPage, renderLoginPage, renderHomePage, renderListingPage, renderSecListingPage, logout} from "../controller/userController";



/* GET home page. */
router.post('/register', registerUsers)
router.post('/logins', loginUser)
router.get('/allusers',getUsers)
router.post('/logout', logout)

// ejs routes

router.get('/signup', renderRegisterPage);
router.get('/signin', renderLoginPage);
router.get('/home', renderHomePage);
router.get('/listing1', renderListingPage);
router.get('/listing2', renderSecListingPage)


export default router;
