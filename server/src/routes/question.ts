import express from "express";
import { getQuestions } from "../controllers/question";
// import { register, login, verifyUser } from '../controllers/auth';

// import auth from '../middleware/auth';
// import user from '../middleware/user';

const router = require("express").Router();

router.get("/", getQuestions);

// router.post('/register', register);
// router.post('/login', login);
// router.get('/verify', user, verifyUser);

export default router;
