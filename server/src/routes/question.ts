import { getQuestions, submitQuestion } from "../controllers/question";

const router = require("express").Router();

router.get("/", getQuestions);
router.post("/", submitQuestion);

export default router;
